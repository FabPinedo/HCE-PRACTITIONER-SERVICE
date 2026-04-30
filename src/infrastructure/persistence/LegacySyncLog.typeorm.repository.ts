import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LegacySyncLog } from '../../domain/entities/LegacySyncLog.entity';
import { LegacySyncLogRepository } from '../../domain/repositories/LegacySyncLog.repository';

@Injectable()
export class LegacySyncLogTypeOrmRepository implements LegacySyncLogRepository {
  constructor(
    @InjectRepository(LegacySyncLog)
    private readonly repo: Repository<LegacySyncLog>,
  ) {}

  findAll(): Promise<LegacySyncLog[]> { return this.repo.find(); }
  findById(id: string): Promise<LegacySyncLog | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: LegacySyncLog): Promise<LegacySyncLog> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
