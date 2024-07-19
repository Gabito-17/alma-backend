import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/typeorm.service';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';
import { OcupacionModule } from './ocupacion/ocupacion.module';
import { PacienteModule } from './paciente/paciente.module';
import { PersonasModule } from './personas/personas.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    PersonasModule,
    TipoDocumentoModule,
    PacienteModule,
    EstadoCivilModule,
    OcupacionModule, // Importa aquí el módulo donde estás utilizando PersonaRepository
  ],
})
export class AppModule {}
