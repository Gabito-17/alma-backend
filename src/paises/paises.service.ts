import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';

@Injectable()
export class PaisesService {
    constructor(
        @InjectRepository(Pais)
        private readonly paisRepository: Repository<Pais>,
    ) {}

    async findAll(): Promise<Pais[]> {
        return this.paisRepository.find();
    }

    async findOne(idPais: string): Promise<Pais> {
        const pais = await this.paisRepository.findOne({ where: { idPais } });
        if (!pais) {
            throw new NotFoundException(`Pais with ID ${idPais} not found`);
        }
        return pais;
    }

    async create(createPaisDto: CreatePaisDto): Promise<Pais> {
        const pais = this.paisRepository.create(createPaisDto);
        return this.paisRepository.save(pais);
    }

    async update(idPais: string, updatePaisDto: UpdatePaisDto): Promise<Pais> {
        const pais = await this.findOne(idPais);
        this.paisRepository.merge(pais, updatePaisDto);
        return this.paisRepository.save(pais);
    }

    async remove(idPais: string): Promise<void> {
        const pais = await this.findOne(idPais);
        await this.paisRepository.remove(pais);
    }
}
