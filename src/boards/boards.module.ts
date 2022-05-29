import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardRepository } from './boards.repository';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository]
})
export class BoardsModule {}
