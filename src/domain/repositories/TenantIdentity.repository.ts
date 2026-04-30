import { TenantIdentity } from '../entities/TenantIdentity.entity';

export interface TenantIdentityRepository {
  save(entity: TenantIdentity): Promise<TenantIdentity>;
  findById(id: string): Promise<TenantIdentity | null>;
  findAll(): Promise<TenantIdentity[]>;
  delete(id: string): Promise<void>;
}
