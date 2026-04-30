import { IsString, IsNotEmpty, IsOptional, IsIn, IsUUID, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLegacySyncLogDto {
  @ApiPropertyOptional({ description: 'UUID del evento del outbox que origino esta sync' })
  @IsOptional() @IsUUID()
  event_uuid?: string;

  @ApiProperty({ enum: ['inbound', 'outbound'] })
  @IsIn(['inbound', 'outbound'])
  sync_direction!: string;

  @ApiProperty({ maxLength: 100, example: 'Practitioner' })
  @IsString() @IsNotEmpty() @MaxLength(100)
  entity_type!: string;

  @ApiPropertyOptional({ maxLength: 50, description: 'UUID del recurso en HCE_CORE' })
  @IsOptional() @IsString() @MaxLength(50)
  entity_id_hce?: string;

  @ApiPropertyOptional({ maxLength: 50, description: 'ID del recurso en el sistema legacy' })
  @IsOptional() @IsString() @MaxLength(50)
  entity_id_legacy?: string;

  @ApiProperty({ enum: ['INSERT', 'UPDATE', 'DELETE', 'SKIP'] })
  @IsIn(['INSERT', 'UPDATE', 'DELETE', 'SKIP'])
  sync_operation!: string;

  @ApiProperty({ enum: ['success', 'error', 'skipped', 'partial'] })
  @IsIn(['success', 'error', 'skipped', 'partial'])
  sync_result!: string;

  @ApiPropertyOptional({ maxLength: 1000, description: 'Mensaje de error o razon del skip' })
  @IsOptional() @IsString() @MaxLength(1000)
  result_detail?: string;

  @ApiPropertyOptional({ description: 'Snapshot JSON del dato enviado' })
  @IsOptional() @IsString()
  payload_sent?: string;

  @ApiPropertyOptional({ description: 'Snapshot JSON de la respuesta recibida' })
  @IsOptional() @IsString()
  payload_received?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
