import { IsString, IsNotEmpty, IsOptional, IsIn, MaxLength, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTenantIdentityDto {
  @ApiProperty({ description: 'UUID del tenant en HCE_REGISTRY' })
  @IsUUID()
  tenant_uuid!: string;

  @ApiProperty({ maxLength: 50, description: 'Slug unico del tenant. Ej: clinica-san-juan' })
  @IsString() @IsNotEmpty() @MaxLength(50)
  tenant_code!: string;

  @ApiProperty({ maxLength: 255 })
  @IsString() @IsNotEmpty() @MaxLength(255)
  tenant_name!: string;

  @ApiPropertyOptional({ maxLength: 3, default: 'PE', description: 'ISO 3166-2' })
  @IsOptional() @IsString() @MaxLength(3)
  country_code?: string;

  @ApiPropertyOptional({ maxLength: 50, default: 'America/Lima', description: 'IANA tz database' })
  @IsOptional() @IsString() @MaxLength(50)
  timezone?: string;

  @ApiPropertyOptional({ maxLength: 10, default: 'R4' })
  @IsOptional() @IsString() @MaxLength(10)
  fhir_version?: string;

  @ApiProperty({ enum: ['DEV', 'QA', 'STAGING', 'PROD'] })
  @IsIn(['DEV', 'QA', 'STAGING', 'PROD'])
  environment!: string;

  @ApiProperty({ maxLength: 20, description: 'Version del sistema. Ej: 1.0.0' })
  @IsString() @IsNotEmpty() @MaxLength(20)
  system_version!: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
