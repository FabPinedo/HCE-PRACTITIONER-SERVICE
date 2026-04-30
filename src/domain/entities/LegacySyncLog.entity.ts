import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'sync', name: 'legacy_sync_log' })
export class LegacySyncLog {
  @PrimaryGeneratedColumn({ name: 'sync_log_id', type: 'bigint' })
  sync_log_id!: number;

  @Column({ name: 'event_uuid', type: 'uniqueidentifier', nullable: true })
  event_uuid?: string;

  @Column({ name: 'sync_direction', length: 10 })
  sync_direction!: string;

  @Column({ name: 'entity_type', length: 100 })
  entity_type!: string;

  @Column({ name: 'entity_id_hce', length: 50, nullable: true })
  entity_id_hce?: string;

  @Column({ name: 'entity_id_legacy', length: 50, nullable: true })
  entity_id_legacy?: string;

  @Column({ name: 'sync_operation', length: 10 })
  sync_operation!: string;

  @Column({ name: 'sync_result', length: 10 })
  sync_result!: string;

  @Column({ name: 'result_detail', type: 'nvarchar', length: 1000, nullable: true })
  result_detail?: string;

  @Column({ name: 'payload_sent', type: 'nvarchar', length: 'MAX', nullable: true })
  payload_sent?: string;

  @Column({ name: 'payload_received', type: 'nvarchar', length: 'MAX', nullable: true })
  payload_received?: string;

  @Column({ name: 'sync_started_at', type: 'datetime2' })
  sync_started_at!: Date;

  @Column({ name: 'sync_finished_at', type: 'datetime2', nullable: true })
  sync_finished_at?: Date;

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
