import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSecretarioDto } from './dto/create-secretario.dto';
import { UpdateSecretarioDto } from './dto/update-secretario.dto';
import { SecretarioService } from './secretario.service';

@Controller('secretarios')
export class SecretarioController {
  constructor(private readonly secretarioService: SecretarioService) {}

  @Post()
  create(@Body() createSecretarioDto: CreateSecretarioDto) {
    return this.secretarioService.create(createSecretarioDto);
  }

  @Get()
  findAll() {
    return this.secretarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secretarioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSecretarioDto: UpdateSecretarioDto,
  ) {
    return this.secretarioService.update(id, updateSecretarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secretarioService.remove(id);
  }
}
