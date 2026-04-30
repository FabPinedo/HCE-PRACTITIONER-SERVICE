import { Organisation } from '../../domain/entities/Organisation.entity';
import { OrganisationRepository } from '../../domain/repositories/Organisation.repository';

export class OrganisationUseCase {
  constructor(private readonly repo: OrganisationRepository) {}
  findAll(): Promise<Organisation[]> { return this.repo.findAll(); }
  findById(id: string): Promise<Organisation | null> { return this.repo.findById(id); }
  create(data: Partial<Organisation>): Promise<Organisation> { return this.repo.save(data as Organisation); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
