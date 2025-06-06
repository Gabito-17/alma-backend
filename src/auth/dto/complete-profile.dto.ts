import { IsEmail, IsString, IsDateString } from 'class-validator';

export class CompleteProfileDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsDateString()
  birthDate: string;

  @IsString()
  picture: string;

  @IsEmail()
  email: string; // opcional, si lo querés validar también desde el frontend
}
