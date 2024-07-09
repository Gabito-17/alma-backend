import { DeleteDateColumn, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sexo {

    @PrimaryGeneratedColumn()
    idSexo: String;

    @Column()
    sexo: string;

    @DeleteDateColumn()
    deleteAt?: Date;

}
