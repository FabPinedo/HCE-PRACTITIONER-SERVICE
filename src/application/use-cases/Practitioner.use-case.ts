import { Practitioner } from '../../domain/entities/Practitioner.entity';
import { PractitionerRepository } from '../../domain/repositories/Practitioner.repository';

export class PractitionerUseCase {
  constructor(private readonly repo: PractitionerRepository) {}
  findAll(): Promise<Practitioner[]> { return this.repo.findAll(); }
  findById(id: string): Promise<Practitioner | null> { return this.repo.findById(id); }
  create(data: Partial<Practitioner>): Promise<Practitioner> { return this.repo.save(data as Practitioner); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
