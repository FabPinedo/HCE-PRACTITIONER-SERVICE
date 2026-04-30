import { PractitionerRole } from '../entities/PractitionerRole.entity';

export interface PractitionerRoleRepository {
  save(entity: PractitionerRole): Promise<PractitionerRole>;
  findById(id: string): Promise<PractitionerRole | null>;
  findAll(): Promise<PractitionerRole[]>;
  delete(id: string): Promise<void>;
}
