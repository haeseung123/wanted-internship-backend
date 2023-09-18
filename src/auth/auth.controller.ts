import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-users.dto';
import { AuthGuard } from './security/auth.guard';


@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService) {}

    
    @Get('')
    async gethello() {
        return 'auth page test'
    }

    @Post('signin')
    async signin(@Body(ValidationPipe) signInUserDto: SignInUserDto): Promise<string> {
        return this.authService.signIn(signInUserDto)
    }

    @UseGuards(AuthGuard)
    @Get('/test')
    async getProfile(@Req() req: Request) {
        const user = req.user
        return user
    }
    
}
