import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Repository } from 'typeorm';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado-civil.dto';
import { EstadoCivil } from './entities/estado-civil.entity';
import { estadoCivilRelationsException } from './estado-civil.exception';

@Injectable()
export class EstadoCivilService {
  constructor(
    @InjectRepository(EstadoCivil)
    private readonly estadoCivilRepository: Repository<EstadoCivil>,
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createEstadoCivilDto: CreateEstadoCivilDto) {
    const soloLetras = /^[A-Za-z\s]+$/;
    if (!soloLetras.test(createEstadoCivilDto.nombre)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    if (!soloLetras.test(createEstadoCivilDto.descripcion)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    const estadoCivil = this.estadoCivilRepository.create(createEstadoCivilDto);
    return this.estadoCivilRepository.save(estadoCivil);
  }

  async findAll() {
    return this.estadoCivilRepository.find();
  }

  async findOne(idEstadoCivil: number): Promise<EstadoCivil> {
    return this.estadoCivilRepository.findOne({
      where: { idEstadoCivil },
    });
  }

  async update(
    idEstadoCivil: number,
    updateEstadoCivilDto: UpdateEstadoCivilDto,
  ): Promise<EstadoCivil> {
    // Buscar el registro que quieres actualizar
    const estadoCivil = await this.estadoCivilRepository.findOne({
      where: { idEstadoCivil },
    });
    const soloLetras = /^[A-Za-z\s]+$/;
    if (!soloLetras.test(updateEstadoCivilDto.nombre)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    if (!soloLetras.test(updateEstadoCivilDto.descripcion)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    if (!estadoCivil) {
      throw new NotFoundException(
        `EstadoCivil with ID ${idEstadoCivil} not found`,
      );
    }

    // Actualizar los campos
    const updatedEstadoCivil = Object.assign(estadoCivil, updateEstadoCivilDto);

    // Guardar los cambios en la base de datos
    return this.estadoCivilRepository.save(updatedEstadoCivil);
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      const estadoCivil = await this.estadoCivilRepository.findOne({
        where: { idEstadoCivil: id },
      });

      if (!estadoCivil) {
        throw new NotFoundException('Estado civil no existe');
      }

      const pacientes = await this.pacienteRepository.find({
        where: { estadoCivil },
      });

      if (pacientes.length > 0) {
        throw new estadoCivilRelationsException();
      }

      estadoCivil.deleteAt = new Date();
      await this.estadoCivilRepository.save(estadoCivil);

      return { message: 'Estado civil eliminado exitosamente.' };
    } catch (e) {
      if (e instanceof estadoCivilRelationsException) {
        throw new ConflictException(
          'La especialidad está asignada a uno o más pacientes y no puede ser eliminada.',
        );
      }
      throw e;
    }
  }
}
