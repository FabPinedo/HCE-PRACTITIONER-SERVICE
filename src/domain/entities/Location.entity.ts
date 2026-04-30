import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'fhir', name: 'location' })
export class Location {
  @PrimaryGeneratedColumn({ name: 'location_id' })
  location_id!: number;

  @Column({ name: 'location_uuid', type: 'uniqueidentifier' })
  location_uuid!: string;

  @Column({ name: 'organisation_id' })
  organisation_id!: number;

  @Column({ name: 'identifier_value', length: 50, nullable: true })
  identifier_value?: string;

  @Column({ name: 'location_status', length: 10, default: 'active' })
  location_status!: string;

  @Column({ name: 'location_name', type: 'nvarchar', length: 200 })
  location_name!: string;

  @Column({ name: 'location_alias', type: 'nvarchar', length: 100, nullable: true })
  location_alias?: string;

  @Column({ name: 'location_description', type: 'nvarchar', length: 500, nullable: true })
  location_description?: string;

  @Column({ name: 'location_mode', length: 10, default: 'instance' })
  location_mode!: string;

  @Column({ name: 'type_code', length: 50, nullable: true })
  type_code?: string;

  @Column({ name: 'type_display', type: 'nvarchar', length: 150, nullable: true })
  type_display?: string;

  @Column({ name: 'physical_type_code', length: 10, nullable: true, default: 'bu' })
  physical_type_code?: string;

  @Column({ name: 'physical_type_display', type: 'nvarchar', length: 100, nullable: true })
  physical_type_display?: string;

  @Column({ name: 'address_line_1', type: 'nvarchar', length: 255, nullable: true })
  address_line_1?: string;

  @Column({ name: 'address_line_2', type: 'nvarchar', length: 255, nullable: true })
  address_line_2?: string;

  @Column({ name: 'address_city', type: 'nvarchar', length: 100, nullable: true })
  address_city?: string;

  @Column({ name: 'address_district', type: 'nvarchar', length: 100, nullable: true })
  address_district?: string;

  @Column({ name: 'address_state', type: 'nvarchar', length: 100, nullable: true })
  address_state?: string;

  @Column({ name: 'address_postal_code', length: 20, nullable: true })
  address_postal_code?: string;

  @Column({ name: 'address_country', length: 3, default: 'PE' })
  address_country!: string;

  @Column({ name: 'position_longitude', type: 'decimal', precision: 9, scale: 6, nullable: true })
  position_longitude?: number;

  @Column({ name: 'position_latitude', type: 'decimal', precision: 8, scale: 6, nullable: true })
  position_latitude?: number;

  @Column({ name: 'telecom_phone', length: 20, nullable: true })
  telecom_phone?: string;

  @Column({ name: 'telecom_email', length: 255, nullable: true })
  telecom_email?: string;

  @Column({ name: 'legacy_location_id', length: 50, nullable: true })
  legacy_location_id?: string;

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
