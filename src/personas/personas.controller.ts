import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Personas } from './entities/Personas.entity';
import { PersonasService } from './personas.service';

@Controller('personas')
export class PersonasController {
    constructor(private readonly personaService: PersonasService) {}

    @Get()
    async findAll(): Promise<Personas[]> {
        return this.personaService.findAll();
    }

    @Get(':numeroDoc')
    async findOne(@Param('numeroDoc') numeroDoc: string): Promise<Personas> {
        return this.personaService.findOne(numeroDoc);
    }

    @Post()
    async create(@Body() createPersonaDto: CreatePersonaDto): Promise<Personas> {
        console.log('Datos recibidos en el backend:', createPersonaDto);
        const personaCreada = await this.personaService.create(createPersonaDto);
        return personaCreada;
    }

    @Patch(':numeroDoc')
    async update(
        @Param('numeroDoc') numeroDoc: string,
        @Body() updatePersonaDto: UpdatePersonaDto,
    ): Promise<Personas> {
        return this.personaService.update(numeroDoc, updatePersonaDto);
    }

    @Delete(':numeroDoc')
    async remove(@Param('numeroDoc') numeroDoc: string): Promise<void> {
        return this.personaService.remove(numeroDoc);
    }
}
