import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductModel } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
  imports: [TypeOrmModule.forFeature([ProductModel])]
})
export class ProductsModule {}
