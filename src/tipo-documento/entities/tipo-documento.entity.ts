import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoDocumento {
  @PrimaryGeneratedColumn()
  idTipoDocumento: number;

  @Column()
  sigla: string;

  @Column()
  descripcion: string;

  @Column()
  cantDigitos: number;
  @Column()
  admiteLetras: boolean;

  @DeleteDateColumn()
  deleteAt?: Date;
}
