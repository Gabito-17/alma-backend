import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasModule } from './personas/personas.module';
import { SexosModule } from './sexos/sexos.module';
import { PaisesModule } from './paises/paises.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres', // Tipo de base de datos que estás utilizando
            host: 'localhost', // Host donde está corriendo tu base de datos
            port: 5432, // Puerto de tu base de datos
            username: 'postgres', // Usuario de la base de datos
            password: 'Gabito1235', // Contraseña de la base de datos
            database: 'almadb', // Nombre de la base de datos
            autoLoadEntities: true, // Arreglo de entidades que estás utilizando en tu aplicación
            synchronize: true, // Sincronizar las estructuras de la base de datos con las entidades (solo para desarrollo)
        }),
        PersonasModule,
        SexosModule,
        PaisesModule,
        TipoDocumentoModule, // Importa aquí el módulo donde estás utilizando PersonaRepository
    ],
})
export class AppModule {}
