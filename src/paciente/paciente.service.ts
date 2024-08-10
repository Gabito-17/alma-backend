import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const existingPaciente = await this.pacienteRepository.findOne({
      where: { numeroDoc: createPacienteDto.numeroDoc },
    });

    if (existingPaciente) {
      throw new ConflictException(
        `Paciente con el numero de documento ${createPacienteDto.numeroDoc} ya existe`,
      );
    }
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

      if (!estadoCivil) {
        throw new NotFoundException(
          `Estado civil with ID ${createPacienteDto.idEstadoCivil} not found`,
        );
      }

      const psicologoAsignado = await this.psicologoRepository.findOne({
        where: { id: parseInt(createPacienteDto.idPsicologoAsignado) },
        relations: ['pacientes', 'tipoDocumento'],
      });

      if (!psicologoAsignado) {
        throw new NotFoundException(
          `Psicologo with ID ${createPacienteDto.idPsicologoAsignado} not found`,
        );
      }

      const paciente = this.pacienteRepository.create({
        ...createPacienteDto,
        tipoDocumento: tipoDocumento,
        estadoCivil: estadoCivil,
        psicologoAsignado,
      });

      await this.pacienteRepository.save(paciente);
      console.log(paciente);
      psicologoAsignado.pacientes.push(paciente); // Añadir el paciente a la lista de pacientes del psicólogo
      await this.psicologoRepository.save(psicologoAsignado); // Guardar el psicólogo con la lista actualizada de pacientes

      return paciente;
    } catch (err) {
      console.log(err);
      throw err;
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
      relations: ['estadoCivil', 'psicologoAsignado', 'tipoDocumento'],
    });

    if (!paciente) {
      throw new NotFoundException(`Paciente with ID ${numeroDoc} not found`);
    }

    return paciente;
  }

  async update(
    numeroDoc: string,
    updatePacienteDto: UpdatePacienteDto,
  ): Promise<Paciente> {
    try {
      const paciente = await this.findOne(numeroDoc);

      if (updatePacienteDto.idTipoDocumento) {
        const tipoDocumento = await this.tipoDocumentoRepository.findOneBy({
          idTipoDocumento: parseInt(updatePacienteDto.idTipoDocumento),
        });
        if (!tipoDocumento) {
          throw new NotFoundException(
            `TipoDocumento with ID ${updatePacienteDto.idTipoDocumento} not found`,
          );
        }
        paciente.tipoDocumento = tipoDocumento;
      }

      if (updatePacienteDto.idEstadoCivil) {
        const estadoCivil = await this.estadoCivilRepository.findOneBy({
          idEstadoCivil: parseInt(updatePacienteDto.idEstadoCivil),
        });
        if (!estadoCivil) {
          throw new NotFoundException(
            `Estado civil with ID ${updatePacienteDto.idEstadoCivil} not found`,
          );
        }
        paciente.estadoCivil = estadoCivil;
      }

      if (updatePacienteDto.idPsicologoAsignado) {
        const psicologoAsignado = await this.psicologoRepository.findOne({
          where: { id: parseInt(updatePacienteDto.idPsicologoAsignado) },
          relations: ['pacientes'],
        });
        if (!psicologoAsignado) {
          throw new NotFoundException(
            `Psicologo with ID ${updatePacienteDto.idPsicologoAsignado} not found`,
          );
        }
        paciente.psicologoAsignado = psicologoAsignado;
      }

      this.pacienteRepository.merge(paciente, updatePacienteDto);
      return this.pacienteRepository.save(paciente);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async remove(numeroDoc: string): Promise<void> {
    const paciente = await this.findOne(numeroDoc);
    paciente.deleteAt = new Date();
    await this.pacienteRepository.save(paciente);
  }
}
