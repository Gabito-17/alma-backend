import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InformeSesion } from '../../informe-sesion/entities/informe-sesion.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';
import { Psicologo } from '../../psicologo/entities/psicologo.entity';

export enum EstadoSesion {
  Realizado = 'Realizado',
  Pendiente = 'Pendiente',
  Cancelado = 'Cancelado',
}

@Entity()
export class Sesion {
  @PrimaryGeneratedColumn()
  nroSesion: number;
  @Column({ type: 'timestamp' })
  fechaHora: Date;
  @DeleteDateColumn()
  deleteAt?: Date;

  @Column({
    type: 'enum',
    enum: EstadoSesion,
    default: EstadoSesion.Pendiente,
  })
  estado: EstadoSesion;

  @ManyToOne(() => Psicologo, (psicologo) => psicologo.sesiones)
  psicologo: Psicologo;

  @ManyToOne(() => Paciente, (paciente) => paciente.sesiones)
  paciente: Paciente;

  @OneToOne(() => InformeSesion, (informeSesion) => informeSesion.sesion)
  informe: InformeSesion;
}
