import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'cfg', name: 'file_server_config' })
export class FileServerConfig {
  @PrimaryGeneratedColumn({ name: 'config_id' })
  config_id!: number;

  @Column({ type: 'nvarchar', length: 100 })
  profile_name!: string;

  @Column({ type: 'nvarchar', length: 500 })
  base_url!: string;

  @Column({ type: 'bit', default: false })
  is_default!: boolean;

  @Column({ type: 'nvarchar', length: 500, nullable: true })
  config_description?: string;

  @Column({ type: 'nvarchar', length: 100 })
  user_create!: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  user_modify?: string;

  @Column({ type: 'datetime2' })
  date_create!: Date;

  @Column({ type: 'datetime2', nullable: true })
  date_modify?: Date;

  @Column({ type: 'bit', default: true })
  is_active!: boolean;
}
