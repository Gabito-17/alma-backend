import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Entity()
export class EstadoCivil {
  @PrimaryGeneratedColumn()
  idEstadoCivil: number;

  @Column()
  nombre: string;
  @Column()
  descripcion: string;

  @OneToMany(() => Paciente, (paciente) => paciente.estadoCivil)
  pacientes: Paciente[];

  @DeleteDateColumn()
  deleteAt?: Date;
}
