import { Departamento } from "./departamento.model";

export class Funcionario { 
  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public rg: string,
    public departamentoId: number,        
    public departamento: Departamento,
    ) { }   
  }