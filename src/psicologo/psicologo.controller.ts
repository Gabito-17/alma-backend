import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';
import { PsicologoService } from './psicologo.service';

@Controller('psicologos')
export class PsicologoController {
  constructor(private readonly psicologoService: PsicologoService) {}

  @Post()
  create(@Body() createPsicologoDto: CreatePsicologoDto) {
    return this.psicologoService.create(createPsicologoDto);
  }

  @Get()
  findAll() {
    return this.psicologoService.findAll();
  }

  @Get(':numeroDoc')
  findOne(@Param('numeroDoc') numeroDoc: string) {
    return this.psicologoService.findOne(numeroDoc);
  }

  @Patch(':numeroDoc')
  update(
    @Param('numeroDoc') numeroDoc: string,
    @Body() updatePsicologoDto: UpdatePsicologoDto,
  ) {
    return this.psicologoService.update(numeroDoc, updatePsicologoDto);
  }

  @Delete(':numeroDoc')
  remove(@Param('numeroDoc') numeroDoc: string) {
    return this.psicologoService.remove(numeroDoc);
  }
}
