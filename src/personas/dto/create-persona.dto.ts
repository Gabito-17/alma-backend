import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonaDto {
    @IsNotEmpty()
    @IsString()
    readonly numeroDoc: string;

    @IsNotEmpty()
    @IsString()
    readonly apellido: string;

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;

    @IsNotEmpty()
    @IsString()
    readonly telefono: string;

    @IsNotEmpty()
    @IsString()
    readonly direccion: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    readonly fechaDeNacimiento: Date;

    @IsNotEmpty()
    @IsEmail()
    readonly mail: string;
    
    @IsNotEmpty()
    idPais: number;
    
    @IsNotEmpty()
    idTipoDocumento: number;
    
    @IsNotEmpty()
    idSexo: number;
}
