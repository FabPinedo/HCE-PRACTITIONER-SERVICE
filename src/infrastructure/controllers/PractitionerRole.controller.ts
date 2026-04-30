// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreatePractitionerRoleDto } from '../../dto/create-PractitionerRole.dto';

@Controller('PractitionerRoles')
export class PractitionerRoleController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreatePractitionerRoleDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreatePractitionerRoleDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
