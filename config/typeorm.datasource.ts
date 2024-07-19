import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Ocupacion } from 'src/ocupacion/entities/ocupacion.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Persona } from 'src/personas/entities/persona.entity';
import { TipoDocumento } from 'src/tipo-documento/entities/tipo-documento.entity';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [Persona, Paciente, TipoDocumento, Ocupacion],
  migrations: ['./migrations/*.{ts,js}'],
  migrationsTableName: 'migrations',
  synchronize: true,
});
