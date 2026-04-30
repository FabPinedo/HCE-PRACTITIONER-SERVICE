import { IsString, IsNotEmpty, IsOptional, IsIn, MaxLength, IsInt, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePractitionerAddressDto {
  @ApiProperty({ description: 'FK a fhir.practitioner' })
  @IsInt() @Min(1)
  @Type(() => Number)
  practitioner_id!: number;

  @ApiPropertyOptional({ enum: ['home', 'work', 'temp', 'old', 'billing'], default: 'work' })
  @IsOptional() @IsIn(['home', 'work', 'temp', 'old', 'billing'])
  address_use?: string;

  @ApiPropertyOptional({ enum: ['postal', 'physical', 'both'], default: 'physical' })
  @IsOptional() @IsIn(['postal', 'physical', 'both'])
  address_type?: string;

  @ApiPropertyOptional({ maxLength: 500 })
  @IsOptional() @IsString() @MaxLength(500)
  address_text?: string;

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

  @ApiPropertyOptional({ maxLength: 3, default: 'PE', description: 'Codigo ISO 3166' })
  @IsOptional() @IsString() @MaxLength(3)
  address_country?: string;

  @ApiPropertyOptional({ description: 'ISO YYYY-MM-DD' })
  @IsOptional() @IsString()
  period_start?: string;

  @ApiPropertyOptional({ description: 'ISO YYYY-MM-DD' })
  @IsOptional() @IsString()
  period_end?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
