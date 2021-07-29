import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 255, name: 'user_name', nullable: false })
  public userName: string;

  @Column({ length: 255, nullable: false })
  public password: string;

  @Column({ length: 255, nullable: false })
  public email: string;
}
