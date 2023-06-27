import { BaseModel } from "src/modules/common";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BillModel } from "../../bill/entities/bill.entity";
import { ProductModel } from "src/modules/store/products/entities/product.entity";

@Entity()
export class InvoiceDetailModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    id_invoice_detail: string;

    @Column({
        type: 'varchar',
        name: 'description_invoice_detail',
        nullable: false,
        comment: 'Descripcion del detalle de la Factura',
    })
    description_invoice_detail: string;

    @Column({
        type: 'integer',
        name: 'quantity_invoice_detail',
        nullable: false,
        comment: 'Cantidad del detalle de la Factura',
    })
    quantity_invoice_detail: number;

    @Column({
        type: 'decimal',
        name: 'subtotal_invoice_detail',
        nullable: false,
        comment: 'Subtotal de la Factura',
    })
    subtotal_invoice_detail: number;

    @ManyToOne(() => BillModel, (billModel) => billModel.invoicesDetailModel)
    billModel: BillModel;

    @ManyToOne(() => ProductModel, (productModel) => productModel.invoicesDetailModel)
    productModel: ProductModel;
}