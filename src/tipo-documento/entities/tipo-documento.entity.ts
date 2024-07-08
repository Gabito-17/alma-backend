import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TipoDocumento {

    @PrimaryColumn()
    idTipoDocumento: string;

    @Column()
    sigla: string;
    
    @Column()
    descripcion: string;
    

}
