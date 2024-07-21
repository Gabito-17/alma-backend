import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCivil } from './entities/estado-civil.entity';
import { EstadoCivilController } from './estado-civil.controller';
import { EstadoCivilService } from './estado-civil.service';

@Module({
  controllers: [EstadoCivilController],
  providers: [EstadoCivilService],
  imports: [TypeOrmModule.forFeature([EstadoCivil])],
})
export class EstadoCivilModule {}
