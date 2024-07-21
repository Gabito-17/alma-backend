import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Sexo } from '../entities/persona.entity';

export class CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  readonly numeroDoc: string;

  @IsNotEmpty()
  @IsString()
  idTipoDocumento: string;

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

  @IsNotEmpty()
  @IsEnum(Sexo)
  sexo: Sexo;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  readonly fechaNacimiento: Date;

  @IsOptional()
  @IsEmail()
  email: string;
}
