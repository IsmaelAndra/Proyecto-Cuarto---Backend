import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService){}

    @Get()
    async findAllHistories(){
        return await this.eventService.findAll();
    }

    @Get(':id_history')
    async findOneEvent(@Param('id_history') id_history: string){
        return await this.eventService.findOne(id_history);
    }

    @Post()
    async createEvent(@Body() newHistoryDto: CreateEventDto){
        return await this.eventService.create(newHistoryDto);
    }

    @Patch(':id_history')
    async updateEvent(@Param('id_history') id_history: string, @Body() updateHistoryDto: UpdateEventDto){
        return await this.eventService.update(id_history, updateHistoryDto);
    }

    @Delete(':id_history')
    async removeEvent(@Param('id_history') id_history: string){
        return await this.eventService.remove(id_history);
    }
}
