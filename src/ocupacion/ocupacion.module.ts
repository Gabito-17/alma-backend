import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Ocupacion } from './entities/ocupacion.entity';
import { OcupacionController } from './ocupacion.controller';
import { OcupacionService } from './ocupacion.service';

@Module({
  controllers: [OcupacionController],
  providers: [OcupacionService],
  imports: [TypeOrmModule.forFeature([Ocupacion, Paciente])],
})
export class OcupacionModule {}
