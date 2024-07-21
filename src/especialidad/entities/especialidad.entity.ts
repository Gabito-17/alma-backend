import { IsString } from 'class-validator';
import {
  Column,
  DeleteDateColumn,
  Entity,
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
}
