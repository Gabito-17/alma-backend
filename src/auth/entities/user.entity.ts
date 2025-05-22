import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  name: string;
  @Column('text')
  lastName: string;
  @Column('date')
  birthDate: string;
  @Column('text', { unique: true })
  email: string;
  @Column('text', { select: false })
  password: string;

  @Column('bool', { default: true })
  isActive: boolean;
  @Column('text', { array: true, default: ['paciente'] })
  roles: string[];
  @DeleteDateColumn()
  deleteAt?: Date;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
