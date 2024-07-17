import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  readonly numeroDoc: string;

  @IsNotEmpty()
  @IsString()
  readonly apellido: string;

  @IsNotEmpty()
  @IsString()
  readonly nombre: string;

  @IsNotEmpty()
  @IsString()
  readonly telefono: string;

  @IsNotEmpty()
  @IsString()
  readonly direccion: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  readonly fechaNacimiento: Date;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  idPais: string;

  @IsNotEmpty()
  @IsString()
  idTipoDocumento: string;

  @IsNotEmpty()
  @IsString()
  idSexo: string;
}
