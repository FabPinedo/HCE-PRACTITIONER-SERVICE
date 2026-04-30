import { PractitionerAddress } from '../entities/PractitionerAddress.entity';

export interface PractitionerAddressRepository {
  save(entity: PractitionerAddress): Promise<PractitionerAddress>;
  findById(id: string): Promise<PractitionerAddress | null>;
  findAll(): Promise<PractitionerAddress[]>;
  delete(id: string): Promise<void>;
}
