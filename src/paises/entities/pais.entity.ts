import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pais {
    @PrimaryGeneratedColumn()
    idPais: string;

    @Column()
    nombre: string;

    @DeleteDateColumn()
    deleteAt?: Date;
    
}
