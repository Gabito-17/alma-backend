import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ValidRoles } from '../interfaces';
import { Optional } from '@nestjs/common';

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
  @Column('text')
  authProvider: string;
  @Column('text', {nullable: true})
  image: string;
  @Column('text')
  @Column({ nullable: true, unique: true })
  googleId: string;
  @Column({
    type: 'enum',
    enum: ValidRoles,
    array: true,
    default: [ValidRoles.user],
  })
  roles: ValidRoles[];
  @DeleteDateColumn()
  deleteAt?: Date;

  @CreateDateColumn()
  creadoEn: Date;
  
  @UpdateDateColumn()
  actualizadoEn: Date;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
