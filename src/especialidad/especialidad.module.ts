import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from './entities/especialidad.entity';
import { EspecialidadController } from './especialidad.controller';
import { EspecialidadService } from './especialidad.service';

@Module({
  controllers: [EspecialidadController],
  providers: [EspecialidadService],
  imports: [TypeOrmModule.forFeature([Especialidad])],
})
export class EspecialidadModule {}
