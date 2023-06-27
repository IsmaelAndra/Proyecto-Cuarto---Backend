import { BaseModel } from "src/modules/common";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductModel } from "../../products/entities/product.entity";

@Entity()
export class CategoryModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    id_category: string;

    @Column({
        type: 'varchar',
        name: 'name_category',
        nullable: false,
        comment: 'Nombre de la categoria',
    })
    name_category: string;

    @Column({
        type: 'varchar',
        name: 'description_category',
        nullable: true,
        comment: 'Descripcion de la categoria',
    })
    description_category: string;

    @OneToMany(() => ProductModel, (productsModel) => productsModel.categoryModel)
    productsModel: ProductModel[];
}