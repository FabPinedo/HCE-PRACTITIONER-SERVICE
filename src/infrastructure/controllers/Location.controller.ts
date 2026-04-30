// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateLocationDto } from '../../dto/create-Location.dto';

@Controller('Locations')
export class LocationController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreateLocationDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreateLocationDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
