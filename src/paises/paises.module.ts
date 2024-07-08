import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { PaisesController } from './paises.controller';
import { PaisesService } from './paises.service';

@Module({
  controllers: [PaisesController],
  providers: [PaisesService],
  imports: [
    TypeOrmModule.forFeature([Pais])
  ]
})
export class PaisesModule {}
