import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductModel {
    @PrimaryGeneratedColumn()
    id_product: number;

    @Column()
    name_product: string;
    
    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    detailedDescription: string;

    @Column()
    images: string;

    @Column()
    status: boolean;

    @Column()
    stock: number;

    @Column()
    category: number;
}