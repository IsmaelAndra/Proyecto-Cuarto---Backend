import { BaseModel } from "src/modules/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HistoryModel extends BaseModel {
    @PrimaryGeneratedColumn()
    id_history: string;

    @Column({
        type: 'varchar',
        name: 'title_history',
        nullable: false,
        comment: 'Titulo de la historia'
    })
    title_history: string;

    @Column({
        type: 'varchar',
        name: 'description_history',
        nullable: false,
        comment: 'Titulo de la historia'
    })
    description_history: string;
}