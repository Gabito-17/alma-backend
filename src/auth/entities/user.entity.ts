import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ValidRoles } from '../interfaces';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  name: string;
  @Column('text')
  lastName: string;
  @Column('text', { unique: true })
  email: string;
  @Column('text', { select: false })
  password: string;
  @Column('bool', { default: true })
  isActive: boolean;
  @Column({
    type: 'enum',
    enum: ValidRoles,
    array: true,
    default: [ValidRoles.user],
  })
  roles: ValidRoles[];
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
