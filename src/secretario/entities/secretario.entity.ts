import { Entity } from 'typeorm';
import { Persona } from '../../personas/entities/persona.entity';

@Entity()
export class Secretario extends Persona {}
