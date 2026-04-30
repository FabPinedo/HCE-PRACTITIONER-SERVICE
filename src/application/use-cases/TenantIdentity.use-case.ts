import { TenantIdentity } from '../../domain/entities/TenantIdentity.entity';
import { TenantIdentityRepository } from '../../domain/repositories/TenantIdentity.repository';

export class TenantIdentityUseCase {
  constructor(private readonly repo: TenantIdentityRepository) {}
  findAll(): Promise<TenantIdentity[]> { return this.repo.findAll(); }
  findById(id: string): Promise<TenantIdentity | null> { return this.repo.findById(id); }
  create(data: Partial<TenantIdentity>): Promise<TenantIdentity> { return this.repo.save(data as TenantIdentity); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
