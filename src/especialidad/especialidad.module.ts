import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { Especialidad } from './entities/especialidad.entity';
import { EspecialidadController } from './especialidad.controller';
import { EspecialidadService } from './especialidad.service';

@Module({
  controllers: [EspecialidadController],
  providers: [EspecialidadService],
  imports: [TypeOrmModule.forFeature([Especialidad, Psicologo])],
})
export class EspecialidadModule {}
