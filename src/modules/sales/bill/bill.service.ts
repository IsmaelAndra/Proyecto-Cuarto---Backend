import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BillModel } from './entities/bill.entity';
import { ErrorManager } from 'src/utils/error.manage';
import { CreateBillDto, UpdateBillDto } from './dto/bill.dto';

@Injectable()
export class BillService {

    constructor(@InjectRepository(BillModel) private billModel: Repository<BillModel>){}

    async findAll(): Promise<BillModel[]>{
        try {
            const billAll: BillModel[] = await this.billModel.find();
            if(billAll.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen facturas registradas',
                });
            }
            return billAll;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id_bill: number): Promise<BillModel>{
        try {
            return await this.billModel.createQueryBuilder('bill').where({id_bill}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createBillDto: CreateBillDto): Promise<BillModel>{
        try {
            const createBill: BillModel = await this.billModel.save(createBillDto);
            return createBill;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_bill: number, updateBillDto: UpdateBillDto): Promise<UpdateResult|undefined>{
        try {
            const updateBill: UpdateResult = await this.billModel.update(id_bill, updateBillDto);
            if(updateBill.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'La factura no se ha podido actualizar',
                });
            }
            return updateBill;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message);
        }
    }

    async remove(id_bill: number): Promise<DeleteResult|undefined> {
        try {
            const removeBill: DeleteResult = await this.billModel.delete(id_bill);
            if(removeBill.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'La factura no se ha podido eliminar',
                })
            }
            return removeBill;
        } catch (e) {
            throw new ErrorManager.createSignatureError(e.message);
        }
    }
}
