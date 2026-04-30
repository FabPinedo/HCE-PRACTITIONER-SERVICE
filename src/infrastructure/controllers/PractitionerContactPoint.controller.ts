// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreatePractitionerContactPointDto } from '../../dto/create-PractitionerContactPoint.dto';

@Controller('PractitionerContactPoints')
export class PractitionerContactPointController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreatePractitionerContactPointDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreatePractitionerContactPointDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
