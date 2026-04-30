import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'fhir', name: 'organisation' })
export class Organisation {
  @PrimaryGeneratedColumn({ name: 'organisation_id' })
  organisation_id!: number;

  @Column({ name: 'organisation_uuid', type: 'uniqueidentifier' })
  organisation_uuid!: string;

  @Column({ name: 'legacy_id', length: 50, nullable: true })
  legacy_id?: string;

  @Column({ name: 'organisation_name', type: 'nvarchar', length: 255 })
  organisation_name!: string;

  @Column({ name: 'type_code', length: 50, nullable: true })
  type_code?: string;

  @Column({ name: 'type_display', type: 'nvarchar', length: 150, nullable: true })
  type_display?: string;

  @Column({ name: 'active_fhir', type: 'bit', default: true })
  active_fhir!: boolean;

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
