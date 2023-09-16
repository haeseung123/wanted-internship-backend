import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

import { UsersService } from 'src/users/users.service';
import { SignInUserDto } from './dto/signin-users.dto';



@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService
        
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

        return '로그인 성공'
    }


}
