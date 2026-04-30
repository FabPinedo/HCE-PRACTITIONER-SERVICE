import { DomainEventOutbox } from '../entities/DomainEventOutbox.entity';

export interface DomainEventOutboxRepository {
  save(entity: DomainEventOutbox): Promise<DomainEventOutbox>;
  findById(id: string): Promise<DomainEventOutbox | null>;
  findAll(): Promise<DomainEventOutbox[]>;
  delete(id: string): Promise<void>;
}
