import { Body, Controller, Get, Param, Post, 
    Query, Request, UseGuards, Patch, Delete, ForbiddenException } from '@nestjs/common';

import { BoardService } from './board.service';
import { BoardEntity } from './entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { AuthGuard } from 'src/auth/security/auth.guard';


@Controller('board')
@UseGuards(AuthGuard)
export class BoardController {
    constructor( private readonly boardService: BoardService) {}

    @Get()
    async getAll(@Query('page') page = 1, @Query('limit') limit = 5): Promise<any>  {
        const boards =  await this.boardService.getAll(page, limit)

        return boards.data.map((board => ({ bid: board.bid, title: board.title })))
    }

    @Post()
    async create(@Body() board: BoardEntity, @Request() req): Promise<BoardEntity> {
        const user = req.user
        board.uid = user.uid

        return await this.boardService.create(board)

    }

    @Get(':id')
    async getOne(@Param('id') id: number): Promise<BoardEntity> {
        return this.boardService.getOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateData: UpdateBoardDto, @Request() req): Promise<BoardEntity> {
        const board = await this.boardService.getOne(id)
        if(board.uid !== req.user.uid) {
            throw new ForbiddenException('수정 권한이 없습니다.')
        }

        return this.boardService.update(id, updateData)
    }

    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req): Promise<void> {
        const board = await this.boardService.getOne(id)
        if(board.uid !== req.user.uid) {
            throw new ForbiddenException('삭제 권한이 없습니다.')
        }

        await this.boardService.deleteOne(id)
        return
    }

    


}


//  "title": "test1",
//	"content": "테스트게시물입니다."
