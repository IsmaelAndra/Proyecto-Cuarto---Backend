import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    async findAllProducts(){
        return await this.productsService.findAll();
    }

    @Get(':id_product')
    async findOneProduct(@Param('id_product') id_product: number){
        return await this.productsService.findOne(id_product);
    }

    @Post()
    async createProduct(@Body() newProductDto: CreateProductDto){
        return await this.productsService.create(newProductDto);
    }

    @Patch(':id_product')
    async updateProduct(@Param('id_product') id_product: number, @Body() updateProductDto: UpdateProductDto){
        return await this.productsService.update(id_product, updateProductDto);
    }

    @Delete(':id_product')
    async removeProduct(@Param('id_product') id_product: number){
        return await this.productsService.remove(id_product);
    }
}

