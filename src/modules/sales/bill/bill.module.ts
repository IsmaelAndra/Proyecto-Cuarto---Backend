import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillModel } from './entities/bill.entity';

@Module({
  providers: [BillService],
  controllers: [BillController],
  exports: [BillService],
  imports: [TypeOrmModule.forFeature([BillModel])]
})
export class BillModule {}
