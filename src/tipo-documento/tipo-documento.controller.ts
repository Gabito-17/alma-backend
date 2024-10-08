import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTipoDocumentoDto } from './dto/create-tipo-documento.dto';
import { UpdateTipoDocumentoDto } from './dto/update-tipo-documento.dto';
import { TipoDocumentoService } from './tipo-documento.service';

@Controller('tipo-documentos')
export class TipoDocumentoController {
  constructor(private readonly tipoDocumentoService: TipoDocumentoService) {}

  @Post()
  create(@Body() createTipoDocumentoDto: CreateTipoDocumentoDto) {
    console.log(createTipoDocumentoDto);
    return this.tipoDocumentoService.create(createTipoDocumentoDto);
  }

  @Get()
  findAll() {
    return this.tipoDocumentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoDocumentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTipoDocumentoDto: UpdateTipoDocumentoDto,
  ) {
    return this.tipoDocumentoService.update(id, updateTipoDocumentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log('entra');
    return this.tipoDocumentoService.remove(id);
  }
}
