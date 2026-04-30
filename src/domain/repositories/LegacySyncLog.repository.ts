import { LegacySyncLog } from '../entities/LegacySyncLog.entity';

export interface LegacySyncLogRepository {
  save(entity: LegacySyncLog): Promise<LegacySyncLog>;
  findById(id: string): Promise<LegacySyncLog | null>;
  findAll(): Promise<LegacySyncLog[]>;
  delete(id: string): Promise<void>;
}
