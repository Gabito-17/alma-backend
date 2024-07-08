import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personas } from './entities/Personas.entity';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService],
  imports: [
    TypeOrmModule.forFeature([Personas])
  ]
})
export class PersonasModule {}
