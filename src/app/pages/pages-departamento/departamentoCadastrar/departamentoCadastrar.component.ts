import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/models/departamento.model';

@Component({
  selector: 'app-departamentoCadastrar',
  templateUrl: './departamentoCadastrar.component.html',
  styleUrls: ['./departamentoCadastrar.component.css']
})
export class DepartamentoCadastrarComponent implements OnInit {
  public form: FormGroup;
  public departamento: Departamento[] = [];
  public titulo = 'Cadastrar - Departamento';
  
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
        sigla: ['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(5),
          Validators.required        
        ])]
      });
    }
    
    ngOnInit() {
      this.load();
    }

    load() {
      const dep = localStorage.getItem('departamento');
      if (dep) {
        this.departamento = JSON.parse(dep);        
      } else {
        this.departamento = [];
      }
    }
    
    submit() {
      const id = this.departamento.length + 1;
      const nome = this.form.controls['nome'].value;
      const sigla = this.form.controls['sigla'].value;        
      this.departamento.push(new Departamento(id, nome, sigla));
      this.save();
      this.clear();
      this.router.navigate(['/departamentos']);    
    }

    save() {
      const data = JSON.stringify(this.departamento);
      localStorage.setItem('departamento', data);
    }

    clear() {
      this.form.reset();
    }
    
  }
  