import { FileServerConfig } from '../../domain/entities/FileServerConfig.entity';
import { FileServerConfigRepository } from '../../domain/repositories/FileServerConfig.repository';

export class FileServerConfigUseCase {
  constructor(private readonly repo: FileServerConfigRepository) {}
  findAll(): Promise<FileServerConfig[]> { return this.repo.findAll(); }
  findById(id: string): Promise<FileServerConfig | null> { return this.repo.findById(id); }
  create(data: Partial<FileServerConfig>): Promise<FileServerConfig> { return this.repo.save(data as FileServerConfig); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
