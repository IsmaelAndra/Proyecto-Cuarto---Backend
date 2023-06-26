import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [CategoryModule, ProductsModule]
})
export class VentasModule {}
