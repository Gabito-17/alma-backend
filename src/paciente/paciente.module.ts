import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { Paciente } from './entities/paciente.entity';
import { EstadoCivil } from 'src/estado-civil/entities/estado-civil.entity';
import { Persona } from 'src/personas/entities/persona.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService],
  imports: [
    TypeOrmModule.forFeature([Psicologo, Paciente, EstadoCivil, Persona, TipoDocumento]),
  ],
})
export class PacienteModule {}
