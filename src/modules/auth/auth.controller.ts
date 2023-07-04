import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthDto } from './login/dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() { mail_user, password_user }: UserAuthDto) {
        const userValidate = await this.authService.validateUser(
            mail_user,
            password_user
        );

        if (!userValidate) {
            throw new Error('Usuario o contraseña incorrectos');
        }

        const jwt = await this.authService.generateJWT(userValidate);
        return jwt;
    }
}
