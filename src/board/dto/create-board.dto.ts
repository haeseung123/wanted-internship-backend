import { IsNotEmpty, IsString } from "class-validator";

export class CreateBoardDto {
    @IsString()
    @IsNotEmpty({ message: '제목이 비어있습니다.'} )
    title: string

    @IsString()
    content: string
}