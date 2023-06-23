import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoryModel {
    @PrimaryGeneratedColumn()
    id_category: number;
    
    @Column()
    name_category: string;

    @Column()
    description: string;
}