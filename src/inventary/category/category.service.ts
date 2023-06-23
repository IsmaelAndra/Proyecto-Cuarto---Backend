import { Injectable } from '@nestjs/common';
import { CategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    async getAll() {
        return 'Han sido seleccionados todos los productos';
    }

    async getOne(id: number) {
        return 'Este producto a sido seleccionado';
    }

    async create(createProductDto: CategoryDto) {
        return 'Este producto a sido añadido';
    }

    async update(id: number, updateProductDto: UpdateCategoryDto) {
        return 'El producto a sido actualizado';
    }

    async destroy(id: number) {
        return 'El producto a sido eliminado';
    }
}
