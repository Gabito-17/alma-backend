import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSesionDto {
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fechaHora: Date;

  @IsNotEmpty()
  @IsNumber()
  idPaciente: number;

  @IsNotEmpty()
  @IsNumber()
  idPsicologo: number;
}
