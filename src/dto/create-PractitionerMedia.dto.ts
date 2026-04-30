import { IsString, IsNotEmpty, IsOptional, IsIn, IsInt, IsBoolean, MaxLength, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePractitionerMediaDto {
  @ApiProperty({ description: 'FK a fhir.practitioner' })
  @IsInt() @Min(1)
  @Type(() => Number)
  practitioner_id!: number;

  @ApiProperty({ description: 'FK a cfg.file_server_config' })
  @IsInt() @Min(1)
  @Type(() => Number)
  file_server_config_id!: number;

  @ApiPropertyOptional({ enum: ['preparation', 'in-progress', 'not-done', 'on-hold', 'stopped', 'completed', 'entered-in-error', 'unknown'], default: 'completed' })
  @IsOptional() @IsIn(['preparation', 'in-progress', 'not-done', 'on-hold', 'stopped', 'completed', 'entered-in-error', 'unknown'])
  fhir_status?: string;

  @ApiPropertyOptional({ enum: ['image', 'video', 'audio'], default: 'image' })
  @IsOptional() @IsIn(['image', 'video', 'audio'])
  fhir_media_type?: string;

  @ApiPropertyOptional({ enum: ['profile_photo', 'signature', 'document', 'certificate'], default: 'profile_photo' })
  @IsOptional() @IsIn(['profile_photo', 'signature', 'document', 'certificate'])
  media_category?: string;

  @ApiPropertyOptional({ maxLength: 100, default: 'image/jpeg', example: 'image/jpeg' })
  @IsOptional() @IsString() @MaxLength(100)
  content_type?: string;

  @ApiProperty({ maxLength: 255, description: 'Nombre del archivo en el file server' })
  @IsString() @IsNotEmpty() @MaxLength(255)
  media_file_name!: string;

  @ApiProperty({ maxLength: 1000, description: 'Ruta relativa en el file server. Ej: /practitioners/2026/04/foto.jpg' })
  @IsString() @IsNotEmpty() @MaxLength(1000)
  relative_path!: string;

  @ApiPropertyOptional({ maxLength: 255 })
  @IsOptional() @IsString() @MaxLength(255)
  media_title?: string;

  @ApiPropertyOptional({ description: 'Tamaño en bytes' })
  @IsOptional() @IsInt() @Min(0)
  @Type(() => Number)
  file_size_bytes?: number;

  @ApiPropertyOptional({ maxLength: 128, description: 'Hash del archivo (SHA-256 = 64 chars, SHA-512 = 128 chars)' })
  @IsOptional() @IsString() @MaxLength(128)
  file_hash?: string;

  @ApiPropertyOptional({ maxLength: 20, default: 'SHA-256' })
  @IsOptional() @IsString() @MaxLength(20)
  hash_algorithm?: string;

  @ApiPropertyOptional({ description: 'Ancho en pixeles' })
  @IsOptional() @IsInt() @Min(1)
  @Type(() => Number)
  width_pixels?: number;

  @ApiPropertyOptional({ description: 'Alto en pixeles' })
  @IsOptional() @IsInt() @Min(1)
  @Type(() => Number)
  height_pixels?: number;

  @ApiPropertyOptional({ default: false, description: 'Indica si es la foto de perfil vigente' })
  @IsOptional() @IsBoolean()
  is_primary?: boolean;

  @ApiPropertyOptional({ description: 'Fecha UTC de creacion del archivo ISO 8601' })
  @IsOptional() @IsString()
  attachment_date?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
