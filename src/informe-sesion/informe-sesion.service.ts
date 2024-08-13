import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoSesion, Sesion } from 'src/sesion/entities/sesion.entity';
import { Repository } from 'typeorm';
import { CreateInformeSesionDto } from './dto/create-informe-sesion.dto';
import { UpdateInformeSesionDto } from './dto/update-informe-sesion.dto';
import { InformeSesion } from './entities/informe-sesion.entity';

@Injectable()
export class InformeSesionService {
  constructor(
    @InjectRepository(InformeSesion)
    private readonly informeSesionRepository: Repository<InformeSesion>,
    @InjectRepository(Sesion)
    private readonly sesionRepository: Repository<Sesion>,
  ) {}

  async create(createInformeSesionDto: CreateInformeSesionDto) {
    const soloLetras = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑ.,]+$/;

    // Validar que los campos solo contengan letras
    if (!soloLetras.test(createInformeSesionDto.tipoDescripcion)) {
      throw new ConflictException('Los campos solo deben contener letras.');
    }
    if (!soloLetras.test(createInformeSesionDto.descripcion)) {
      throw new ConflictException('Los campos solo deben contener letras.');
    }

    // Buscar la sesión de forma asíncrona y esperar el resultado
    const sesion = await this.sesionRepository.findOne({
      where: { nroSesion: createInformeSesionDto.nroSesion },
    });

    if (!sesion) {
      throw new ConflictException('El número de la sesión no es válido');
    }

    // Actualizar el estado de la sesión a "Realizado"
    sesion.estado = EstadoSesion.Realizado;

    // Guardar la sesión actualizada en la base de datos
    await this.sesionRepository.save(sesion);

    // Desestructurar el DTO, separando nroSesion del resto
    const { nroSesion, ...dto } = createInformeSesionDto;

    // Crear el objeto InformeSesion con la sesión obtenida y la fecha y hora actual
    const informeSesion = this.informeSesionRepository.create({
      ...dto,
      sesion: sesion, // Asignar la sesión obtenida
      fechaHora: new Date(), // Añadir la fecha y hora actual
    });

    // Guardar el InformeSesion en la base de datos
    return this.informeSesionRepository.save(informeSesion);
  }
  findAll() {
    return this.informeSesionRepository.find({
      relations: ['sesion'],
    });
  }

  async findOneBySesion(idSesion: number) {
    const informe = await this.informeSesionRepository.findOne({
      where: { sesion: { nroSesion: idSesion } }, // Buscando el informe basado en el nroSesion
      relations: ['sesion', 'sesion.paciente', 'sesion.psicologo'], // Relaciones necesarias
    });

    if (!informe) {
      throw new ConflictException(
        `No se encontró un informe para la sesión con id ${idSesion}`,
      );
    }

    return informe;
  }

  async update(
    nroSesion: number,
    updateInformeSesionDto: UpdateInformeSesionDto,
  ) {
    // Buscar la sesión con el número de sesión proporcionado
    const sesion = await this.sesionRepository.findOne({
      where: { nroSesion: nroSesion },
      relations: ['informe'],
    });

    if (!sesion || !sesion.informe) {
      throw new ConflictException(
        `No se encontró un informe para la sesión con id ${nroSesion}`,
      );
    }

    // Actualizar los campos del informe con los valores proporcionados en updateInformeSesionDto
    const updatedInforme = Object.assign(
      sesion.informe,
      updateInformeSesionDto,
    );

    // Guardar los cambios en el repositorio
    return this.informeSesionRepository.save(updatedInforme);
  }

  remove(id: number) {
    return `This action removes a #${id} informeSesion`;
  }
}
