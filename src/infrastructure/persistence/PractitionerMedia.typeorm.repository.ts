import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PractitionerMedia } from '../../domain/entities/PractitionerMedia.entity';
import { PractitionerMediaRepository } from '../../domain/repositories/PractitionerMedia.repository';

@Injectable()
export class PractitionerMediaTypeOrmRepository implements PractitionerMediaRepository {
  constructor(
    @InjectRepository(PractitionerMedia)
    private readonly repo: Repository<PractitionerMedia>,
  ) {}

  findAll(): Promise<PractitionerMedia[]> { return this.repo.find(); }
  findById(id: string): Promise<PractitionerMedia | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: PractitionerMedia): Promise<PractitionerMedia> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
