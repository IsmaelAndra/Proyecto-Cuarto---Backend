import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryModel } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
  imports: [TypeOrmModule.forFeature([CategoryModel])]
})
export class CategoryModule {}
