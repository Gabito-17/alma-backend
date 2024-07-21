import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';
import { TipoDocumento } from '../../tipo-documento/entities/tipo-documento.entity';

export enum Sexo {
  MASCULINO = 'Masculino',
  FEMENINO = 'Femenino',
  OTRO = 'Otro',
}

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  numeroDoc: string;

  @ManyToOne(() => TipoDocumento)
  @JoinColumn({ name: 'id_tipo_documento' })
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
    enum: Sexo,
    default: Sexo.OTRO,
  })
  sexo: Sexo;

  @Column('date')
  fechaNacimiento: Date;

  @Column()
  email: string;

  @DeleteDateColumn()
  deleteAt?: Date;
}
