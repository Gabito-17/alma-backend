import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCivil } from 'src/estado-civil/entities/estado-civil.entity';
import { Ocupacion } from 'src/ocupacion/entities/ocupacion.entity';
import { Persona } from 'src/personas/entities/persona.entity';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Paciente } from './entities/paciente.entity';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService],
  imports: [
    TypeOrmModule.forFeature([
      Psicologo,
      Paciente,
      EstadoCivil,
      Persona,
      TipoDocumento,
      Ocupacion,
    ]),
  ],
})
export class PacienteModule {}
