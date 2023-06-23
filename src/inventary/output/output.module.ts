import { Module } from '@nestjs/common';
import { OutputController } from './output.controller';

@Module({
  controllers: [OutputController]
})
export class OutputModule {}
