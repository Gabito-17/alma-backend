import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import { Persona } from 'src/personas/entities/persona.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Psicologo } from './entities/psicologo.entity';
import { PsicologoController } from './psicologo.controller';
import { PsicologoService } from './psicologo.service';

@Module({
  controllers: [PsicologoController],
  providers: [PsicologoService],
  imports: [
    TypeOrmModule.forFeature([Psicologo, Especialidad, Persona, TipoDocumento]),
  ],
})
export class PsicologoModule {}
