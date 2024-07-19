import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { PaginationDto } from './dto/paginationDto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Personas } from './entities/persona.entity';

@Injectable()
export class PersonasService {
  @InjectRepository(Personas)
  private readonly personaRepository: Repository<Personas>;

  @InjectRepository(TipoDocumento)
  private readonly tipoDocumentoRepository: Repository<TipoDocumento>;
  constructor() {}

  async findAll(): Promise<Personas[]> {
    return this.personaRepository.find({
      relations: ['sexo', 'pais', 'tipoDocumento'],
    });
  }
  async getPaginatedPersonas(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const [result, total] = await this.personaRepository.findAndCount({
      skip: page,
      take: limit,
    });
    return {
      data: result,
      count: total,
      page: page,
    };
  }

  async findOne(numeroDoc: string): Promise<Personas> {
    const persona = await this.personaRepository.findOne({
      relations: ['sexo', 'pais', 'tipoDocumento'],
      where: { numeroDoc },
    });
    if (!persona) {
      throw new NotFoundException(`Persona with ID ${numeroDoc} not found`);
    }
    return persona;
  }

  async create(createPersonaDto: CreatePersonaDto): Promise<Personas> {
    try {

      const tipoDocumento = await this.tipoDocumentoRepository.findOneBy({
        idTipoDocumento: createPersonaDto.idTipoDocumento,
      });
      if (!tipoDocumento) {
        throw new NotFoundException(
          `TipoDocumento with ID ${createPersonaDto.idTipoDocumento} not found`,
        );
      }
      const persona = this.personaRepository.create({
        ...createPersonaDto,
        tipoDocumento: tipoDocumento,
      });
      this.personaRepository.save(persona);
      return persona;
    } catch (err) {
      console.log(err);
    }
  }

  async update(
    numeroDoc: string,
    updatePersonaDto: UpdatePersonaDto,
  ): Promise<Personas> {
    try {
      const persona = await this.findOne(numeroDoc);
      this.personaRepository.merge(persona, updatePersonaDto);
      return this.personaRepository.save(persona);
    } catch (err) {
      return err;
    }
  }

  async remove(numeroDoc: string): Promise<void> {
    const persona = await this.findOne(numeroDoc);
    persona.deleteAt = new Date();
    await this.personaRepository.save(persona);
  }
}
