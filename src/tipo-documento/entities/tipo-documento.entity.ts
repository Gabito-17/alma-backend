import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoDocumento {

    @PrimaryGeneratedColumn()
    idTipoDocumento: string;

    @Column()
    sigla: string;
    
    @Column()
    descripcion: string;

    @DeleteDateColumn()
    deleteAt?: Date;
    

}
