import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ocupacion {
  @PrimaryGeneratedColumn()
  idOcupacion: number;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
}
