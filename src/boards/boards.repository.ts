import { Injectable } from "@nestjs/common";
import { Board, Prisma, PrismaClient } from '@prisma/client'
import { CreateBoardDto } from "./dto/create-board.dto";

const prisma = new PrismaClient()

@Injectable()
export class BoardRepository {

  async createBoard(createBoardDto: CreateBoardDto) {

    let board: Prisma.BoardCreateInput;
    
    board = {
      title: createBoardDto.title,
      description: createBoardDto.description,
      status: 'PUBLIC'
    }

    await prisma.board.create({ data: board });

    return board;
  }

  async findOne(id: number) : Promise <Board> {
    return await prisma.board.findUnique({ where : {id: id}})
  }
}
