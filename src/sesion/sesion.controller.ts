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
import { SesionService } from './sesion.service';

@Controller('sesiones')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Post()
  create(@Body() createSesionDto: CreateSesionDto) {
    return this.sesionService.create(createSesionDto);
  }

  @Get()
  findAll() {
    return this.sesionService.findAll();
  }

  @Get(':nroSesion')
  findOne(@Param('nroSesion') nroSesion: string) {
    return this.sesionService.findOne(+nroSesion);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSesionDto: UpdateSesionDto) {
    return this.sesionService.update(+id, updateSesionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sesionService.remove(+id);
  }
}
