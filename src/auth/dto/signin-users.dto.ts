import { IsString, IsEmail, IsNotEmpty } from "class-validator"

export class SignInUserDto {
    @IsEmail({}, { message: '이메일 형식이어야 합니다.' })
    @IsNotEmpty({ message: '필수 입력 항목입니다.' })
    email: string

    @IsString()
    @IsNotEmpty({ message: '필수 입력 항목입니다.' })
    password: string
}