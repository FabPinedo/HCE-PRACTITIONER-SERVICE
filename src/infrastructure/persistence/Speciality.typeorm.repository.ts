import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Speciality } from '../../domain/entities/Speciality.entity';
import { SpecialityRepository, SpecialityCatalogResult } from '../../domain/repositories/Speciality.repository';

@Injectable()
export class SpecialityTypeOrmRepository implements SpecialityRepository {
  constructor(
    @InjectRepository(Speciality)
    private readonly repo: Repository<Speciality>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<Speciality[]> { return this.repo.find(); }
  findById(id: string): Promise<Speciality | null> { return this.repo.findOne({ where: { id } as any }); }
  save(entity: Speciality): Promise<Speciality> { return this.repo.save(entity); }
  async delete(id: string): Promise<void> { await this.repo.delete(id); }

  findCatalog(searchTerm?: string): Promise<SpecialityCatalogResult[]> {
    return this.dataSource.query<SpecialityCatalogResult[]>(`
      SELECT
          s.speciality_id,
          s.fhir_code,
          s.fhir_system,
          s.fhir_display,
          s.local_name,
          s.legacy_speciality_id
      FROM fhir.speciality s
      WHERE s.is_active = 1
        AND (@0 IS NULL OR s.local_name LIKE '%' + @0 + '%' OR s.fhir_display LIKE '%' + @0 + '%')
      ORDER BY s.local_name
    `, [searchTerm ?? null]);
  }
}
