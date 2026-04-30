import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'fhir', name: 'speciality' })
export class Speciality {
  @PrimaryGeneratedColumn({ name: 'speciality_id' })
  speciality_id!: number;

  @Column({ name: 'fhir_code', length: 50 })
  fhir_code!: string;

  @Column({ name: 'fhir_system', length: 255, default: 'http://snomed.info/sct' })
  fhir_system!: string;

  @Column({ name: 'fhir_display', type: 'nvarchar', length: 200 })
  fhir_display!: string;

  @Column({ name: 'local_name', type: 'nvarchar', length: 200 })
  local_name!: string;

  @Column({ name: 'legacy_speciality_id', length: 50, nullable: true })
  legacy_speciality_id?: string;

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
