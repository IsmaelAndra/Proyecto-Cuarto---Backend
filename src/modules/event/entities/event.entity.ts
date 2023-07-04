import { BaseModel } from "src/modules/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    id_history: string;

    @Column({
        type: 'varchar',
        name: 'title_history',
        nullable: false,
        comment: 'Titulo de la historia',
    })
    title_history: string;

    @Column({
        type: 'varchar',
        name: 'images_history',
        nullable: false,
        comment: 'Imagen de la historia',
    })
    images_history: string;

    @Column({
        type: 'varchar',
        name: 'description_history',
        nullable: false,
        comment: 'Descripcion de la historia',
    })
    description_history: string;
}