import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Estado } from "./Estado";

@Entity("Municipio")
export class Municipio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  prefeito: string;

  @Column()
  populacao: number;

  @Column()
  estado: number;
}