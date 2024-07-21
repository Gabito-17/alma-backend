import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
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

  @ManyToOne(() => Paciente, (paciente) => paciente.sesiones)
  @JoinColumn({ name: 'id_paciente' })
  paciente: Paciente;

  @ManyToOne(() => Psicologo, (psicologo) => psicologo.sesiones)
  @JoinColumn({ name: 'id_psicologo' })
  psicologo: Psicologo;
}
