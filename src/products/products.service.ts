import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {

    getAll() {
        return 'Han sido seleccionados todos los productos';
    }

    getOne(id: number) {
        return 'Este producto a sido seleccionado';
    }

    create(createProductDto: CreateProductDto) {
        return 'Este producto a sido añadido';
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return 'El producto a sido actualizado';
    }

    destroy(id: number) {
        return 'El producto a sido eliminado';
    }
}
