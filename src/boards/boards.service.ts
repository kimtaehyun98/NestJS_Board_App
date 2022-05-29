import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from '@prisma/client';
import { BoardStatus } from './board-status.enum';
import { BoardRepository } from './boards.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {

  constructor (private boardRepository : BoardRepository) {}

  async createBoard(createBoardDto: CreateBoardDto) {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise <Board> {
    const found = await this.boardRepository.findOne(id);

    if(!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    }

    return found;
  }

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   const {title, description} = createBoardDto;

  //   const board: Board = {
  //     id: uuid(),
  //     title: title,
  //     description: description,
  //     status: BoardStatus.PUBLIC
  //   }

  //   this.boards.push(board);
  //   return board;
  // }

  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);

  //   if(!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }

  //   return found;
  // }

  // deleteBoard(id: string): void {
  //   // boards 배열을 돌면서 지우고자 하는 id를 가진 board 빼고 나머지를 다시 boards에 담는 코드
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }

}