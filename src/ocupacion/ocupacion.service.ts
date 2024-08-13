import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Repository } from 'typeorm';
import { CreateOcupacionDto } from './dto/create-ocupacion.dto';
import { UpdateOcupacionDto } from './dto/update-ocupacion.dto';
import { Ocupacion } from './entities/ocupacion.entity';

@Injectable()
export class OcupacionService {
  constructor(
    @InjectRepository(Ocupacion)
    private readonly ocupacionRepository: Repository<Ocupacion>,
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createOcupacionDto: CreateOcupacionDto) {
    const soloLetras = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑ.,]+$/;
    if (!soloLetras.test(createOcupacionDto.nombre)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    if (!soloLetras.test(createOcupacionDto.descripcion)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    const ocupacion = this.ocupacionRepository.create(createOcupacionDto);
    return this.ocupacionRepository.save(ocupacion);
  }

  async findAll(): Promise<Ocupacion[]> {
    return this.ocupacionRepository.find();
  }

  async findOne(id: number): Promise<Ocupacion> {
    const ocupacion = await this.ocupacionRepository.findOne({
      where: { idOcupacion: id },
    });
    if (!ocupacion) {
      throw new NotFoundException(`Ocupacion con id ${id} no encontrada`);
    }
    return ocupacion;
  }

  async update(
    idOcupacion: number,
    updateOcupacionDto: UpdateOcupacionDto,
  ): Promise<Ocupacion> {
    // Buscar el registro que quieres actualizar
    const ocupacion = await this.ocupacionRepository.findOne({
      where: { idOcupacion },
    });
    const soloLetras = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑ.,]+$/;
    if (!soloLetras.test(updateOcupacionDto.nombre)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    if (!soloLetras.test(updateOcupacionDto.descripcion)) {
      throw new ConflictException('Los Campos solo deben contener letras.');
    }
    if (!ocupacion) {
      throw new NotFoundException(`Ocupacion with ID ${idOcupacion} not found`);
    }

    // Actualizar los campos
    const updatedOcupacion = Object.assign(ocupacion, updateOcupacionDto);

    // Guardar los cambios en la base de datos
    return this.ocupacionRepository.save(updatedOcupacion);
  }

  async remove(id: number): Promise<void> {
    try {
      const ocupacion = await this.ocupacionRepository.findOne({
        where: { idOcupacion: id },
      });
      if (!ocupacion) {
        return error('ocupacion no existe');
      }

      const psicologo: Paciente = await this.pacienteRepository.findOne({
        select: { id: true },
        where: { ocupacion },
        relations: ['ocupacion'],
      });
      console.log(psicologo);
      if (psicologo) {
        throw new ConflictException();
      }
      ocupacion.deletedAt = new Date();

      const updatedOcupacion = await this.ocupacionRepository.save(ocupacion);
      console.log(updatedOcupacion);
    } catch (e) {
      return e;
    }
  }
}
