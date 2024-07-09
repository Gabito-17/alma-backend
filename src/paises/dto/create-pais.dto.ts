import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaisDto {
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
}