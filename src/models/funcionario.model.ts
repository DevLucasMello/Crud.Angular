import { Departamento } from "./departamento.model";

export class Funcionario {
    subscribe(arg0: (data: Funcionario) => void, arg1: (err: any) => void) {
      throw new Error('Method not implemented.');
    }

    constructor(
        public id: number,
        public nome: string,
        public foto: string,
        public rg: string,        
        public departamento: Departamento,
    ) { }
}