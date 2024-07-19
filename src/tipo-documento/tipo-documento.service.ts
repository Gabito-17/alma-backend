import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoDocumentoDto } from './dto/create-tipo-documento.dto';
import { UpdateTipoDocumentoDto } from './dto/update-tipo-documento.dto';
import { TipoDocumento } from './entities/tipo-documento.entity';

@Injectable()
export class TipoDocumentoService {
  constructor(
    @InjectRepository(TipoDocumento)
    private readonly tipoDocumentoRepository: Repository<TipoDocumento>,
  ) {}

  async findOne(idTipoDocumento: number): Promise<TipoDocumento> {
    const TipoDocumento = await this.tipoDocumentoRepository.findOne({
      where: { idTipoDocumento },
    });
    if (!TipoDocumento) {
      throw new NotFoundException(
        `Persona with ID ${idTipoDocumento} not found`,
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

  async remove(idTipoDocumento: number): Promise<void> {
    const tipoDocumento = await this.findOne(idTipoDocumento);
    tipoDocumento.deleteAt = new Date();
    await this.tipoDocumentoRepository.save(tipoDocumento);
  }
}
