// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreatePractitionerAddressDto } from '../../dto/create-PractitionerAddress.dto';

@Controller('PractitionerAddresss')
export class PractitionerAddressController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreatePractitionerAddressDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreatePractitionerAddressDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
