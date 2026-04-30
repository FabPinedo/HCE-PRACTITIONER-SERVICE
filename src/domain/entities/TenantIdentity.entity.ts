import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ schema: 'cfg', name: 'tenant_identity' })
export class TenantIdentity {
  // Fila unica, CHECK (tenant_identity_id = 1) — no es IDENTITY
  @PrimaryColumn({ name: 'tenant_identity_id', type: 'tinyint' })
  tenant_identity_id!: number;

  @Column({ name: 'tenant_uuid', type: 'uniqueidentifier' })
  tenant_uuid!: string;

  @Column({ name: 'tenant_code', length: 50 })
  tenant_code!: string;

  @Column({ name: 'tenant_name', type: 'nvarchar', length: 255 })
  tenant_name!: string;

  @Column({ name: 'country_code', length: 3, default: 'PE' })
  country_code!: string;

  @Column({ name: 'timezone', length: 50, default: 'America/Lima' })
  timezone!: string;

  @Column({ name: 'fhir_version', length: 10, default: 'R4' })
  fhir_version!: string;

  @Column({ name: 'environment', length: 10 })
  environment!: string;

  @Column({ name: 'system_version', length: 20 })
  system_version!: string;

  @Column({ name: 'provisioned_at', type: 'datetime2', precision: 0 })
  provisioned_at!: Date;

  @Column({ name: 'user_create', type: 'nvarchar', length: 100 })
  user_create!: string;

  @Column({ name: 'user_modify', type: 'nvarchar', length: 100, nullable: true })
  user_modify?: string;

  @Column({ name: 'date_create', type: 'datetime2' })
  date_create!: Date;

  @Column({ name: 'date_modify', type: 'datetime2', nullable: true })
  date_modify?: Date;

  @Column({ name: 'is_active', type: 'bit', default: true })
  is_active!: boolean;
}
