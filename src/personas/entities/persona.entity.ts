import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Pais } from '../../paises/entities/pais.entity';
import { Sexo } from '../../sexos/entities/sexo.entity';
import { TipoDocumento } from '../../tipo-documento/entities/tipo-documento.entity';

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

  @DeleteDateColumn()
  deleteAt?: Date;

  @ManyToOne(() => Pais)
  @JoinColumn()
  pais: Pais;

  @ManyToOne(() => TipoDocumento)
  @JoinColumn()
  tipoDocumento: TipoDocumento;

  @ManyToOne(() => Sexo)
  @JoinColumn()
  sexo: Sexo;
}
