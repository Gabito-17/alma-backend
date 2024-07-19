import { Injectable } from '@nestjs/common';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado-civil.dto';

@Injectable()
export class EstadoCivilService {
  create(createEstadoCivilDto: CreateEstadoCivilDto) {
    return 'This action adds a new estadoCivil';
  }

  findAll() {
    return `This action returns all estadoCivil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoCivil`;
  }

  update(id: number, updateEstadoCivilDto: UpdateEstadoCivilDto) {
    return `This action updates a #${id} estadoCivil`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoCivil`;
  }
}
