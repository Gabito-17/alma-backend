import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
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

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = this.userRepository.create({
        ...userData,
        password: hashedPassword,
      });

      await this.userRepository.save(user);
      user.password = '';

      return {
        ...user,
        token: this.getJwtToken({ id: user.id, role: user.roles }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { id: true, email: true, password: true, roles: true },
    });

    if (!user)
      throw new UnauthorizedException('El email no se encuentra registrado');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('La contraseña no es válida');

    user.password = '';

    return {
      ...user,
      token: this.getJwtToken({ id: user.id, role: user.roles }),
    };
  }

  async loginWithGoogle(profile: any) {
    const user = await this.validateOrCreateUser(profile);

    return {
      access_token: this.jwtService.sign({ id: user.id, role: user.roles }),
      user,
    };
  }

  private async validateOrCreateUser(profile: any): Promise<User> {
    const { email, name, picture } = profile;

    if (!email) {
      throw new BadRequestException(
        'No se obtuvo el email del perfil de Google',
      );
    }

    let user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      user = this.userRepository.create({
        email,
        fullName: name,
        img: picture,
        roles: ['pacient'], // Rol por defecto
        password: '', // No se usa contraseña en login con Google
      });

      try {
        await this.userRepository.save(user);
      } catch (error) {
        this.handleDBErrors(error);
      }
    }

    return user;
  }

  private getJwtToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    console.error(error);
    throw new InternalServerErrorException('Revisar logs del servidor');
  }
}
