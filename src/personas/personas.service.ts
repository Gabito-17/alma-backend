import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Personas } from './entities/personas.entity';

@Injectable()
export class PersonasService {
    constructor(
        @InjectRepository(Personas)
        private readonly personaRepository: Repository<Personas>,
    ) {}

    async findAll(): Promise<Personas[]> {
        return this.personaRepository.find();
    }

    async findOne(numeroDoc: string): Promise<Personas> {
        const persona = await this.personaRepository.findOne({ where: { numeroDoc } });
        if (!persona) {
            throw new NotFoundException(`Persona with ID ${numeroDoc} not found`);
        }
        return persona;
    }

    async create(createPersonaDto: CreatePersonaDto): Promise<Personas> {
        const persona = this.personaRepository.create(createPersonaDto);
        return this.personaRepository.save(persona);
    }

    async update(numeroDoc: string, updatePersonaDto: UpdatePersonaDto): Promise<Personas> {
        const persona = await this.findOne(numeroDoc);
        this.personaRepository.merge(persona, updatePersonaDto);
        return this.personaRepository.save(persona);
    }

    async remove(numeroDoc: string): Promise<void> {
        const persona = await this.findOne(numeroDoc);
        await this.personaRepository.remove(persona);
    }
}
