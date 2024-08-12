import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/typeorm.service';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';
import { PacienteModule } from './paciente/paciente.module';
import { PersonasModule } from './personas/personas.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { PsicologoModule } from './psicologo/psicologo.module';
import { SesionModule } from './sesion/sesion.module';
import { OcupacionModule } from './ocupacion/ocupacion.module';
import { SecretarioModule } from './secretario/secretario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    PersonasModule,
    TipoDocumentoModule,
    PacienteModule,
    EstadoCivilModule,
    EspecialidadModule,
    PsicologoModule,
    SesionModule,
    OcupacionModule,
    SecretarioModule, // Importa aquí el módulo donde estás utilizando PersonaRepository
  ],
})
export class AppModule {}
