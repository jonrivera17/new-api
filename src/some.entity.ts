import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SomeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}