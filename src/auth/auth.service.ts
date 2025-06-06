import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  //Crear usuario
  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      //Hashear contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
      //Crea Usuario
      const user = this.userRepository.create({
        ...userData,
        password: hashedPassword,
      });

      //Persiste Usuario
      await this.userRepository.save(user);
      user.password = '';

      //Devuelve Usuario y Jwt Token
      return {
        ...user,
        token: this.getJwtToken({ id: user.id, role: user.roles }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  //Iniciar Sesion
  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    //Obtener Usuario
    const user = await this.userRepository.findOne({
      where: { email },
      select: { id: true, email: true, password: true, roles: true },
    });

    //Si no existe
    if (!user)
      throw new UnauthorizedException('El email no se encuentra registrado');
    //Compara Contraseñas
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('La contraseña no es válida');

    user.password = '';

    //Devuelve Usuario y Jwt Token
    return {
      ...user,
      token: this.getJwtToken({ id: user.id, role: user.roles }),
    };
  }

  async loginWithGoogle(profile: GoogleProfile) {
    //Obtiene el usuario
    const user = await this.userRepository.findOne({
      where: { email: profile.emails?.[0]?.value },
    });

    //Si el usuario existe
    if (user) {
      return {
        access_token: this.getJwtToken({ id: user.id, role: user.roles }),
        user,
        isNewUser: false,
      };
    }

    // Si no existe Crea un usuario con datos parciales
    const partialUser = {
      email: profile.emails?.[0]?.value ?? '',
      name: profile.name?.givenName ?? '',
      lastName: profile.name?.familyName ?? '',
      picture: profile.photos?.[0]?.value ?? '',
    };

    //Genera un token temporal
    const tempToken = this.jwtService.sign({ email: partialUser.email });

    //Devuelve devuelve datos parciales y token temporal
    return {
      access_token: tempToken,
      user: partialUser,
      isNewUser: true,
    };
  }

  //Obtener Jwt Token
  private getJwtToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }

  //Manejador de errores
  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    console.error(error);
    throw new InternalServerErrorException('Revisar logs del servidor');
  }
}
