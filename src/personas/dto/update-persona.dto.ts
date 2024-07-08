import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdatePersonaDto {
    @IsOptional()
    @IsString()
    readonly apellido?: string;

    @IsOptional()
    @IsString()
    readonly nombre?: string;

    @IsOptional()
    @IsString()
    readonly telefono?: string;

    @IsOptional()
    @IsString()
    readonly direccion?: string;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    readonly fechaDeNacimiento?: Date;

    @IsOptional()
    @IsEmail()
    readonly mail?: string;

    // Puedes agregar más validaciones según sea necesario
}
