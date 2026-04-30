import { IsString, IsNotEmpty, IsOptional, IsIn, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDomainEventOutboxDto {
  @ApiProperty({ maxLength: 100, example: 'practitioner.created' })
  @IsString() @IsNotEmpty() @MaxLength(100)
  event_type!: string;

  @ApiProperty({ maxLength: 100, example: 'Practitioner' })
  @IsString() @IsNotEmpty() @MaxLength(100)
  aggregate_type!: string;

  @ApiProperty({ maxLength: 50, description: 'UUID del recurso afectado' })
  @IsString() @IsNotEmpty() @MaxLength(50)
  aggregate_id!: string;

  @ApiProperty({ description: 'Payload JSON del evento (estructura FHIR)' })
  @IsString() @IsNotEmpty()
  event_payload!: string;

  @ApiPropertyOptional({ enum: ['pending', 'processing', 'processed', 'failed'], default: 'pending' })
  @IsOptional() @IsIn(['pending', 'processing', 'processed', 'failed'])
  event_status?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
