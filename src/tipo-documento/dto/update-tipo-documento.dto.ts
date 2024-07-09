import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDocumentoDto } from './create-tipo-documento.dto';
import { IsDate } from 'class-validator';

export class UpdateTipoDocumentoDto extends PartialType(CreateTipoDocumentoDto) {


}
