import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../../domain/entities/Location.entity';
import { LocationRepository } from '../../domain/repositories/Location.repository';

@Injectable()
export class LocationTypeOrmRepository implements LocationRepository {
  constructor(
    @InjectRepository(Location)
    private readonly repo: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> { return this.repo.find(); }
  findById(id: string): Promise<Location | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: Location): Promise<Location> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }
}
