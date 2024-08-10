import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { Between, Repository } from 'typeorm';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { EstadoSesion, Sesion } from './entities/sesion.entity';

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
          `Psicologo with ID ${createSesionDto.idPsicologo} not found`,
        );
      }

      if (!paciente) {
        throw new NotFoundException(
          `Paciente with ID ${createSesionDto.idPaciente} not found`,
        );
      }

      const now = new Date();
      const oneMonthLater = new Date();
      oneMonthLater.setMonth(now.getMonth() + 1);

      // Validar que la fecha de la sesión sea igual o posterior a la fecha y hora actuales
      if (new Date(createSesionDto.fechaHora) < now) {
        throw new BadRequestException(
          'La fecha y hora de la sesión deben ser iguales o posteriores a la fecha y hora actuales.',
        );
      }

      // Validar que la fecha esté dentro del mes actual
      if (
        createSesionDto.fechaHora < now ||
        createSesionDto.fechaHora > oneMonthLater
      ) {
        throw new BadRequestException(
          'La fecha debe estar dentro del mes actual',
        );
      }

      const overlappingSession = await this.sesionRepository.findOne({
        where: {
          psicologo: { id: createSesionDto.idPsicologo },
          paciente: { id: createSesionDto.idPaciente },
          fechaHora: createSesionDto.fechaHora,
        },
      });

      if (overlappingSession) {
        throw new BadRequestException(
          'Ya existe una sesión en la misma fecha y hora',
        );
      }

      const startDate = new Date(createSesionDto.fechaHora);
      const endDate = new Date(createSesionDto.fechaHora);
      startDate.setHours(startDate.getHours() - 1);
      endDate.setHours(endDate.getHours() + 1);

      // Verificar solapamiento para el psicólogo
      const psicologoConflict = await this.sesionRepository.findOne({
        where: {
          psicologo: { id: createSesionDto.idPsicologo },
          fechaHora: Between(startDate, endDate),
        },
      });

      if (psicologoConflict) {
        throw new BadRequestException(
          'El psicólogo ya tiene una sesión en el rango de una hora antes o después.',
        );
      }

      // Verificar solapamiento para el paciente
      const pacienteConflict = await this.sesionRepository.findOne({
        where: {
          paciente: { id: createSesionDto.idPaciente },
          fechaHora: Between(startDate, endDate),
        },
      });

      if (pacienteConflict) {
        throw new BadRequestException(
          'El paciente ya tiene una sesión en el rango de una hora antes o después.',
        );
      }

      const sesion = this.sesionRepository.create({
        ...createSesionDto,
        psicologo: psicologo,
        paciente: paciente,
      });

      await this.sesionRepository.save(sesion);
      return sesion;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async findAll(): Promise<Sesion[]> {
    return this.sesionRepository.find({
      relations: ['psicologo', 'paciente'],
    });
  }

  async findOne(nroSesion: number): Promise<Sesion> {
    const sesion = await this.sesionRepository.findOne({
      where: { nroSesion },
      relations: ['psicologo', 'paciente'],
    });

    if (!sesion) {
      throw new NotFoundException(`Sesion with ID ${nroSesion} not found`);
    }

    return sesion;
  }

  async update(
    nroSesion: number,
    updateSesionDto: UpdateSesionDto,
  ): Promise<Sesion> {
    try {
      const sesion = await this.findOne(nroSesion);

      const now = new Date();
      const oneMonthLater = new Date();
      oneMonthLater.setMonth(now.getMonth() + 1);

      if (
        updateSesionDto.fechaHora < now ||
        updateSesionDto.fechaHora > oneMonthLater
      ) {
        throw new BadRequestException(
          'La fecha debe estar dentro del mes actual',
        );
      }

      const overlappingSession = await this.sesionRepository.findOne({
        where: {
          psicologo: sesion.psicologo,
          paciente: sesion.paciente,
          fechaHora: updateSesionDto.fechaHora,
        },
      });

      if (overlappingSession && overlappingSession.nroSesion !== nroSesion) {
        throw new BadRequestException(
          'Ya existe una sesión en la misma fecha y hora',
        );
      }
      const psicologo = await this.psicologoRepository.findOneBy({
        id: updateSesionDto.idPsicologo,
      });
      const paciente = await this.pacienteRepository.findOneBy({
        id: updateSesionDto.idPaciente,
      });
      sesion.paciente = paciente;
      sesion.psicologo = psicologo;
      this.sesionRepository.merge(sesion, updateSesionDto);
      return await this.sesionRepository.save(sesion);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async remove(nroSesion: number): Promise<void> {
    const sesion = await this.findOne(nroSesion);
    sesion.estado = EstadoSesion.CANCELADO;
    await this.sesionRepository.save(sesion);
  }
}