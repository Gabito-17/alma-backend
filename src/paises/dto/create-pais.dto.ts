import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaisDto {
    @IsNotEmpty()
    @IsString()
    readonly idPais: string;

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
}
