import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EstadoCivil {
  @PrimaryGeneratedColumn()
  idEstadoCivil: number;

  @Column()
  nombre: string;
  @Column()
  descripcion: string;
}
