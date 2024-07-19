import { IsString, Length, MaxLength } from 'class-validator';

export class CreateEstadoCivilDto {
  @IsString()
  @Length(1, 20)
  nombre: string;
  @IsString()
  @MaxLength(255)
  descripcion: string;
}
