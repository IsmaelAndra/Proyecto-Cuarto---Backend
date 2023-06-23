import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {

    async getAll() {
        return 'Han sido seleccionados todos los productos';
    }

    async getOne(id: number) {
        return 'Este producto a sido seleccionado';
    }

    async create(createProductDto: CreateProductDto) {
        return 'Este producto a sido añadido';
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        return 'El producto a sido actualizado';
    }

    async destroy(id: number) {
        return 'El producto a sido eliminado';
    }
}
