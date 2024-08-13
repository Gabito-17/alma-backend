import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sesion } from '../sesion/entities/sesion.entity';
import { InformeSesion } from './entities/informe-sesion.entity';
import { InformeSesionController } from './informe-sesion.controller';
import { InformeSesionService } from './informe-sesion.service';

@Module({
  controllers: [InformeSesionController],
  providers: [InformeSesionService],
  imports: [TypeOrmModule.forFeature([InformeSesion, Sesion])],
})
export class InformeSesionModule {}
