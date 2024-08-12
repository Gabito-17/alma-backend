import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDocumento } from '../tipo-documento/entities/tipo-documento.entity';
import { Secretario } from './entities/secretario.entity';
import { SecretarioController } from './secretario.controller';
import { SecretarioService } from './secretario.service';

@Module({
  controllers: [SecretarioController],
  providers: [SecretarioService],
  imports: [TypeOrmModule.forFeature([Secretario, TipoDocumento])],
  exports: [SecretarioService],
})
export class SecretarioModule {}
