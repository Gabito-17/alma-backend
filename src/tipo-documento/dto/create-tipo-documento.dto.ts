import { IsString } from "class-validator";

export class CreateTipoDocumentoDto {
    @IsString()
    sigla: string;
    
    @IsString()
    descripcion: string;
}
