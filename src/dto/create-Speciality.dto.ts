import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSpecialityDto {
  @ApiProperty({ maxLength: 50, description: 'Codigo FHIR / SNOMED CT. Ej: 394814009' })
  @IsString() @IsNotEmpty() @MaxLength(50)
  fhir_code!: string;

  @ApiPropertyOptional({ maxLength: 255, default: 'http://snomed.info/sct' })
  @IsOptional() @IsString() @MaxLength(255)
  fhir_system?: string;

  @ApiProperty({ maxLength: 200 })
  @IsString() @IsNotEmpty() @MaxLength(200)
  fhir_display!: string;

  @ApiProperty({ maxLength: 200, description: 'Nombre local usado en la clinica' })
  @IsString() @IsNotEmpty() @MaxLength(200)
  local_name!: string;

  @ApiPropertyOptional({ maxLength: 50 })
  @IsOptional() @IsString() @MaxLength(50)
  legacy_speciality_id?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
