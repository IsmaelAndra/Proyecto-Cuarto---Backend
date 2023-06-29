import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryModel } from './entities/history.entity';

@Module({
  providers: [HistoryService],
  controllers: [HistoryController],
  exports: [HistoryService],
  imports: [TypeOrmModule.forFeature([HistoryModel])]
})
export class HistoryModule {}
