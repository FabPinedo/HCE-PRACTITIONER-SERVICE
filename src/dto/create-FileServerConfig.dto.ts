import { IsString, IsNotEmpty, IsOptional, IsBoolean, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFileServerConfigDto {
  @ApiProperty({ maxLength: 50, description: 'Nombre descriptivo del perfil (debe ser unico)' })
  @IsString() @IsNotEmpty() @MaxLength(50)
  profile_name!: string;

  @ApiProperty({ maxLength: 500, description: 'URL base o ruta UNC. Ej: \\\\fileserver\\hce o https://files.clinica.com/hce' })
  @IsString() @IsNotEmpty() @MaxLength(500)
  base_url!: string;

  @ApiPropertyOptional({ default: false, description: 'Solo puede existir un perfil default activo' })
  @IsOptional() @IsBoolean()
  is_default?: boolean;

  @ApiPropertyOptional({ maxLength: 255 })
  @IsOptional() @IsString() @MaxLength(255)
  config_description?: string;

  @ApiProperty({ maxLength: 100 })
  @IsString() @IsNotEmpty() @MaxLength(100)
  user_create!: string;
}
