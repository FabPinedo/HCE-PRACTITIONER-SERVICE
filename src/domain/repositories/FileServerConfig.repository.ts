import { FileServerConfig } from '../entities/FileServerConfig.entity';

export interface FileServerConfigRepository {
  save(entity: FileServerConfig): Promise<FileServerConfig>;
  findById(id: string): Promise<FileServerConfig | null>;
  findAll(): Promise<FileServerConfig[]>;
  delete(id: string): Promise<void>;
}
