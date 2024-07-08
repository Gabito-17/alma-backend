import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Personas {
    @PrimaryColumn()
    numeroDoc: string;

    @Column()
    apellido: string;

    @Column()
    nombre: string;

    @Column()
    telefono: string;

    @Column()
    direccion: string;

    
    @Column('date')
    fechaDeNacimiento: Date;

    @Column()
    mail: string;
}

