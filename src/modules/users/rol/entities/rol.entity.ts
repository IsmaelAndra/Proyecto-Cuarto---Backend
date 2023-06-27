import { BaseModel } from "src/modules/common";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "../../user/entities/user.entity";

@Entity()
export class RolModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    id_rol: string;

    @Column({
        type: 'varchar',
        name: 'name_rol',
        nullable: false,
        comment: 'Nombre del rol',
    })
    name_rol: string;

    @Column({
        type: 'varchar',
        name: 'description_rol',
        nullable: true,
        comment: 'Descripcion del rol',
    })
    description_rol: string;

    @OneToMany(() => UserModel, (usersModel) => usersModel.rolModel)
    usersModel: UserModel[];
}