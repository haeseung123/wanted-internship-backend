import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-users.dto';


@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService) {}

    @Get()
    getHello(): string {
        return '로그인 페이지 입니다.'
    }

    @Post('signin')
    async signin(@Body(ValidationPipe) signInUserDto: SignInUserDto): Promise<string> {
        return this.authService.signIn(signInUserDto)
    }
}
