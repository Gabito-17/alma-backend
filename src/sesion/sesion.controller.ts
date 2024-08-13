import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { Sesion } from './entities/sesion.entity';
import { SesionService } from './sesion.service';
import { identity } from 'rxjs';

@Controller('sesiones')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Post()
  create(@Body() createSesionDto: CreateSesionDto) {
    return this.sesionService.create(createSesionDto);
  }

  @Get()
  async findAll(): Promise<Sesion[]> {
    return this.sesionService.findAll();
  }
  
  @Get(':idPaciente')
  findByPatient(@Param('idPaciente') idPaciente: string) {
    return this.sesionService.findAllByPatient(+idPaciente);
  }

  @Patch(':nroSesion')
  update(
    @Param('nroSesion') nroSesion: string,
    @Body() updateSesionDto: UpdateSesionDto,
  ) {
    return this.sesionService.update(+nroSesion, updateSesionDto);
  }

  @Delete(':nroSesion')
  remove(@Param('nroSesion') nroSesion: string) {
    return this.sesionService.remove(+nroSesion);
  }
}
