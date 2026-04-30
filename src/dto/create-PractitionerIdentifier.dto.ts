import { IsString, IsNotEmpty, IsOptional, IsIn, IsInt, MaxLength, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePractitionerIdentifierDto {
  @ApiProperty({ description: 'FK a fhir.practitioner' })
  @IsInt() @Min(1)
  @Type(() => Number)
  practitioner_id!: number;

  @ApiPropertyOptional({ enum: ['official', 'temp', 'secondary', 'old'], default: 'official' })
  @IsOptional() @IsIn(['official', 'temp', 'secondary', 'old'])
  identifier_use?: string;

  @ApiProperty({ maxLength: 20, description: 'MD=CMP | NI=DNI | PPN=Pasaporte | PRN=Codigo interno' })
  @IsString() @IsNotEmpty() @MaxLength(20)
  identifier_type_code!: string;

  @ApiPropertyOptional({ maxLength: 255, default: 'http://terminology.hl7.org/CodeSystem/v2-0203' })
  @IsOptional() @IsString() @MaxLength(255)
  identifier_type_system?: string;

  @ApiPropertyOptional({ maxLength: 150 })
  @IsOptional() @IsString() @MaxLength(150)
  identifier_type_display?: string;

  @ApiProperty({ maxLength: 255, description: 'URI del sistema. Ej: http://www.cmp.org.pe/fhir/sid/cmp' })
  @IsString() @IsNotEmpty() @MaxLength(255)
  identifier_system!: string;

  @ApiProperty({ maxLength: 100, description: 'Numero del documento. Ej: 037899' })
  @IsString() @IsNotEmpty() @MaxLength(100)
  identifier_value!: string;

  @ApiPropertyOptional({ description: 'Vigencia inicio ISO YYYY-MM-DD' })
  @IsOptional() @IsString()
  period_start?: string;

  @ApiPropertyOptional({ description: 'Vigencia fin ISO YYYY-MM-DD' })
  @IsOptional() @IsString()
  period_end?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
