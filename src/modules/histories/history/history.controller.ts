import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto, UpdateHistoryDto } from './dto/history.dto';

@Controller('history')
export class HistoryController {
    constructor(private readonly historyService:HistoryService){}

    @Get()
    async findAllHistories(){
        return await this.historyService.findAll();
    }

    @Get(':id_user')
    async findOneHistory(@Param('id_user') id_user: string){
        return await this.historyService.findOne(id_user);
    }

    @Post()
    async createHistory(@Body() newHistoryDto: CreateHistoryDto){
        return await this.historyService.create(newHistoryDto);
    }

    @Patch(':id_history')
    async updateHistory(@Param('id_history') id_history: string, @Body() updateHistoryDto: UpdateHistoryDto){
        return await this.historyService.update(id_history, updateHistoryDto);
    }

    @Delete(':id_history')
    async removeHistory(@Param('id_history') id_history: string){
        return await this.historyService.remove(id_history);
    }
}
