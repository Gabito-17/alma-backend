import { IsString } from 'class-validator';
import { Psicologo } from 'src/psicologo/entities/psicologo.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  idEspecialidad: number;

  @Column()
  @IsString()
  nombre: string;
  @Column()
  @IsString()
  descripcion: string;
  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => Especialidad, (especialidad) => especialidad.psicologos)
  psicologos: Psicologo[];
}
