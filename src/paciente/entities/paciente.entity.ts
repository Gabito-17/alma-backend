import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { EstadoCivil } from '../../estado-civil/entities/estado-civil.entity';
import { Persona } from '../../personas/entities/persona.entity';
import { Psicologo } from '../../psicologo/entities/psicologo.entity';
import { Sesion } from '../../sesion/entities/sesion.entity';

@Entity()
export class Paciente extends Persona {
  @Column()
  ocupacion: string;

  @ManyToOne(() => EstadoCivil)
  @JoinColumn({ name: 'id_estado_civil' })
  estadoCivil: EstadoCivil;

  @OneToMany(() => Sesion, (sesion) => sesion.paciente)
  sesiones: Sesion[];

  @ManyToOne(() => Psicologo)
  @JoinColumn({ name: 'id_psicologo' })
  psicologoAsignado: Psicologo;
}
