import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

import { UsersEntity } from './entities/users.entity';
import { SignUpUserDto } from './dto/signup-users.dto';



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity>
    ) {}

    async signUp(signUpUserDto: SignUpUserDto): Promise<UsersEntity> {
        const {email, password, nickname} = signUpUserDto

        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = this.userRepository.create({
            email,
            password: hashedPassword,
            nickname
        })

        try {
            return await this.userRepository.save(user)
        } catch(e) {
            throw new ConflictException('이미 존재하는 계정 정보입니다.')
        }
    }

    async findByEmail(email: string): Promise<UsersEntity | undefined> {
        return await this.userRepository.findOne({
            where: { email }
        })
    }
}
