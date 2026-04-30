import { PractitionerRole } from '../../domain/entities/PractitionerRole.entity';
import { PractitionerRoleRepository } from '../../domain/repositories/PractitionerRole.repository';

export class PractitionerRoleUseCase {
  constructor(private readonly repo: PractitionerRoleRepository) {}
  findAll(): Promise<PractitionerRole[]> { return this.repo.findAll(); }
  findById(id: string): Promise<PractitionerRole | null> { return this.repo.findById(id); }
  create(data: Partial<PractitionerRole>): Promise<PractitionerRole> { return this.repo.save(data as PractitionerRole); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
