import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { EstadoCivil } from './entities/estado-civil.entity';
import { EstadoCivilController } from './estado-civil.controller';
import { EstadoCivilService } from './estado-civil.service';

@Module({
  controllers: [EstadoCivilController],
  providers: [EstadoCivilService],
  imports: [TypeOrmModule.forFeature([EstadoCivil, Paciente])],
})
export class EstadoCivilModule {}
