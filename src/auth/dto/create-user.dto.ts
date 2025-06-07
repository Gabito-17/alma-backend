import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ValidRoles } from '../interfaces';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(50, {
    message: 'La contraseña no puede tener mas de 50 caracteres',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
    message:
      'La contraseña debe contener al menos una mayuscula, minuscula y un numero',
  })
  password: string;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  roles?: ValidRoles[];
}
