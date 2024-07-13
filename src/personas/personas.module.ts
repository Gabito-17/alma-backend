import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from 'src/paises/entities/pais.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Sexo } from '../sexos/entities/sexo.entity';
import { Personas } from './entities/persona.entity';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService],
  imports: [TypeOrmModule.forFeature([Personas, Sexo, Pais, TipoDocumento])],
  exports: [PersonasService],
})
export class PersonasModule {}
