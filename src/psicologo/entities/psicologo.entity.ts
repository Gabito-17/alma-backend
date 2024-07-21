import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Especialidad } from '../../especialidad/entities/especialidad.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';
import { Persona } from '../../personas/entities/persona.entity';
import { Sesion } from '../../sesion/entities/sesion.entity';

@Entity()
export class Psicologo extends Persona {
  @ManyToOne(() => Especialidad)
  @JoinColumn({ name: 'id_especialidad' })
  especialidad: Especialidad;

  @OneToMany(() => Sesion, (sesion) => sesion.psicologo)
  sesiones: Sesion[];

  @OneToMany(() => Paciente, (paciente) => paciente.psicologoAsignado)
  pacientes: Paciente[];
}
