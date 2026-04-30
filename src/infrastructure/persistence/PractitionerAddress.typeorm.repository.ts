import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PractitionerAddress } from '../../domain/entities/PractitionerAddress.entity';
import { PractitionerAddressRepository } from '../../domain/repositories/PractitionerAddress.repository';

@Injectable()
export class PractitionerAddressTypeOrmRepository implements PractitionerAddressRepository {
  constructor(
    @InjectRepository(PractitionerAddress)
    private readonly repo: Repository<PractitionerAddress>,
  ) {}

  findAll(): Promise<PractitionerAddress[]> { return this.repo.find(); }
  findById(id: string): Promise<PractitionerAddress | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: PractitionerAddress): Promise<PractitionerAddress> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
