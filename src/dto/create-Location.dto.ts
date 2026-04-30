import { IsString, IsNotEmpty, IsOptional, IsIn, IsInt, IsNumber, MaxLength, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateLocationDto {
  @ApiProperty({ description: 'FK a fhir.organisation' })
  @IsInt() @Min(1)
  @Type(() => Number)
  organisation_id!: number;

  @ApiPropertyOptional({ maxLength: 50, description: 'Codigo interno de la sede' })
  @IsOptional() @IsString() @MaxLength(50)
  identifier_value?: string;

  @ApiPropertyOptional({ enum: ['active', 'suspended', 'inactive'], default: 'active' })
  @IsOptional() @IsIn(['active', 'suspended', 'inactive'])
  location_status?: string;

  @ApiProperty({ maxLength: 200 })
  @IsString() @IsNotEmpty() @MaxLength(200)
  location_name!: string;

  @ApiPropertyOptional({ maxLength: 100 })
  @IsOptional() @IsString() @MaxLength(100)
  location_alias?: string;

  @ApiPropertyOptional({ maxLength: 500 })
  @IsOptional() @IsString() @MaxLength(500)
  location_description?: string;

  @ApiPropertyOptional({ enum: ['instance', 'kind'], default: 'instance' })
  @IsOptional() @IsIn(['instance', 'kind'])
  location_mode?: string;

  @ApiPropertyOptional({ maxLength: 50, description: 'Ej: HOSP, OUTPHARM, COMM, PROFF' })
  @IsOptional() @IsString() @MaxLength(50)
  type_code?: string;

  @ApiPropertyOptional({ maxLength: 150 })
  @IsOptional() @IsString() @MaxLength(150)
  type_display?: string;

  @ApiPropertyOptional({ maxLength: 10, default: 'bu', description: 'bu=building, wi=wing, ro=room, bd=bed' })
  @IsOptional() @IsString() @MaxLength(10)
  physical_type_code?: string;

  @ApiPropertyOptional({ maxLength: 100 })
  @IsOptional() @IsString() @MaxLength(100)
  physical_type_display?: string;

  @ApiPropertyOptional({ maxLength: 255 })
  @IsOptional() @IsString() @MaxLength(255)
  address_line_1?: string;

  @ApiPropertyOptional({ maxLength: 255 })
  @IsOptional() @IsString() @MaxLength(255)
  address_line_2?: string;

  @ApiPropertyOptional({ maxLength: 100 })
  @IsOptional() @IsString() @MaxLength(100)
  address_city?: string;

  @ApiPropertyOptional({ maxLength: 100 })
  @IsOptional() @IsString() @MaxLength(100)
  address_district?: string;

  @ApiPropertyOptional({ maxLength: 100 })
  @IsOptional() @IsString() @MaxLength(100)
  address_state?: string;

  @ApiPropertyOptional({ maxLength: 20 })
  @IsOptional() @IsString() @MaxLength(20)
  address_postal_code?: string;

  @ApiPropertyOptional({ maxLength: 3, default: 'PE', description: 'ISO 3166' })
  @IsOptional() @IsString() @MaxLength(3)
  address_country?: string;

  @ApiPropertyOptional({ description: 'DECIMAL(9,6)', example: -77.028 })
  @IsOptional() @IsNumber()
  @Type(() => Number)
  position_longitude?: number;

  @ApiPropertyOptional({ description: 'DECIMAL(8,6)', example: -12.043 })
  @IsOptional() @IsNumber()
  @Type(() => Number)
  position_latitude?: number;

  @ApiPropertyOptional({ maxLength: 20 })
  @IsOptional() @IsString() @MaxLength(20)
  telecom_phone?: string;

  @ApiPropertyOptional({ maxLength: 255 })
  @IsOptional() @IsString() @MaxLength(255)
  telecom_email?: string;

  @ApiPropertyOptional({ maxLength: 50 })
  @IsOptional() @IsString() @MaxLength(50)
  legacy_location_id?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
