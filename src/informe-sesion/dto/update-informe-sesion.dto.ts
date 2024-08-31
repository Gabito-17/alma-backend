import { PartialType } from '@nestjs/swagger';
import { CreateInformeSesionDto } from './create-informe-sesion.dto';

export class UpdateInformeSesionDto extends PartialType(
  CreateInformeSesionDto,
) {}
