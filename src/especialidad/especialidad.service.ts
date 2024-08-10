import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { Repository } from 'typeorm';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { Especialidad } from './entities/especialidad.entity';
import { especialidadRelationsException } from './especialidad.exception';

@Injectable()
export class EspecialidadService {
  constructor(
    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,

    @InjectRepository(Psicologo)
    private readonly psicologoRepository: Repository<Psicologo>,
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
    try {
      const especialidad = await this.especialidadRepository.findOne({
        where: { idEspecialidad: id },
      });
      if (!especialidad) {
        return error('Especialidad no existe');
      }

      const psicologo: Psicologo = await this.psicologoRepository.findOne({
        select: { id: true },
        where: { especialidad },
        relations: ['especialidad'],
      });
      console.log(psicologo);
      if (psicologo) {
        throw new especialidadRelationsException();
      }
      especialidad.deletedAt = new Date();

      const updatedEspecialidad =
        await this.especialidadRepository.save(especialidad);
      console.log(updatedEspecialidad);
    } catch (e) {
      return e;
    }
  }
}
