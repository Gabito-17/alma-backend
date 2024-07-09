import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { Sexo } from './entities/sexo.entity';

@Injectable()
export class SexosService {
  constructor(
    @InjectRepository(Sexo)
    private readonly sexoRepository : Repository<Sexo>,
) {}

async findOne(idSexo: string): Promise<Sexo> {
  const sexo = await this.sexoRepository.findOne({ where: { idSexo } });
  if (!sexo) {
      throw new NotFoundException(`Persona with ID ${idSexo} not found`);
  }
  return sexo;
}

  async create(createSexoDto: CreateSexoDto) {
    const sexo = this.sexoRepository.create(createSexoDto);
    return this.sexoRepository.save(sexo);
  }
  async findAll(): Promise<Sexo[]> {
    return this.sexoRepository.find();
  }

async update(idSexo: string, updateSexoDto: UpdateSexoDto): Promise<Sexo> {
    try {
    const sexo = await this.findOne(idSexo);
    this.sexoRepository.merge(sexo, updateSexoDto);
    return this.sexoRepository.save(sexo);
    }
catch (err) {
    return err;
}}

async remove(numeroDoc: string): Promise<void> {
    const sexo = await this.findOne(numeroDoc);
    sexo.deleteAt = new Date();
    await this.sexoRepository.save(sexo);
}


}
