import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { Sesion } from './entities/sesion.entity';
import { SesionController } from './sesion.controller';
import { SesionService } from './sesion.service';

@Module({
  controllers: [SesionController],
  providers: [SesionService],
  imports: [TypeOrmModule.forFeature([Paciente, Sesion, Psicologo])],
})
export class SesionModule {}
