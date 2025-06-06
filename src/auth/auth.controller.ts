import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser, RawHeaders } from './decorators';
import { RoleProtected } from './decorators/role-protected.decorator';
import { CreateUserDto, LoginUserDto } from './dto';
import { CompleteProfileDto } from './dto/complete-profile.dto';
import { User } from './entities/user.entity';
import { ValidRoles } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @RoleProtected(ValidRoles.pacient)
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUser() user: User,
    @RawHeaders() rawHeaders: string[],
  ) {
    console.log({ request });
    return {
      ok: true,
      message: 'anda todo',
      user: user,
      rawHeaders,
    };
  }

  @Post('complete-profile')
  async completeProfile(@Body() dto: CompleteProfileDto, @Req() req) {
    const { email } = this.jwtService.verify(
      req.headers.authorization?.split(' ')[1],
    );
    if (!email) throw new UnauthorizedException();

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new BadRequestException('Este usuario ya existe');
    }

    const { name, lastName, birthDate, picture } = dto;

    const user = this.userRepository.create({
      email,
      name,
      lastName,
      birthDate,
      img: picture,
      roles: ['pacient'],
      password: '',
    });

    try {
      await this.userRepository.save(user);
    } catch (error) {
      this.handleDBErrors(error);
    }

    return {
      user,
      access_token: this.getJwtToken({ id: user.id, role: user.roles }),
    };
  }
}
