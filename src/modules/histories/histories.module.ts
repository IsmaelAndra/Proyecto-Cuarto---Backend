import { Module } from '@nestjs/common';
import { HistoryController } from './history/history.controller';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [HistoryModule]
})
export class HistoriesModule {}
