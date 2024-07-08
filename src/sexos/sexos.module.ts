import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sexo } from './entities/sexo.entity';
import { SexosController } from './sexos.controller';
import { SexosService } from './sexos.service';

@Module({
  controllers: [SexosController],
  providers: [SexosService],
  imports: [
    TypeOrmModule.forFeature([Sexo])
  ]
})
export class SexosModule {}
