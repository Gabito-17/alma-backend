import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pais {
    @PrimaryColumn()
    idPais: string;

    @Column()
    nombre: string;
    
}
