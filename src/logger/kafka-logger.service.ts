import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kafka, Producer, logLevel } from 'kafkajs';

export interface AuditLogEntry {
  // Audit context — propagado por el AG via headers
  traceId?:   string;   // X-Trace-ID  → AUDIT_TRACE.trace_id
  userId?:    string;   // X-User-ID   → AUDIT_EVENT.user_id
  username?:  string;   // X-Username  → AUDIT_EVENT.username
  sessionId?: string;   // X-Session-ID
  // Datos del evento
  level?:       string;
  eventType?:   string;
  action?:      string;
  outcome?:     string;
  message?:     string;
  payload?:     Record<string, any>;
}

@Injectable()
export class KafkaLoggerService implements OnModuleInit, OnModuleDestroy {
  private producer!: Producer;

  constructor(private readonly cfg: ConfigService) {}

  async onModuleInit() {
    const kafka = new Kafka({
      clientId: 'ms-bs-practitioner-service-logger',
      brokers: (this.cfg.get<string>('KAFKA_BROKER', 'localhost:9092')).split(','),
      logLevel: logLevel.ERROR,
    });
    this.producer = kafka.producer();
    await this.producer.connect();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  async log(entry: AuditLogEntry): Promise<void> {
    try {
      await this.producer.send({
        topic: this.cfg.get<string>('KAFKA_TOPIC', 'platform.logs'),
        messages: [{
          value: JSON.stringify({
            source_system: 'ms-bs-practitioner-service',
            event_type:    entry.eventType  ?? 'SERVICE_CALL',
            level:         entry.level      ?? 'INFO',
            trace_id:      entry.traceId,
            user_id:       entry.userId,
            username:      entry.username,
            session_id:    entry.sessionId,
            action:        entry.action     ?? entry.message ?? '',
            outcome:       entry.outcome    ?? 'SUCCESS',
            message:       entry.message    ?? '',
            payload:       entry.payload    ?? {},
            timestamp:     new Date().toISOString(),
          }),
        }],
      });
    } catch {
      // Fire and forget — nunca interrumpe el flujo de negocio
    }
  }

  /**
   * Extrae el contexto de audit de los headers HTTP entrantes.
   * El AG inyecta estos headers en cada request proxiado.
   * Usar en controllers/interceptors para propagar el contexto.
   *
   * @example
   * const ctx = this.kafkaLogger.extractAuditContext(request.headers);
   * await this.kafkaLogger.log({ ...ctx, action: 'crear-paciente', outcome: 'SUCCESS' });
   */
  extractAuditContext(headers: Record<string, any>): Pick<AuditLogEntry, 'traceId' | 'userId' | 'username' | 'sessionId'> {
    return {
      traceId:   headers['x-trace-id']   as string | undefined,
      userId:    headers['x-user-id']    as string | undefined,
      username:  headers['x-username']   as string | undefined,
      sessionId: headers['x-session-id'] as string | undefined,
    };
  }
}
