// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateFileServerConfigDto } from '../../dto/create-FileServerConfig.dto';

@Controller('FileServerConfigs')
export class FileServerConfigController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreateFileServerConfigDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreateFileServerConfigDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
