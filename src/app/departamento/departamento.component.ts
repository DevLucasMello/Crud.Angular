import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/models/departamento.model';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  public departamento: Departamento[] = [];

  constructor() { 
    this.load(); 
  }

  ngOnInit() {
  }

  load() {
    const dep = localStorage.getItem('departamento');
    if (dep) {
      this.departamento = JSON.parse(dep);
      this.departamento.sort((a, b) => (a.id < b.id) ? -1 : 1);
    } else {
      this.departamento = [];
    }
  }

  remover(dep: Departamento) {
    const index = this.departamento.indexOf(dep);
    if (index !== -1) {
      this.departamento.splice(index, 1);
    }
    this.save();
  }

  save() {
    const data = JSON.stringify(this.departamento);
    localStorage.setItem('departamento', data);
  }

}
