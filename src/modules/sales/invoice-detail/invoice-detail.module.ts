import { Module } from '@nestjs/common';
import { InvoiceDetailService } from './invoice-detail.service';
import { InvoiceDetailController } from './invoice-detail.controller';
import { InvoiceDetailModel } from './entities/invoice-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [InvoiceDetailService],
  controllers: [InvoiceDetailController],
  exports: [InvoiceDetailService],
  imports: [TypeOrmModule.forFeature([InvoiceDetailModel])]
})
export class InvoiceDetailModule {}
