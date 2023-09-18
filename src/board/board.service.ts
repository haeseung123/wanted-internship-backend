import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BoardEntity } from './entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';


@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntity)
        private boardRepository: Repository<BoardEntity>
    ) {}


    async create(board: CreateBoardDto): Promise<BoardEntity> {
        const newBoard = this.boardRepository.create(board)
        return await this.boardRepository.save(newBoard)
    }

    async getAll(page: number = 1, limit: number): Promise<any> {
        const skip = (page - 1) * limit

        const [boards, total] = await this.boardRepository.findAndCount({
            select: ['bid', 'title'],
            skip,
            take: limit
        })

        return {
            data: boards,
            total,
            page,
            limit
        }

    }

    async getOne(id: number): Promise<BoardEntity> {
        const bid = id

        try {
            return  await this.boardRepository.findOne({where: { bid }})
        } catch(e) {
            throw new NotFoundException('존재하지 않는 게시글입니다.')
        }

    }

    async update(id: number, updateData: UpdateBoardDto): Promise<BoardEntity> {
        await this.boardRepository.update(id, updateData)
        const updatedBoard = await this.getOne(id)
        return updatedBoard
    }

    async deleteOne(id: number): Promise<void> {
        await this.boardRepository.delete(id)
    }







}
