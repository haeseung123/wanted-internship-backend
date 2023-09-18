import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { UsersEntity } from 'src/users/entities/users.entity';
import { JwtStrategy } from './security/passport.jwt';


@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secret', // 나중에 수정하기
      signOptions: { expiresIn: '1h'}
    }),
    PassportModule,
    TypeOrmModule.forFeature([UsersEntity])
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
  exports: [TypeOrmModule]
})
export class AuthModule {}
