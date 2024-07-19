import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { sexo } from '../entities/sexo.enum';

export class CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  readonly numeroDoc: string;

  @IsNotEmpty()
  @IsString()
  idTipoDocumento: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsOptional()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsString()
  direccion: string;

  @IsEnum(sexo)
  sexo: sexo;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  readonly fechaNacimiento: Date;

  @IsOptional()
  @IsEmail()
  email: string;
}
