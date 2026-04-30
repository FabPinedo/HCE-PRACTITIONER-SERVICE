import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SpecialityTypeOrmRepository } from '../persistence/Speciality.typeorm.repository';

@ApiTags('specialities')
@Controller('specialities')
export class SpecialityController {
  constructor(private readonly repo: SpecialityTypeOrmRepository) {}

  @Get('catalog')
  @ApiOperation({ summary: 'Catalogo de especialidades activas (para dropdowns)' })
  @ApiQuery({ name: 'searchTerm', required: false, type: String })
  findCatalog(@Query('searchTerm') searchTerm?: string) {
    return this.repo.findCatalog(searchTerm);
  }
}
