import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pais } from 'src/paises/entities/pais.entity';
import { Sexo } from 'src/sexos/entities/sexo.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Personas } from './entities/persona.entity';

@Injectable()
export class PersonasService {
  @InjectRepository(Personas)
  private readonly personaRepository: Repository<Personas>;

  @InjectRepository(Sexo)
  private readonly sexoRepository: Repository<Sexo>;

  @InjectRepository(Pais)
  private readonly paisRepository: Repository<Pais>;

  @InjectRepository(TipoDocumento)
  private readonly tipoDocumentoRepository: Repository<TipoDocumento>;
  constructor() {}

  async findAll(): Promise<Personas[]> {
    return this.personaRepository.find({ relations: ['sexo', 'pais'] });
  }

  async findOne(numeroDoc: string): Promise<Personas> {
    const persona = await this.personaRepository.findOne({
      relations: ['sexo', 'pais'],
      where: { numeroDoc },
    });
    if (!persona) {
      throw new NotFoundException(`Persona with ID ${numeroDoc} not found`);
    }
    return persona;
  }

  async create(createPersonaDto: CreatePersonaDto): Promise<Personas> {
    try {
      const sexo = await this.sexoRepository.findOneBy({
        idSexo: createPersonaDto.idSexo,
      });
      if (!sexo) {
        throw new NotFoundException(
          `Sexo with ID ${createPersonaDto.idSexo} not found`,
        );
      }

      const pais = await this.paisRepository.findOneBy({
        idPais: createPersonaDto.idPais,
      });
      if (!pais) {
        throw new NotFoundException(
          `Pais with ID ${createPersonaDto.idPais} not found`,
        );
      }

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
        sexo: sexo,
        pais: pais,
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
