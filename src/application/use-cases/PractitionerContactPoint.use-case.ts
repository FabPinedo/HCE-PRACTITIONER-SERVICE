import { PractitionerContactPoint } from '../../domain/entities/PractitionerContactPoint.entity';
import { PractitionerContactPointRepository } from '../../domain/repositories/PractitionerContactPoint.repository';

export class PractitionerContactPointUseCase {
  constructor(private readonly repo: PractitionerContactPointRepository) {}
  findAll(): Promise<PractitionerContactPoint[]> { return this.repo.findAll(); }
  findById(id: string): Promise<PractitionerContactPoint | null> { return this.repo.findById(id); }
  create(data: Partial<PractitionerContactPoint>): Promise<PractitionerContactPoint> { return this.repo.save(data as PractitionerContactPoint); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
