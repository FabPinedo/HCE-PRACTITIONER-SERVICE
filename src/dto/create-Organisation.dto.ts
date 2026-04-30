import { IsString, IsNotEmpty, IsOptional, IsBoolean, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOrganisationDto {
  @ApiPropertyOptional({ maxLength: 50, description: 'ID en el sistema legacy para sincronizacion' })
  @IsOptional() @IsString() @MaxLength(50)
  legacy_id?: string;

  @ApiProperty({ maxLength: 255 })
  @IsString() @IsNotEmpty() @MaxLength(255)
  organisation_name!: string;

  @ApiPropertyOptional({ maxLength: 50, description: 'Codigo del value set hl7 organization-type' })
  @IsOptional() @IsString() @MaxLength(50)
  type_code?: string;

  @ApiPropertyOptional({ maxLength: 150 })
  @IsOptional() @IsString() @MaxLength(150)
  type_display?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional() @IsBoolean()
  active_fhir?: boolean;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
