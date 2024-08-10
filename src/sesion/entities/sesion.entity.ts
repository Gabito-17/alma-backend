import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity';
import { Psicologo } from '../../psicologo/entities/psicologo.entity';

export enum EstadoSesion {
  REALIZADO = 'Realizado',
  PENDIENTE = 'Pendiente',
  CANCELADO = 'Cancelado',
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
    default: EstadoSesion.PENDIENTE,
  })
  estado: EstadoSesion;

  @ManyToOne(() => Psicologo, (psicologo) => psicologo.sesiones)
  psicologo: Psicologo;

  @ManyToOne(() => Paciente, (paciente) => paciente.sesiones)
  paciente: Paciente;
}
