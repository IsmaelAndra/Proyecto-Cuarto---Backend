import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InvoiceDetailService } from './invoice-detail.service';
import { CreateInvoiceDetailDto, UpdateInvoiceDetailDto } from './dto/invoice-detail.dto';

@Controller('invoice-detail')
export class InvoiceDetailController {
    constructor(private readonly invoiceDetailService:InvoiceDetailService){}

    @Get()
    async findAllInvoicesDetail(){
        return await this.invoiceDetailService.findAll();
    }

    @Get(':id_invoice_detail')
    async findOneInvoiceDetail(@Param('id_invoice_detail') id_invoice_detail: number){
        return await this.invoiceDetailService.findOne(id_invoice_detail);
    }

    @Post()
    async createInvoiceDetail(@Body() newInvoiceDetailDto: CreateInvoiceDetailDto){
        return await this.invoiceDetailService.create(newInvoiceDetailDto);
    }

    @Patch(':id_invoice_detail')
    async updateInvoiceDetail(@Param('id_invoice_detail') id_invoice_detail: number, @Body() updateInvoiceDetailDto: UpdateInvoiceDetailDto){
        return await this.invoiceDetailService.update(id_invoice_detail, updateInvoiceDetailDto);
    }

    @Delete(':id_invoice_detail')
    async removeInvoiceDetail(@Param('id_invoice_detail') id_invoice_detail: number){
        return await this.invoiceDetailService.remove(id_invoice_detail);
    }
}
