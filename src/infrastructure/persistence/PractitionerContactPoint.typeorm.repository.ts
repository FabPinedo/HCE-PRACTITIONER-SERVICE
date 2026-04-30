import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PractitionerContactPoint } from '../../domain/entities/PractitionerContactPoint.entity';
import { PractitionerContactPointRepository } from '../../domain/repositories/PractitionerContactPoint.repository';

@Injectable()
export class PractitionerContactPointTypeOrmRepository implements PractitionerContactPointRepository {
  constructor(
    @InjectRepository(PractitionerContactPoint)
    private readonly repo: Repository<PractitionerContactPoint>,
  ) {}

  findAll(): Promise<PractitionerContactPoint[]> { return this.repo.find(); }
  findById(id: string): Promise<PractitionerContactPoint | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: PractitionerContactPoint): Promise<PractitionerContactPoint> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
