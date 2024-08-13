import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInformeSesionDto {
  @IsNotEmpty()
  @IsNumber()
  nroSesion: number;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  tipoDescripcion: string;
}
