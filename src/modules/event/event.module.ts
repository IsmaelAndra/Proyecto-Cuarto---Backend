import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModel } from './entities/event.entity';

@Module({
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService],
  imports: [TypeOrmModule.forFeature([EventModel])]
})
export class EventModule {}
