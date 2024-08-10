import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { TipoDocumentoController } from './tipo-documento.controller';
import { TipoDocumentoService } from './tipo-documento.service';

@Module({
  controllers: [TipoDocumentoController],
  providers: [TipoDocumentoService],
  imports: [TypeOrmModule.forFeature([TipoDocumento, Paciente, Psicologo])],
})
export class TipoDocumentoModule {}
