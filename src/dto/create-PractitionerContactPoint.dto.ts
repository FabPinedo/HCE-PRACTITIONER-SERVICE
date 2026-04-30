import { IsString, IsNotEmpty, IsOptional, IsIn, IsInt, MaxLength, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePractitionerContactPointDto {
  @ApiProperty({ description: 'FK a fhir.practitioner' })
  @IsInt() @Min(1)
  @Type(() => Number)
  practitioner_id!: number;

  @ApiProperty({ enum: ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'] })
  @IsIn(['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'])
  contact_system!: string;

  @ApiProperty({ maxLength: 255, description: 'Numero, email, URL, etc.' })
  @IsString() @IsNotEmpty() @MaxLength(255)
  contact_value!: string;

  @ApiPropertyOptional({ enum: ['home', 'work', 'temp', 'old', 'mobile'], default: 'work' })
  @IsOptional() @IsIn(['home', 'work', 'temp', 'old', 'mobile'])
  contact_use?: string;

  @ApiPropertyOptional({ minimum: 1, maximum: 255, default: 1, description: 'Orden de preferencia (1 = principal)' })
  @IsOptional() @IsInt() @Min(1) @Max(255)
  @Type(() => Number)
  contact_rank?: number;

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
