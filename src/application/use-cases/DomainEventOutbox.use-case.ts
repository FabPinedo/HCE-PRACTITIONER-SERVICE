import { DomainEventOutbox } from '../../domain/entities/DomainEventOutbox.entity';
import { DomainEventOutboxRepository } from '../../domain/repositories/DomainEventOutbox.repository';

export class DomainEventOutboxUseCase {
  constructor(private readonly repo: DomainEventOutboxRepository) {}
  findAll(): Promise<DomainEventOutbox[]> { return this.repo.findAll(); }
  findById(id: string): Promise<DomainEventOutbox | null> { return this.repo.findById(id); }
  create(data: Partial<DomainEventOutbox>): Promise<DomainEventOutbox> { return this.repo.save(data as DomainEventOutbox); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
