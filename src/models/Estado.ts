import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Estado")
export class Estado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sigla: string;
}