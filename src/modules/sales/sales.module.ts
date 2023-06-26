import { Module } from '@nestjs/common';
import { BillModule } from './bill/bill.module';
import { InvoiceDetailModule } from './invoice-detail/invoice-detail.module';

@Module({
    imports: [BillModule, InvoiceDetailModule]
})
export class SalesModule {}
