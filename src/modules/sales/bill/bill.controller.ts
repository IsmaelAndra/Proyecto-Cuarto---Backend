import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto, UpdateBillDto } from './dto/bill.dto';

@Controller('bill')
export class BillController {
    constructor(private readonly billService:BillService){}

    @Get()
    async findAllBills(){
        return await this.billService.findAll();
    }

    @Get(':id_bill')
    async findOneBill(@Param('id_bill') id_bill: string){
        return await this.billService.findOne(id_bill);
    }

    @Post()
    async createBill(@Body() newBillDto: CreateBillDto){
        return await this.billService.create(newBillDto);
    }

    @Patch(':id_bill')
    async updateBill(@Param('id_bill') id_bill: string, @Body() updateBillDto: UpdateBillDto){
        return await this.billService.update(id_bill, updateBillDto);
    }

    @Delete(':id_bill')
    async removeBill(@Param('id_bill') id_bill: string){
        return await this.billService.remove(id_bill);
    }
}
