import { Speciality } from '../../domain/entities/Speciality.entity';
import { SpecialityRepository } from '../../domain/repositories/Speciality.repository';

export class SpecialityUseCase {
  constructor(private readonly repo: SpecialityRepository) {}
  findAll(): Promise<Speciality[]> { return this.repo.findAll(); }
  findById(id: string): Promise<Speciality | null> { return this.repo.findById(id); }
  create(data: Partial<Speciality>): Promise<Speciality> { return this.repo.save(data as Speciality); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
