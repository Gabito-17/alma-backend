import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoCivil } from 'src/estado-civil/entities/estado-civil.entity';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Repository } from 'typeorm';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  @InjectRepository(Paciente)
  private readonly pacienteRepository: Repository<Paciente>;

  @InjectRepository(Psicologo)
  private readonly psicologoRepository: Repository<Psicologo>;

  @InjectRepository(EstadoCivil)
  private readonly estadoCivilRepository: Repository<EstadoCivil>;

  @InjectRepository(TipoDocumento)
  private readonly tipoDocumentoRepository: Repository<TipoDocumento>;
  constructor() {}

  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    try {
      const tipoDocumento = await this.tipoDocumentoRepository.findOneBy({
        idTipoDocumento: parseInt(createPacienteDto.idTipoDocumento),
      });
      const estadoCivil = await this.estadoCivilRepository.findOneBy({
        idEstadoCivil: parseInt(createPacienteDto.idEstadoCivil),
      });
      if (!tipoDocumento) {
        throw new NotFoundException(
          `TipoDocumento with ID ${createPacienteDto.idTipoDocumento} not found`,
        );
      }
      const psicologoAsignado = await this.psicologoRepository.findOneBy({
        id: parseInt(createPacienteDto.idPsicologoAsignado),
      });
      if (!estadoCivil) {
        throw new NotFoundException(
          `estadoCivil with ID ${createPacienteDto.idPsicologoAsignado} not found`,
        );
      }
      const paciente = this.pacienteRepository.create({
        ...createPacienteDto,
        tipoDocumento: tipoDocumento,
        estadoCivil: estadoCivil,
        psicologoAsignado,
      });
      this.pacienteRepository.save(paciente);
      return paciente;
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find({
      relations: ['estadoCivil', 'psicologoAsignado', 'tipoDocumento'],
    });
  }

  async findOne(numeroDoc: string): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({
      where: { numeroDoc },
      relations: ['estadoCivil', 'psicologoAsignado'],
    });

    if (!paciente) {
      throw new NotFoundException(`Psicologo with ID ${numeroDoc} not found`);
    }

    return paciente;
  }

  async update(
    numeroDoc: string,
    updatePacienteDto: UpdatePacienteDto,
  ): Promise<Paciente> {
    try {
      const paciente = await this.findOne(numeroDoc);
      this.pacienteRepository.merge(paciente, updatePacienteDto);
      return this.pacienteRepository.save(paciente);
    } catch (err) {
      return err;
    }
  }

  async remove(numeroDoc: string): Promise<void> {
    const paciente = await this.findOne(numeroDoc);
    paciente.deleteAt = new Date();
    await this.pacienteRepository.save(paciente);
  }
}
