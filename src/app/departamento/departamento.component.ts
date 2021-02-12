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
    this.departamento.push(new Departamento(1, "Tecnologia da Informação", "TI"));
    this.departamento.push(new Departamento(2, "Recursos Humandos", "RH"));
    this.departamento.push(new Departamento(3, "Segurança Patrimonial", "SP"));
  }

  ngOnInit() {
  }

}
