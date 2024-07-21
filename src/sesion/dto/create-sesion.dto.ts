import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { EstadoSesion } from '../entities/sesion.entity';

export class CreateSesionDto {
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fechaHora: Date;

  @IsNotEmpty()
  @IsEnum(EstadoSesion)
  estado: EstadoSesion;

  @IsNotEmpty()
  @IsNumber()
  idPaciente: number;

  @IsNotEmpty()
  @IsNumber()
  idPsicologo: number;
}
