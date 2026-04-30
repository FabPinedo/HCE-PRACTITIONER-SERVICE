import { LegacySyncLog } from '../../domain/entities/LegacySyncLog.entity';
import { LegacySyncLogRepository } from '../../domain/repositories/LegacySyncLog.repository';

export class LegacySyncLogUseCase {
  constructor(private readonly repo: LegacySyncLogRepository) {}
  findAll(): Promise<LegacySyncLog[]> { return this.repo.findAll(); }
  findById(id: string): Promise<LegacySyncLog | null> { return this.repo.findById(id); }
  create(data: Partial<LegacySyncLog>): Promise<LegacySyncLog> { return this.repo.save(data as LegacySyncLog); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
