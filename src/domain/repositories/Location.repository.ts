import { Location } from '../entities/Location.entity';

export interface LocationRepository {
  save(entity: Location): Promise<Location>;
  findById(id: string): Promise<Location | null>;
  findAll(): Promise<Location[]>;
  delete(id: string): Promise<void>;
}
