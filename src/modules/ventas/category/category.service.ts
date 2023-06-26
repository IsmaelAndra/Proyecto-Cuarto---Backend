import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { CategoryModel } from './entities/category.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manage';

@Injectable()
export class CategoryService {

    constructor(@InjectRepository(CategoryModel) private categoryModel: Repository<CategoryModel>){}

    async findAll(): Promise<CategoryModel[]>{
        try {
            const categoryAll: CategoryModel[] = await this.categoryModel.find();
            if(categoryAll.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen categorias registradas',
                });
            }
            return categoryAll;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id_category: number): Promise<CategoryModel>{
        try {
            return await this.categoryModel.createQueryBuilder('category').where({id_category}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createCategoryDto: CreateCategoryDto): Promise<CategoryModel>{
        try {
            const createCategory: CategoryModel = await this.categoryModel.save(createCategoryDto);
            return createCategory;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_category: number, updateCategoryDto: UpdateCategoryDto): Promise<UpdateResult|undefined>{
        try {
            const updateCategory: UpdateResult = await this.categoryModel.update(id_category, updateCategoryDto);
            if(updateCategory.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'La categoria no se ha podido actualizar',
                });
            }
            return updateCategory;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message);
        }
    }

    async remove(id_category: number): Promise<DeleteResult|undefined> {
        try {
            const removeCategory: DeleteResult = await this.categoryModel.delete(id_category);
            if(removeCategory.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'La categoria no se ha podido eliminar',
                })
            }
            return removeCategory;
        } catch (e) {
            throw new ErrorManager.createSignatureError(e.message);
        }
    }
}
