// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateLegacySyncLogDto } from '../../dto/create-LegacySyncLog.dto';

@Controller('LegacySyncLogs')
export class LegacySyncLogController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreateLegacySyncLogDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreateLegacySyncLogDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
