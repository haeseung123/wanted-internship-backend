import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';

import { UsersService } from './users.service';
import { SignUpUserDto } from './dto/signup-users.dto';
import { UsersEntity } from './entities/users.entity';

@Controller('users')
export class UsersController {
    constructor( private readonly usersService: UsersService) {}

    @Get()
    getHello(): string {
        return '유저 페이지 입니다.'
    }

    @Post('signup')
    async signup(@Body(ValidationPipe) signupUserDto: SignUpUserDto): Promise<UsersEntity> {
        return this.usersService.signUp(signupUserDto)
    }



}
