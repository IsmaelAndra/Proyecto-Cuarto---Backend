import { BaseModel } from "src/modules/common";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolModel } from "../../rol/entities/rol.entity";
import { BillModel } from "src/modules/sales/bill/entities/bill.entity";

@Entity()
export class UserModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column({
        type: 'varchar',
        name: 'photo_user',
        nullable: true,
        comment: 'Foto del usuario',
    })
    photo_user: string;

    @Column({
        type: 'varchar',
        name: 'name_user',
        nullable: false,
        comment: 'Nombre del usuario',
    })
    name_user: string;

    @Column({
        type: 'varchar',
        name: 'lastname_user',
        nullable: false,
        comment: 'Apellido del usuario',
    })
    lastname_user: string;

    @Column({
        type: 'varchar',
        name: 'mail_user',
        nullable: false,
        comment: 'Correo electronico del usuario',
    })
    mail_user: string;

    @Column({
        type: 'varchar',
        name: 'address_user',
        nullable: false,
        comment: 'Direccion del usuario',
    })
    address_user: string;

    @Column({
        type: 'varchar',
        name: 'phone_user',
        nullable: false,
        comment: 'Telefono del usuario',
    })
    phone_user: string;

    @Column({
        type: 'date',
        name: 'date_of_birth_user',
        nullable: false,
        comment: 'Fecha de nacimiento del usuario',
    })
    date_of_birth_user: Date;

    @Column({
        type: 'varchar',
        name: 'password_user',
        nullable: false,
        comment: 'Contraseña del usuario',
    })
    password_user: string;

    @Column({
        type: 'varchar',
        name: 'password_validation_user',
        nullable: false,
        comment: 'Validacion de la contraseña del usuario',
    })
    password_validation_user: string;

    @Column({
        type: 'boolean',
        name: 'status_user',
        nullable: false,
        comment: 'Estado del usuario',
    })
    status_user: boolean;

    @ManyToOne(() => RolModel, (rolModel) => rolModel.usersModel)
    rolModel: RolModel;

    @OneToMany(() => BillModel, (billsModel) => billsModel.userModel)
    billsModel: BillModel[];
}