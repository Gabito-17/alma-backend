import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { EstadoCivil } from '../../estado-civil/entities/estado-civil.entity';
import { Ocupacion } from '../../ocupacion/entities/ocupacion.entity';
import { Persona } from '../../personas/entities/persona.entity';
import { Psicologo } from '../../psicologo/entities/psicologo.entity';
import { Sesion } from '../../sesion/entities/sesion.entity';

@Entity()
export class Paciente extends Persona {
  @ManyToOne(() => EstadoCivil, (estadoCivil) => estadoCivil.pacientes)
  estadoCivil: EstadoCivil;

  @OneToMany(() => Sesion, (sesion) => sesion.paciente)
  sesiones: Sesion[];

  @ManyToOne(() => Psicologo, (psicologo) => psicologo.pacientes)
  psicologoAsignado: Psicologo;
  @ManyToOne(() => Ocupacion, (ocupacion) => ocupacion.pacientes)
  ocupacion: Ocupacion;
}
