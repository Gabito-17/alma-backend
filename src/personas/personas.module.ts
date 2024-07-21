import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { Persona } from './entities/persona.entity';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService],
  imports: [TypeOrmModule.forFeature([Persona, TipoDocumento])],
  exports: [PersonasService],
})
export class PersonasModule {}
