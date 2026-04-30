import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'sync', name: 'domain_event_outbox' })
export class DomainEventOutbox {
  // BIGINT IDENTITY — TypeORM lo retorna como number (seguro para rangos de PK)
  @PrimaryGeneratedColumn({ name: 'event_id', type: 'bigint' })
  event_id!: number;

  @Column({ name: 'event_uuid', type: 'uniqueidentifier' })
  event_uuid!: string;

  @Column({ name: 'event_type', length: 100 })
  event_type!: string;

  @Column({ name: 'aggregate_type', length: 100 })
  aggregate_type!: string;

  @Column({ name: 'aggregate_id', length: 50 })
  aggregate_id!: string;

  @Column({ name: 'event_payload', type: 'nvarchar', length: 'MAX' })
  event_payload!: string;

  @Column({ name: 'event_status', length: 20, default: 'pending' })
  event_status!: string;

  @Column({ name: 'occurred_at', type: 'datetime2' })
  occurred_at!: Date;

  @Column({ name: 'processed_at', type: 'datetime2', nullable: true })
  processed_at?: Date;

  @Column({ name: 'retry_count', type: 'tinyint', default: 0 })
  retry_count!: number;

  @Column({ name: 'last_error', type: 'nvarchar', length: 1000, nullable: true })
  last_error?: string;

  @Column({ name: 'user_create', type: 'nvarchar', length: 100 })
  user_create!: string;

  @Column({ name: 'user_modify', type: 'nvarchar', length: 100, nullable: true })
  user_modify?: string;

  @Column({ name: 'date_create', type: 'datetime2' })
  date_create!: Date;

  @Column({ name: 'date_modify', type: 'datetime2', nullable: true })
  date_modify?: Date;

  @Column({ name: 'is_active', type: 'bit', default: true })
  is_active!: boolean;
}
