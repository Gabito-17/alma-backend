import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sesion } from '../../sesion/entities/sesion.entity';

@Entity()
export class InformeSesion {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Sesion, (sesion) => sesion.informe)
  @JoinColumn()
  sesion: Sesion;

  @Column()
  @IsNotEmpty()
  @IsDate()
  fechaHora: Date;

  @Column()
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  tipoDescripcion: string;
}
