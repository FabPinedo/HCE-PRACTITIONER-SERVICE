import { Organisation } from '../entities/Organisation.entity';

export interface OrganisationRepository {
  save(entity: Organisation): Promise<Organisation>;
  findById(id: string): Promise<Organisation | null>;
  findAll(): Promise<Organisation[]>;
  delete(id: string): Promise<void>;
}
