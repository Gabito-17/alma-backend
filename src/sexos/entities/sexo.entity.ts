import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Sexo {

    @PrimaryColumn()
    idSexo: String;

    @Column()
    sexo: string;

}
