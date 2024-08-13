import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInformeSesionDto } from './dto/create-informe-sesion.dto';
import { UpdateInformeSesionDto } from './dto/update-informe-sesion.dto';
import { InformeSesionService } from './informe-sesion.service';

@Controller('informes')
export class InformeSesionController {
  constructor(private readonly informeSesionService: InformeSesionService) {}

  @Post()
  create(@Body() createInformeSesionDto: CreateInformeSesionDto) {
    return this.informeSesionService.create(createInformeSesionDto);
  }

  @Get()
  findAll() {
    return this.informeSesionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informeSesionService.findOneBySesion(+id);
  }

  @Patch(':nroSesion')
  update(
    @Param('nroSesion') nroSesion: string,
    @Body() updateInformeSesionDto: UpdateInformeSesionDto,
  ) {
    return this.informeSesionService.update(+nroSesion, updateInformeSesionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informeSesionService.remove(+id);
  }
}
