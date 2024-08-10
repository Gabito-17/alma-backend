import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { Repository } from 'typeorm';
import { CreateTipoDocumentoDto } from './dto/create-tipo-documento.dto';
import { UpdateTipoDocumentoDto } from './dto/update-tipo-documento.dto';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { tipoDocumentoRelationsException } from './tipo-documento.exceptions';

@Injectable()
export class TipoDocumentoService {
  constructor(
    @InjectRepository(TipoDocumento)
    private readonly tipoDocumentoRepository: Repository<TipoDocumento>,
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
    @InjectRepository(Psicologo)
    private readonly psicologoRepository: Repository<Psicologo>,
  ) {}

  async findOne(idTipoDocumento: number): Promise<TipoDocumento> {
    const TipoDocumento = await this.tipoDocumentoRepository.findOne({
      where: { idTipoDocumento },
    });
    if (!TipoDocumento) {
      throw new NotFoundException(
        `Documento with ID ${idTipoDocumento} not found`,
      );
    }
    return TipoDocumento;
  }

  async create(createTipoDocumentoDto: CreateTipoDocumentoDto) {
    const TipoDocumento = this.tipoDocumentoRepository.create(
      createTipoDocumentoDto,
    );
    return this.tipoDocumentoRepository.save(TipoDocumento);
  }

  async findAll(): Promise<TipoDocumento[]> {
    return this.tipoDocumentoRepository.find();
  }

  async update(
    idTipoDocumento: number,
    updateTipoDocumentoDto: UpdateTipoDocumentoDto,
  ): Promise<TipoDocumento> {
    try {
      const TipoDocumento = await this.findOne(idTipoDocumento);
      this.tipoDocumentoRepository.merge(TipoDocumento, updateTipoDocumentoDto);
      return this.tipoDocumentoRepository.save(TipoDocumento);
    } catch (err) {
      return err;
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      const tipoDocumento = await this.tipoDocumentoRepository.findOne({
        where: { idTipoDocumento: id },
      });

      if (!tipoDocumento) {
        throw new NotFoundException('Tipo de Documento no existe');
      }

      const pacientes = await this.pacienteRepository.find({
        where: { tipoDocumento },
      });
      const psicologos = await this.psicologoRepository.find({
        where: { tipoDocumento },
      });
      console.log(pacientes);
      console.log(psicologos);
      if (pacientes.length > 0 || psicologos.length > 0) {
        throw new tipoDocumentoRelationsException();
      }

      tipoDocumento.deleteAt = new Date();
      await this.tipoDocumentoRepository.save(tipoDocumento);

      return { message: 'Tipo documento eliminado exitosamente.' };
    } catch (e) {
      return e;
    }
  }
}
