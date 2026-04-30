import { IsString, IsNotEmpty, IsOptional, IsInt, IsBoolean, MaxLength, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePractitionerRoleDto {
  @ApiProperty({ description: 'FK a fhir.practitioner' })
  @IsInt() @Min(1)
  @Type(() => Number)
  practitioner_id!: number;

  @ApiProperty({ description: 'FK a fhir.organisation' })
  @IsInt() @Min(1)
  @Type(() => Number)
  organisation_id!: number;

  @ApiProperty({ description: 'FK a fhir.speciality (SMALLINT)' })
  @IsInt() @Min(1)
  @Type(() => Number)
  speciality_id!: number;

  @ApiPropertyOptional({ description: 'FK a fhir.location (NULL = sin sede fija)' })
  @IsOptional() @IsInt() @Min(1)
  @Type(() => Number)
  location_id?: number;

  @ApiPropertyOptional({ maxLength: 50, default: 'doctor', example: 'doctor' })
  @IsOptional() @IsString() @MaxLength(50)
  role_code?: string;

  @ApiPropertyOptional({ maxLength: 150 })
  @IsOptional() @IsString() @MaxLength(150)
  role_display?: string;

  @ApiPropertyOptional({ description: 'Fecha inicio vigencia ISO YYYY-MM-DD', example: '2024-01-01' })
  @IsOptional() @IsString()
  period_start?: string;

  @ApiPropertyOptional({ description: 'Fecha fin vigencia ISO YYYY-MM-DD', example: '2025-12-31' })
  @IsOptional() @IsString()
  period_end?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional() @IsBoolean()
  active_fhir?: boolean;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
