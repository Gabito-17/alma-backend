import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { TipoDocumentoController } from './tipo-documento.controller';
import { TipoDocumentoService } from './tipo-documento.service';

@Module({
  controllers: [TipoDocumentoController],
  providers: [TipoDocumentoService],
  imports: [
    TypeOrmModule.forFeature([TipoDocumento])]
})
export class TipoDocumentoModule {}
