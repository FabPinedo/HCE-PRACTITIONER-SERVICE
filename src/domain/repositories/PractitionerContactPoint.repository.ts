import { PractitionerContactPoint } from '../entities/PractitionerContactPoint.entity';

export interface PractitionerContactPointRepository {
  save(entity: PractitionerContactPoint): Promise<PractitionerContactPoint>;
  findById(id: string): Promise<PractitionerContactPoint | null>;
  findAll(): Promise<PractitionerContactPoint[]>;
  delete(id: string): Promise<void>;
}
