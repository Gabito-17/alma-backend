import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado-civil.dto';
import { EstadoCivilService } from './estado-civil.service';

@Controller('estado-civil')
export class EstadoCivilController {
  constructor(private readonly estadoCivilService: EstadoCivilService) {}

  @Post()
  create(@Body() createEstadoCivilDto: CreateEstadoCivilDto) {
    return this.estadoCivilService.create(createEstadoCivilDto);
  }

  @Get()
  findAll() {
    return this.estadoCivilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.estadoCivilService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateEstadoCivilDto: UpdateEstadoCivilDto,
  ) {
    return this.estadoCivilService.update(+id, updateEstadoCivilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.estadoCivilService.remove(id);
  }
}
