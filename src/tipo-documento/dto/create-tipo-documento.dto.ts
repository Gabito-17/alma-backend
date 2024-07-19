import {
  IsBoolean,
  IsNumber,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateTipoDocumentoDto {
  @IsString()
  @Length(1, 20)
  sigla: string;

  @IsString()
  @MaxLength(255)
  descripcion: string;

  @IsNumber()
  cantDigitos: number;

  @IsBoolean()
  admiteLetras: boolean;
}
