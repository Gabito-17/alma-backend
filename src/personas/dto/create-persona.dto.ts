import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
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
  @MinLength(2, {
    message: 'El nombre es muy corto. Debe tener al menos 2 caracteres.',
  })
  @MaxLength(50, {
    message: 'El nombre es muy largo. Debe tener máximo 50 caracteres.',
  })
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/, {
    message: 'El nombre solo puede contener letras, espacios, apóstrofes.',
  })
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'El apellido es muy corto. Debe tener al menos 2 caracteres.',
  })
  @MaxLength(50, {
    message: 'El apellido es muy largo. Debe tener máximo 50 caracteres.',
  })
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/, {
    message: 'El apellido solo puede contener letras, espacios, apóstrofes.',
  })
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
