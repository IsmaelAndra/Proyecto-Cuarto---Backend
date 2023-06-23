import { Column, PrimaryGeneratedColumn } from "typeorm";

export class RolModel {
    @PrimaryGeneratedColumn()
    id_rol: number;

    @Column()
    name_rol: string;

    @Column()
    description: string;
}