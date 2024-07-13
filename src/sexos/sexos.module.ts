import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personas } from 'src/personas/entities/persona.entity';
import { Sexo } from './entities/sexo.entity';
import { SexosController } from './sexos.controller';
import { SexosService } from './sexos.service';

@Module({
  controllers: [SexosController],
  providers: [SexosService],
  imports: [TypeOrmModule.forFeature([Sexo, Personas])],
  exports: [SexosService],
})
export class SexosModule {}
