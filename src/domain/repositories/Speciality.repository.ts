import { Speciality } from '../entities/Speciality.entity';

export interface SpecialityCatalogResult {
  speciality_id: number;
  fhir_code: string | null;
  fhir_system: string | null;
  fhir_display: string | null;
  local_name: string;
  legacy_speciality_id: string | null;
}

export interface SpecialityRepository {
  save(entity: Speciality): Promise<Speciality>;
  findById(id: string): Promise<Speciality | null>;
  findAll(): Promise<Speciality[]>;
  delete(id: string): Promise<void>;
  findCatalog(searchTerm?: string): Promise<SpecialityCatalogResult[]>;
}
