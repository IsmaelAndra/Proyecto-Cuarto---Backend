import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { ProductModel } from './entities/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manage';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(ProductModel) private productModel: Repository<ProductModel>){}

    async findAll(): Promise<ProductModel[]>{
        try {
            const productAll: ProductModel[] = await this.productModel.find();
            if(productAll.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen productos registrados',
                });
            }
            return productAll;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id_product: number): Promise<ProductModel>{
        try {
            return await this.productModel.createQueryBuilder('product').where({id_product}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createProductDto: CreateProductDto): Promise<ProductModel>{
        try {
            const createProduct: ProductModel = await this.productModel.save(createProductDto);
            return createProduct;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_product: number, updateProductDto: UpdateProductDto): Promise<UpdateResult|undefined>{
        try {
            const updateProduct: UpdateResult = await this.productModel.update(id_product, updateProductDto);
            if(updateProduct.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'El producto no se ha podido actualizar',
                });
            }
            return updateProduct;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message);
        }
    }

    async remove(id_product: number): Promise<DeleteResult|undefined> {
        try {
            const removeProduct: DeleteResult = await this.productModel.delete(id_product);
            if(removeProduct.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'EL producto no se ha podido eliminar',
                })
            }
            return removeProduct;
        } catch (e) {
            throw new ErrorManager.createSignatureError(e.message);
        }
    }
}
