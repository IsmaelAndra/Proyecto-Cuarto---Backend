import { Module } from '@nestjs/common';
import { InputService } from './input.service';
import { InputController } from './input.controller';

@Module({
  providers: [InputService],
  controllers: [InputController]
})
export class InputModule {}
