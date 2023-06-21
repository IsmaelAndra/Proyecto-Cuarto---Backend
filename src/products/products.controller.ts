import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { ProductModel } from './models/product.entity';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get()
    getAllProducts(){
        return this.productsService.getAll();
    }

    @Get(':id')
    getOneProduct(@Param('id') id: number){
        return this.productsService.getOne(id);
    }

    @Post()
    createProduct(@Body() newProductDto: CreateProductDto){
        return this.productsService.create(newProductDto);
    }

    @Patch(':id')
    updateProduct(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto){
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number){
        return this.productsService.destroy(id);
    }
}

