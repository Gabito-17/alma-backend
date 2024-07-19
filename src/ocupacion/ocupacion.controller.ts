import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OcupacionService } from './ocupacion.service';
import { CreateOcupacionDto } from './dto/create-ocupacion.dto';
import { UpdateOcupacionDto } from './dto/update-ocupacion.dto';

@Controller('ocupacion')
export class OcupacionController {
  constructor(private readonly ocupacionService: OcupacionService) {}

  @Post()
  create(@Body() createOcupacionDto: CreateOcupacionDto) {
    return this.ocupacionService.create(createOcupacionDto);
  }

  @Get()
  findAll() {
    return this.ocupacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ocupacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOcupacionDto: UpdateOcupacionDto) {
    return this.ocupacionService.update(+id, updateOcupacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ocupacionService.remove(+id);
  }
}
