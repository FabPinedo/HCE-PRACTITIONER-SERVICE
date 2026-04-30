import { PractitionerMedia } from '../../domain/entities/PractitionerMedia.entity';
import { PractitionerMediaRepository } from '../../domain/repositories/PractitionerMedia.repository';

export class PractitionerMediaUseCase {
  constructor(private readonly repo: PractitionerMediaRepository) {}
  findAll(): Promise<PractitionerMedia[]> { return this.repo.findAll(); }
  findById(id: string): Promise<PractitionerMedia | null> { return this.repo.findById(id); }
  create(data: Partial<PractitionerMedia>): Promise<PractitionerMedia> { return this.repo.save(data as PractitionerMedia); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
