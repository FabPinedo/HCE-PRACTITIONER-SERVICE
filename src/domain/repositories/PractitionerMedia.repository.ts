import { PractitionerMedia } from '../entities/PractitionerMedia.entity';

export interface PractitionerMediaRepository {
  save(entity: PractitionerMedia): Promise<PractitionerMedia>;
  findById(id: string): Promise<PractitionerMedia | null>;
  findAll(): Promise<PractitionerMedia[]>;
  delete(id: string): Promise<void>;
}
