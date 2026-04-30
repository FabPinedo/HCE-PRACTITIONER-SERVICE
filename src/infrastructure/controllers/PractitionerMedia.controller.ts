// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreatePractitionerMediaDto } from '../../dto/create-PractitionerMedia.dto';

@Controller('PractitionerMedias')
export class PractitionerMediaController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreatePractitionerMediaDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreatePractitionerMediaDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
