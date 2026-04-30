import { PractitionerAddress } from '../../domain/entities/PractitionerAddress.entity';
import { PractitionerAddressRepository } from '../../domain/repositories/PractitionerAddress.repository';

export class PractitionerAddressUseCase {
  constructor(private readonly repo: PractitionerAddressRepository) {}
  findAll(): Promise<PractitionerAddress[]> { return this.repo.findAll(); }
  findById(id: string): Promise<PractitionerAddress | null> { return this.repo.findById(id); }
  create(data: Partial<PractitionerAddress>): Promise<PractitionerAddress> { return this.repo.save(data as PractitionerAddress); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
