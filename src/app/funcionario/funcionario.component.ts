import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/models/departamento.model';
import { Funcionario } from 'src/models/funcionario.model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  public funcionario: Funcionario[] = [];

  constructor() {
    this.funcionario.push(new Funcionario(1, "Lucas", "https://", "11.111.111-11", 1, new Departamento(1, "Tecnologia da Informação", "TI")));
    this.funcionario.push(new Funcionario(1, "Jessica", "https://", "11.111.111-11", 1, new Departamento(2, "Recursos Humandos", "RH")));
    this.funcionario.push(new Funcionario(1, "Santos", "https://", "11.111.111-11", 1, new Departamento(3, "Segurança Patrimonial", "SP")));
   }

  ngOnInit() {
  }

}
