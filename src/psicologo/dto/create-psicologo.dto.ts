import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePersonaDto } from 'src/personas/dto/create-persona.dto';

export class CreatePsicologoDto extends CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  idEspecialidad: string;
}
