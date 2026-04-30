// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateOrganisationDto } from '../../dto/create-Organisation.dto';

@Controller('Organisations')
export class OrganisationController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreateOrganisationDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreateOrganisationDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
