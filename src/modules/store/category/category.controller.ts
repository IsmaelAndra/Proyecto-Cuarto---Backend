import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){}

    @Get()
    async findAllCategory(){
        return await this.categoryService.findAll();
    }

    @Get(':id_category')
    async findOneCategory(@Param('id_category') id_category: string){
        return await this.categoryService.findOne(id_category);
    }

    @Post()
    async createCategory(@Body() newCategoryDto: CreateCategoryDto){
        return await this.categoryService.create(newCategoryDto);
    }

    @Patch(':id_category')
    async updateCategory(@Param('id_category') id_category: string, @Body() updateCategoryDto: UpdateCategoryDto){
        return await this.categoryService.update(id_category, updateCategoryDto);
    }

    @Delete(':id_category')
    async removeCategory(@Param('id_category') id_category: string){
        return await this.categoryService.remove(id_category);
    }
}
