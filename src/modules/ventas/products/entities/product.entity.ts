import { BaseModel } from "src/modules/common";
import { Binary, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryModel } from "../../category/entities/category.entity";
import { InvoiceDetailModel } from "src/modules/sales/invoice-detail/entities/invoice-detail.entity";

@Entity()
export class ProductModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    id_product: number;

    @Column({
        type: 'varchar',
        name: 'name_product',
        nullable: false,
        comment: 'Nombre del producto',
    })
    name_product: string;

    @Column({
        type: 'decimal',
        name: 'price_product',
        nullable: false,
        comment: 'Precio del producto',
    })
    price_product: number;

    @Column({
        type: 'varchar',
        name: 'description_product',
        nullable: false,
        comment: 'Descripcion del producto',
    })
    description_product: string;

    @Column({
        type: 'varchar',
        name: 'detailed_description_product',
        nullable: false,
        comment: 'Descripcion detallada del producto',
    })
    detailed_description_product: string;

    @Column({
        type: 'varchar',
        name: 'images_product',
        nullable: false,
        comment: 'Imagen del producto',
    })  
    images_product: String;

    @Column({
        type: 'boolean',
        name: 'status_product',
        nullable: false,
        comment: 'Estado del producto',
    })  
    status_product: boolean;

    @Column({
        type: 'integer',
        name: 'stock_product',
        nullable: false,
        comment: 'Cantidad del producto',
    })
    stock_product: number;

    @Column({
        type: 'integer',
        name: 'category',
        nullable: false,
        comment: 'Categoria del producto',
    })
    category: number;

    @ManyToOne(() => CategoryModel, (categoryModel) => categoryModel.productsModel)
    categoryModel: CategoryModel;

    @OneToMany(() => InvoiceDetailModel, (invoicesDetailModel) => invoicesDetailModel.productModel)
    invoicesDetailModel: InvoiceDetailModel[];
}