import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePersonaDto } from 'src/personas/dto/update-persona.dto';
import { Persona } from 'src/personas/entities/persona.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Repository } from 'typeorm';
import { CreateSecretarioDto } from './dto/create-secretario.dto';
import { Secretario } from './entities/secretario.entity';

@Injectable()
export class SecretarioService {
  @InjectRepository(Secretario)
  private readonly secretarioRepository: Repository<Secretario>;

  @InjectRepository(TipoDocumento)
  private readonly tipoDocumentoRepository: Repository<TipoDocumento>;
  constructor() {}

  async findAll(): Promise<Persona[]> {
    return this.secretarioRepository.find({
      relations: ['tipoDocumento'],
    });
  }

  async findOne(numeroDoc: string): Promise<Persona> {
    const persona = await this.secretarioRepository.findOne({
      relations: ['tipoDocumento'],
      where: { numeroDoc },
    });
    if (!persona) {
      throw new NotFoundException(`Persona with ID ${numeroDoc} not found`);
    }
    return persona;
  }

  async create(createSecretarioDto: CreateSecretarioDto): Promise<Secretario> {
    const tipoDocumento = await this.tipoDocumentoRepository.findOneBy({
      idTipoDocumento: parseInt(createSecretarioDto.idTipoDocumento),
    });
    if (!tipoDocumento) {
      throw new NotFoundException(
        `TipoDocumento with ID ${createSecretarioDto.idTipoDocumento} not found`,
      );
    }
    if (tipoDocumento.admiteLetras) {
      // Verificar si el número de documento contiene al menos una letra
      if (/[a-zA-Z]/.test(createSecretarioDto.numeroDoc)) {
        // Lógica si contiene letras
      } else {
        // Lógica si no contiene letras, pero debería admitirlas
        throw new ConflictException(
          'El número de documento debe contener letras.',
        );
      }
    } else {
      // Verificar si el número de documento solo contiene dígitos
      if (/^\d+$/.test(createSecretarioDto.numeroDoc)) {
        // Lógica si solo contiene dígitos
      } else {
        // Lógica si contiene caracteres que no son dígitos, pero no debería
        throw new ConflictException(
          'El número de documento debe contener solo dígitos.',
        );
      }
    }
    if (createSecretarioDto.numeroDoc.length !== tipoDocumento.cantDigitos) {
      throw new ConflictException(
        'El numero de documento debe tener' +
          tipoDocumento.cantDigitos +
          ' digitos.',
      );
    }
    const secretario = this.secretarioRepository.create({
      ...createSecretarioDto,
      tipoDocumento: tipoDocumento,
    });
    this.secretarioRepository.save(secretario);
    return secretario;
  }

  async update(
    numeroDoc: string,
    updatePersonaDto: UpdatePersonaDto,
  ): Promise<Persona> {
    try {
      const persona = await this.findOne(numeroDoc);
      this.secretarioRepository.merge(persona, updatePersonaDto);
      return this.secretarioRepository.save(persona);
    } catch (err) {
      return err;
    }
  }

  async remove(numeroDoc: string): Promise<void> {
    const persona = await this.findOne(numeroDoc);
    persona.deleteAt = new Date();
    await this.secretarioRepository.save(persona);
  }
}
