import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  TableInheritance,
} from 'typeorm';
import { TipoDocumento } from '../../tipo-documento/entities/tipo-documento.entity';
import { sexo } from './sexo.enum';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Persona {
  @PrimaryColumn()
  numeroDoc: string;

  @ManyToOne(() => TipoDocumento)
  @JoinColumn()
  tipoDocumento: TipoDocumento;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column({
    type: 'enum',
    enum: sexo,
    default: sexo.OTRO,
  })
  sexo: sexo;

  @Column('date')
  fechaNacimiento: Date;

  @Column()
  email: string;

  @DeleteDateColumn()
  deleteAt?: Date;
}
