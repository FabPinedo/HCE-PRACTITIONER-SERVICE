import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PractitionerRole } from '../../domain/entities/PractitionerRole.entity';
import { PractitionerRoleRepository } from '../../domain/repositories/PractitionerRole.repository';

@Injectable()
export class PractitionerRoleTypeOrmRepository implements PractitionerRoleRepository {
  constructor(
    @InjectRepository(PractitionerRole)
    private readonly repo: Repository<PractitionerRole>,
  ) {}

  findAll(): Promise<PractitionerRole[]> { return this.repo.find(); }
  findById(id: string): Promise<PractitionerRole | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: PractitionerRole): Promise<PractitionerRole> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
