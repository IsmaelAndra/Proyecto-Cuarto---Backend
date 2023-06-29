import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { HistoryModel } from './entities/history.entity';
import { ErrorManager } from 'src/utils/error.manage';
import { CreateHistoryDto, UpdateHistoryDto } from './dto/history.dto';

@Injectable()
export class HistoryService {
    
    constructor(@InjectRepository(HistoryModel) private historyModel: Repository<HistoryModel>){}

    async findAll(): Promise<HistoryModel[]>{
        try {
            const historyAll: HistoryModel[] = await this.historyModel.find();
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

    async findOne(id_history: string): Promise<HistoryModel>{
        try {
            return await this.historyModel.createQueryBuilder('history').where({id_history}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createHistoryDto: CreateHistoryDto ): Promise<HistoryModel>{
        try {
            const createHistory: HistoryModel = await this.historyModel.save(createHistoryDto);
            return createHistory;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_history: string, updateHistoryDto: UpdateHistoryDto): Promise<UpdateResult|undefined>{
        try {
            const updateHistory: UpdateResult = await this.historyModel.update(id_history, updateHistoryDto);
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
            const removeHistory: DeleteResult = await this.historyModel.delete(id_history);
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
