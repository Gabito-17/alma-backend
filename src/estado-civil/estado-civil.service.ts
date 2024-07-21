import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado-civil.dto';
import { EstadoCivil } from './entities/estado-civil.entity';

@Injectable()
export class EstadoCivilService {
  constructor(
    @InjectRepository(EstadoCivil)
    private readonly estadoCivilRepository: Repository<EstadoCivil>,
  ) {}

  async create(createEstadoCivilDto: CreateEstadoCivilDto) {
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

  async remove(id: number): Promise<void> {
    // Buscar el registro que quieres eliminar
    const result = await this.estadoCivilRepository.delete(id);

    // Si no se elimina ningún registro, lanzar una excepción
    if (result.affected === 0) {
      throw new NotFoundException(`EstadoCivil with ID ${id} not found`);
    }
  }
}
