import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/typeorm.service';
import { PaisesModule } from './paises/paises.module';
import { PersonasModule } from './personas/personas.module';
import { SexosModule } from './sexos/sexos.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        PersonasModule,
        SexosModule,
        PaisesModule,
        TipoDocumentoModule, // Importa aquí el módulo donde estás utilizando PersonaRepository
    ],
})
export class AppModule {}
