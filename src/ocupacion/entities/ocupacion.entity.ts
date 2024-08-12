import { IsString } from 'class-validator';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Entity()
export class Ocupacion {
  @PrimaryGeneratedColumn()
  idOcupacion: number;

  @Column()
  @IsString()
  nombre: string;
  @Column()
  @IsString()
  descripcion: string;
  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => Paciente, (paciente) => paciente.ocupacion)
  pacientes: Paciente[];
}
