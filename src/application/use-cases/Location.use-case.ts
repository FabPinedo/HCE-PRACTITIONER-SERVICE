import { Location } from '../../domain/entities/Location.entity';
import { LocationRepository } from '../../domain/repositories/Location.repository';

export class LocationUseCase {
  constructor(private readonly repo: LocationRepository) {}
  findAll(): Promise<Location[]> { return this.repo.findAll(); }
  findById(id: string): Promise<Location | null> { return this.repo.findById(id); }
  create(data: Partial<Location>): Promise<Location> { return this.repo.save(data as Location); }
  delete(id: string): Promise<void> { return this.repo.delete(id); }
}
