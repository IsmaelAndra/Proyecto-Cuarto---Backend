import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manage';
import { EventModel } from './entities/event.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';

@Injectable()
export class EventService {
    constructor(@InjectRepository(EventModel) private eventModel: Repository<EventModel>){}

    async findAll(): Promise<EventModel[]>{
        try {
            const historyAll: EventModel[] = await this.eventModel.find();
            if(historyAll.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen historias registradas',
                });
            }
            return historyAll;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id_history: string): Promise<EventModel>{
        try {
            return await this.eventModel.createQueryBuilder('histories').where({id_history}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createHistoryDto: CreateEventDto): Promise<EventModel>{
        try {
            const createHistory: EventModel = await this.eventModel.save(createHistoryDto);
            return createHistory;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_history: string, updateHistoryDto: UpdateEventDto): Promise<UpdateResult|undefined>{
        try {
            const updateHistory: UpdateResult = await this.eventModel.update(id_history, updateHistoryDto);
            if(updateHistory.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'La historia no se ha podido actualizar',
                });
            }
            return updateHistory;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message);
        }
    }

    async remove(id_history: string): Promise<DeleteResult|undefined> {
        try {
            const removeHistory: DeleteResult = await this.eventModel.delete(id_history);
            if(removeHistory.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'La historia no se ha podido eliminar',
                })
            }
            return removeHistory;
        } catch (e) {
            throw new ErrorManager.createSignatureError(e.message);
        }
    }
}
