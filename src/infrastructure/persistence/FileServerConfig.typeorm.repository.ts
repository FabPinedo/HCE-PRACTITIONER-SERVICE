import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileServerConfig } from '../../domain/entities/FileServerConfig.entity';
import { FileServerConfigRepository } from '../../domain/repositories/FileServerConfig.repository';

@Injectable()
export class FileServerConfigTypeOrmRepository implements FileServerConfigRepository {
  constructor(
    @InjectRepository(FileServerConfig)
    private readonly repo: Repository<FileServerConfig>,
  ) {}

  findAll(): Promise<FileServerConfig[]> { return this.repo.find(); }
  findById(id: string): Promise<FileServerConfig | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: FileServerConfig): Promise<FileServerConfig> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
