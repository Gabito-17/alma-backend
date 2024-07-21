import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { Especialidad } from './entities/especialidad.entity';

@Injectable()
export class EspecialidadService {
  constructor(
    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,
  ) {}

  async create(
    createEspecialidadDto: CreateEspecialidadDto,
  ): Promise<Especialidad> {
    const especialidad = this.especialidadRepository.create(
      createEspecialidadDto,
    );
    return this.especialidadRepository.save(especialidad);
  }

  async findAll(): Promise<Especialidad[]> {
    return this.especialidadRepository.find();
  }

  async findOne(id: number): Promise<Especialidad> {
    const especialidad = await this.especialidadRepository.findOne({
      where: { idEspecialidad: id },
    });
    if (!especialidad) {
      throw new NotFoundException(`Especialidad con id ${id} no encontrada`);
    }
    return especialidad;
  }

  async update(
    id: number,
    updateEspecialidadDto: UpdateEspecialidadDto,
  ): Promise<Especialidad> {
    const especialidad = await this.especialidadRepository.preload({
      idEspecialidad: id,
      ...updateEspecialidadDto,
    });
    if (!especialidad) {
      throw new NotFoundException(`Especialidad con id ${id} no encontrada`);
    }
    return this.especialidadRepository.save(especialidad);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.especialidadRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Especialidad con id ${id} no encontrada`);
    }
  }
}
