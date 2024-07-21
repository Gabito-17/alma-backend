import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { Repository } from 'typeorm';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { Sesion } from './entities/sesion.entity';

@Injectable()
export class SesionService {
  @InjectRepository(Paciente)
  private readonly pacienteRepository: Repository<Paciente>;

  @InjectRepository(Psicologo)
  private readonly psicologoRepository: Repository<Psicologo>;

  @InjectRepository(Sesion)
  private readonly sesionRepository: Repository<Sesion>;
  constructor() {}

  async create(createSesionDto: CreateSesionDto): Promise<Sesion> {
    try {
      const psicologo = await this.psicologoRepository.findOneBy({
        id: createSesionDto.idPsicologo,
      });
      const paciente = await this.pacienteRepository.findOneBy({
        id: createSesionDto.idPaciente,
      });
      if (!psicologo) {
        throw new NotFoundException(
          `TipoDocumento with ID ${createSesionDto.idPsicologo} not found`,
        );
      }

      if (!paciente) {
        throw new NotFoundException(
          `estadoCivil with ID ${createSesionDto.idPaciente} not found`,
        );
      }
      const sesion = this.sesionRepository.create({
        ...createSesionDto,
        psicologo: psicologo,
        paciente: paciente,
      });
      this.sesionRepository.save(sesion);
      return sesion;
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all sesion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sesion`;
  }

  update(id: number, updateSesionDto: UpdateSesionDto) {
    return `This action updates a #${id} sesion`;
  }

  remove(id: number) {
    return `This action removes a #${id} sesion`;
  }
}
