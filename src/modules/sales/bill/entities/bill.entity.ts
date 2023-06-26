import { BaseModel } from "src/modules/common";
import { UserModel } from "src/modules/users/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceDetailModel } from "../../invoice-detail/entities/invoice-detail.entity";

@Entity()
export class BillModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    id_bill: number;

    @Column({
        type: 'date',
        name: 'date_bill',
        nullable: false,
        comment: 'Fecha de la Factura',
    })
    date_bill: Date;

    @Column({
        type: 'varchar',
        name: 'payment_method_bill',
        nullable: false,
        comment: 'Metodo de pago de la Factura',
    })
    payment_method_bill: string;

    @Column({
        type: 'decimal',
        name: 'subtotal_bill',
        nullable: false,
        comment: 'Subtotal de la Factura',
    })
    subtotal_bill: number;

    @Column({
        type: 'decimal',
        name: 'iva_bill',
        nullable: false,
        comment: 'Iva de la Factura',
    })
    iva_bill: number;

    @Column({
        type: 'decimal',
        name: 'total_bill',
        nullable: false,
        comment: 'Total de la Factura',
    })
    total_bill: number;

    @OneToMany(() => InvoiceDetailModel, (invoicesDetailModel) => invoicesDetailModel.billModel)
    invoicesDetailModel: InvoiceDetailModel[];

    @ManyToOne(() => UserModel, (userModel) => userModel.billsModel)
    userModel: UserModel;
}