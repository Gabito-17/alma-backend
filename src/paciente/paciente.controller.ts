import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PacienteService } from './paciente.service';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':numeroDoc')
  findOne(@Param('numeroDoc') numeroDoc: string) {
    return this.pacienteService.findOne(numeroDoc);
  }

  @Patch(':numeroDoc')
  update(
    @Param('numeroDoc') numeroDoc: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(numeroDoc, updatePacienteDto);
  }

  @Delete(':numeroDoc')
  remove(@Param('numeroDoc') numeroDoc: string) {
    return this.pacienteService.remove(numeroDoc);
  }
}
