import { Injectable } from '@nestjs/common';
import { CreateOcupacionDto } from './dto/create-ocupacion.dto';
import { UpdateOcupacionDto } from './dto/update-ocupacion.dto';

@Injectable()
export class OcupacionService {
  create(createOcupacionDto: CreateOcupacionDto) {
    return 'This action adds a new ocupacion';
  }

  findAll() {
    return `This action returns all ocupacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ocupacion`;
  }

  update(id: number, updateOcupacionDto: UpdateOcupacionDto) {
    return `This action updates a #${id} ocupacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} ocupacion`;
  }
}
