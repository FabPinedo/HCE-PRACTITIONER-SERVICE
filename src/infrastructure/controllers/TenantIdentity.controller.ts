// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateTenantIdentityDto } from '../../dto/create-TenantIdentity.dto';

@Controller('TenantIdentitys')
export class TenantIdentityController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreateTenantIdentityDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreateTenantIdentityDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
