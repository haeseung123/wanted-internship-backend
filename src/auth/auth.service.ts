import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { SignInUserDto } from './dto/signin-users.dto';
import { Payload } from './security/payload.interface';
import { UsersEntity } from 'src/users/entities/users.entity';



@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private  jwtService: JwtService
    ) {}

    async signIn(signInUserDto: SignInUserDto): Promise<string> {
        const { email, password } = signInUserDto

        const user = await this.usersService.findByEmail(email)

        if(!user) {
            throw new UnauthorizedException('없는 이메일 입니다.')
        }

        const isPassword = await bcrypt.compare(password, user.password)
        
        if(!isPassword) {
            throw new UnauthorizedException('틀린 비밀번호 입니다.')
        }

        const payload = {
            sub: user.email,
            username: user.nickname
        }

        const accessToken = this.jwtService.sign(payload)
        return accessToken

    }

    async tokenValidateUser(payload: Payload): Promise<UsersEntity | undefined> {
        return await this.usersService.findByEmail(payload.sub)
    }





}
