import { Pais } from '../../paises/entities/pais.entity';
import { Sexo } from '../../sexos/entities/sexo.entity';
import { TipoDocumento } from '../../tipo-documento/entities/tipo-documento.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
} from 'typeorm';

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

  @OneToOne(() => Pais)
  @JoinColumn()
  pais: Pais;

  @OneToOne(() => TipoDocumento)
  @JoinColumn()
  tipoDocumento: TipoDocumento;

  @OneToOne(() => Sexo)
  @JoinColumn()
  sexo: Sexo;
}
