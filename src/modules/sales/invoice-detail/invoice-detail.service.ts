import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InvoiceDetailModel } from './entities/invoice-detail.entity';
import { ErrorManager } from 'src/utils/error.manage';
import { CreateInvoiceDetailDto, UpdateInvoiceDetailDto } from './dto/invoice-detail.dto';

@Injectable()
export class InvoiceDetailService {

    constructor(@InjectRepository(InvoiceDetailModel) private invoiceDetailModel: Repository<InvoiceDetailModel>){}

    async findAll(): Promise<InvoiceDetailModel[]>{
        try {
            const invoiceDetailModelAll: InvoiceDetailModel[] = await this.invoiceDetailModel.find();
            if(invoiceDetailModelAll.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen detalles de facturas registradas',
                });
            }
            return invoiceDetailModelAll;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id_invoice_detail: string): Promise<InvoiceDetailModel>{
        try {
            return await this.invoiceDetailModel.createQueryBuilder('invoice_detail').where({id_invoice_detail}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createInvoiceDetailDto: CreateInvoiceDetailDto): Promise<InvoiceDetailModel>{
        try {
            const createInvoiceDetail: InvoiceDetailModel = await this.invoiceDetailModel.save(createInvoiceDetailDto);
            return createInvoiceDetail;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_invoice_detail: string, updateInvoiceDetailDto: UpdateInvoiceDetailDto): Promise<UpdateResult|undefined>{
        try {
            const updateInvoiceDetail: UpdateResult = await this.invoiceDetailModel.update(id_invoice_detail, updateInvoiceDetailDto);
            if(updateInvoiceDetail.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'Los detalles de la factura no se ha podido actualizar',
                });
            }
            return updateInvoiceDetail;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message);
        }
    }

    async remove(id_invoice_detail: string): Promise<DeleteResult|undefined> {
        try {
            const removeInvoiceDetail: DeleteResult = await this.invoiceDetailModel.delete(id_invoice_detail);
            if(removeInvoiceDetail.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'Los detalles de la factura no se ha podido eliminar',
                })
            }
            return removeInvoiceDetail;
        } catch (e) {
            throw new ErrorManager.createSignatureError(e.message);
        }
    }
}
