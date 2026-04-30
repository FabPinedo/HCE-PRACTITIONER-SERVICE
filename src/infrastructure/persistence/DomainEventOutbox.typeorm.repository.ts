import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DomainEventOutbox } from '../../domain/entities/DomainEventOutbox.entity';
import { DomainEventOutboxRepository } from '../../domain/repositories/DomainEventOutbox.repository';

@Injectable()
export class DomainEventOutboxTypeOrmRepository implements DomainEventOutboxRepository {
  constructor(
    @InjectRepository(DomainEventOutbox)
    private readonly repo: Repository<DomainEventOutbox>,
  ) {}

  findAll(): Promise<DomainEventOutbox[]> { return this.repo.find(); }
  findById(id: string): Promise<DomainEventOutbox | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: DomainEventOutbox): Promise<DomainEventOutbox> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
