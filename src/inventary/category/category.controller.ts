import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}

    @Get()
    getAllCategory(){
        return this.categoryService.getAll();
    }

    @Get(':id')
    getOneCategory(@Param('id') id: number){
        return this.categoryService.getOne(id);
    }

    @Post()
    createCategory(@Body() newCategoryDto: CategoryDto){
        return this.categoryService.create(newCategoryDto);
    }

    @Patch(':id')
    updateCategory(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto){
        return this.categoryService.update(id, updateCategoryDto);
    }

    @Delete(':id')
    deleteCategory(@Param('id') id: number){
        return this.categoryService.destroy(id);
    }
}
