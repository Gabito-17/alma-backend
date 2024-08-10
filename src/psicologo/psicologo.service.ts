import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Repository } from 'typeorm';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';
import { Psicologo } from './entities/psicologo.entity';

@Injectable()
export class PsicologoService {
  constructor(
    @InjectRepository(Psicologo)
    private readonly psicologoRepository: Repository<Psicologo>,
    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,
    @InjectRepository(TipoDocumento)
    private readonly tipoDocumentoRepository: Repository<TipoDocumento>,
  ) {}

  async create(createPsicologoDto: CreatePsicologoDto): Promise<Psicologo> {
    const especialidad = await this.especialidadRepository.findOne({
      where: { idEspecialidad: parseInt(createPsicologoDto.idEspecialidad) },
    });
    const tipoDocumento = await this.tipoDocumentoRepository.findOne({
      where: { idTipoDocumento: parseInt(createPsicologoDto.idTipoDocumento) },
    });

    if (!especialidad) {
      throw new NotFoundException(
        `Especialidad with ID ${createPsicologoDto.idEspecialidad} not found`,
      );
    }
    if (!tipoDocumento) {
      throw new NotFoundException(
        `TipoDocumento with ID ${createPsicologoDto.idTipoDocumento} not found`,
      );
    }

    // Verificar si ya existe un psicólogo con el mismo número de documento
    const existingPsicologo = await this.psicologoRepository.findOne({
      where: { numeroDoc: createPsicologoDto.numeroDoc },
    });

    if (existingPsicologo) {
      throw new ConflictException(
        'Psicólogo con el mismo número de documento ya existe',
      );
    }

    const persona = this.psicologoRepository.create({
      ...createPsicologoDto,
      especialidad,
      tipoDocumento,
    });

    return this.psicologoRepository.save(persona);
  }

  async findAll(): Promise<Psicologo[]> {
    return this.psicologoRepository.find({
      relations: ['especialidad', 'tipoDocumento', 'pacientes'],
    });
  }

  async findOne(numeroDoc: string): Promise<Psicologo> {
    const psicologo = await this.psicologoRepository.findOne({
      where: { numeroDoc },
      relations: ['especialidad', 'tipoDocumento', 'pacientes'],
    });

    if (!psicologo) {
      throw new NotFoundException(`Psicologo with ID ${numeroDoc} not found`);
    }

    return psicologo;
  }

  async update(
    numeroDoc: string,
    updatePsicologoDto: UpdatePsicologoDto,
  ): Promise<Psicologo> {
    try {
      const psicologo = await this.findOne(numeroDoc);
      const especialidad = await this.especialidadRepository.findOne({
        where: { idEspecialidad: parseInt(updatePsicologoDto.idEspecialidad) },
      });
      psicologo.especialidad = especialidad;
      this.psicologoRepository.merge(psicologo, updatePsicologoDto);

      return this.psicologoRepository.save(psicologo);
    } catch (err) {
      return err;
    }
  }

  async remove(numeroDoc: string): Promise<void> {
    const psicologo = await this.findOne(numeroDoc);
    psicologo.deleteAt = new Date();
    await this.psicologoRepository.save(psicologo);
  }
}
