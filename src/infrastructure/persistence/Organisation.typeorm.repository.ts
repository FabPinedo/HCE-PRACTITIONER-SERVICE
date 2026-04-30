import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organisation } from '../../domain/entities/Organisation.entity';
import { OrganisationRepository } from '../../domain/repositories/Organisation.repository';

@Injectable()
export class OrganisationTypeOrmRepository implements OrganisationRepository {
  constructor(
    @InjectRepository(Organisation)
    private readonly repo: Repository<Organisation>,
  ) {}

  findAll(): Promise<Organisation[]> { return this.repo.find(); }
  findById(id: string): Promise<Organisation | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: Organisation): Promise<Organisation> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
