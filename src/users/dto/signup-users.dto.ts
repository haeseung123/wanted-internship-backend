import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator"

export class SignUpUserDto {
    @IsEmail({}, { message: '이메일 형식이어야 합니다.' })
    @IsNotEmpty({ message: '필수 입력 항목입니다.' })
    email: string

    @IsString()
    @MinLength(8, { message: '8자 이상이어야 합니다.' })
    @IsNotEmpty({ message: '필수 입력 항목입니다.' })
    password: string

    @IsString()
    @IsNotEmpty({ message: '필수 입력 항목입니다.' })
    nickname: string
}