import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreatePersonaDto } from 'src/personas/dto/create-persona.dto';

export class CreatePacienteDto extends CreatePersonaDto {
  @IsOptional()
  @IsString()
  idOcupacion: string;

  @IsOptional()
  @IsString()
  idEstadoCivil: string;

  @IsNotEmpty()
  @IsString()
  idPsicologoAsignado: string;
}
