import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantIdentity } from '../../domain/entities/TenantIdentity.entity';
import { TenantIdentityRepository } from '../../domain/repositories/TenantIdentity.repository';

@Injectable()
export class TenantIdentityTypeOrmRepository implements TenantIdentityRepository {
  constructor(
    @InjectRepository(TenantIdentity)
    private readonly repo: Repository<TenantIdentity>,
  ) {}

  findAll(): Promise<TenantIdentity[]> { return this.repo.find(); }
  findById(id: string): Promise<TenantIdentity | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: TenantIdentity): Promise<TenantIdentity> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
