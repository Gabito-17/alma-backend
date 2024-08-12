import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOcupacionDto } from './dto/create-ocupacion.dto';
import { UpdateOcupacionDto } from './dto/update-ocupacion.dto';
import { OcupacionService } from './ocupacion.service';

@Controller('ocupaciones')
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
  findOne(@Param('id') id: number) {
    return this.ocupacionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateOcupacionDto: UpdateOcupacionDto,
  ) {
    return this.ocupacionService.update(id, updateOcupacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ocupacionService.remove(id);
  }
}
