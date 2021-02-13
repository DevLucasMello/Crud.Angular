import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/models/funcionario.model';

@Component({
  selector: 'app-funcionarioCadastrar',
  templateUrl: './funcionarioCadastrar.component.html',
  styleUrls: ['./funcionarioCadastrar.component.css']
})
export class FuncionarioCadastrarComponent implements OnInit {
  public form: FormGroup;
  public departamentos = ["Tecnologia", "Recursos", "Segurança"];
  public funcionario: Funcionario[] = [];

  constructor(
    private router: Router,    
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { 
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      foto: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.required        
      ])],
      rg: ['', Validators.compose([
        Validators.minLength(9),
        Validators.maxLength(15),
        Validators.required        
      ])],
      departamento: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required        
      ])]
    });
  }

  ngOnInit() {
    this.load();
  }

  load() {
    const func = localStorage.getItem('funcionario');
    if (func) {
      this.funcionario = JSON.parse(func);
    } else {
      this.funcionario = [];
    }
  }

  submit() {
    const id = this.funcionario.length + 1;
    const nome = this.form.controls['nome'].value;
    const foto = this.form.controls['foto'].value;
    const rg = this.form.controls['rg'].value;
    const departamento = this.form.controls['departamento'].value;    
    this.funcionario.push(new Funcionario(id, nome, foto, rg, departamento));
    this.save();
    this.clear();
    this.router.navigate(['/funcionarios']);    
  }

  save() {
    const data = JSON.stringify(this.funcionario);
    localStorage.setItem('funcionario', data);
  }

  clear() {
    this.form.reset();
  }

}
