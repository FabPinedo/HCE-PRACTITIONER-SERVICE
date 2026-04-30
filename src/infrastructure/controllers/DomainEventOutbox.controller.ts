// BFF Negocio — aplica reglas de negocio
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateDomainEventOutboxDto } from '../../dto/create-DomainEventOutbox.dto';

@Controller('DomainEventOutboxs')
export class DomainEventOutboxController {
  @Get() findAll() { return []; }
  @Get(':id') findOne(@Param('id') id: string) { return { id }; }
  @Post() create(@Body() dto: CreateDomainEventOutboxDto) { return dto; }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreateDomainEventOutboxDto>) { return { id, ...dto }; }
  @Delete(':id') @HttpCode(204) remove(@Param('id') _id: string) {}
}
