import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { Especialidad } from './entities/especialidad.entity';

@Controller('especialidades')
export class EspecialidadController {
  constructor(private readonly especialidadService: EspecialidadService) {}

  @Post()
  async create(
    @Body() createEspecialidadDto: CreateEspecialidadDto,
  ): Promise<Especialidad> {
    return this.especialidadService.create(createEspecialidadDto);
  }

  @Get()
  async findAll(): Promise<Especialidad[]> {
    return this.especialidadService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Especialidad> {
    return this.especialidadService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEspecialidadDto: UpdateEspecialidadDto,
  ): Promise<Especialidad> {
    return this.especialidadService.update(+id, updateEspecialidadDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.especialidadService.remove(+id);
  }
}
