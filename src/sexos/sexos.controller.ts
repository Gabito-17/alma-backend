import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { SexosService } from './sexos.service';

@Controller('sexos')
export class SexosController {
  constructor(private readonly sexosService: SexosService) {}

  @Post()
  create(@Body() createSexoDto: CreateSexoDto) {
    return this.sexosService.create(createSexoDto);
  }

  @Get()
  findAll() {
    return this.sexosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSexoDto: UpdateSexoDto) {
    return this.sexosService.update(id, updateSexoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sexosService.remove(id);
  }
}