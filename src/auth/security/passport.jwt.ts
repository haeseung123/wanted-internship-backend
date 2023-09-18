import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { Payload } from "./payload.interface";
import { AuthService } from "../auth.service";
import { UsersEntity } from "src/users/entities/users.entity";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secret'
        })
    }

    async validate(payload: Payload, done: VerifiedCallback): Promise<any> {
        const user = await this.authService.tokenValidateUser(payload)
        console.log(user)

        if(!user) {
            throw new UnauthorizedException({ message: '존재하지 않는 회원입니다.'})
        }

        return user
    }

}