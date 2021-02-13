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
    this.load();
   }

  ngOnInit() {
  }

  load() {
    const func = localStorage.getItem('funcionario');
    if (func) {
      this.funcionario = JSON.parse(func);
      this.funcionario.sort((a, b) => (a.id < b.id) ? -1 : 1);
    } else {
      this.funcionario = [];
    }
  }

  remover(func: Funcionario) {
    const index = this.funcionario.indexOf(func);
    if (index !== -1) {
      this.funcionario.splice(index, 1);
    }
    this.save();
  }

  save() {
    const data = JSON.stringify(this.funcionario);
    localStorage.setItem('funcionario', data);
  }
}
