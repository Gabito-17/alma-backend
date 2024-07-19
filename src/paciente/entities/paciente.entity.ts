import { Ocupacion } from 'src/ocupacion/entities/ocupacion.entity';
import { Persona } from 'src/personas/entities/persona.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Paciente extends Persona {
  @ManyToOne(() => Ocupacion)
  @JoinColumn()
  ocupacion: Ocupacion;
}
