import { formatCurrency } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Departamento } from 'src/models/departamento.model';
import { Funcionario } from 'src/models/funcionario.model';

@Component({
  selector: 'app-funcionarioEditar',
  templateUrl: './funcionarioEditar.component.html',
  styleUrls: ['./funcionarioEditar.component.css']
})
export class FuncionarioEditarComponent implements OnInit {
  public form: FormGroup;  
  public id: number;
  public departamento: Departamento[] = [];
  public dpto: string[] = [];
  public funcionario: Funcionario[] = [];
  public funcio: Funcionario;  
  private sub: any;
  
  constructor(
    private router: Router,    
    private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute
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
      
      const dep = localStorage.getItem('departamento');
      if (dep) {
        this.departamento = JSON.parse(dep);           
      } else {
        this.departamento = [];
      }
      
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
      const func = localStorage.getItem('funcionario');
      if (func) {
        this.funcionario = JSON.parse(func);
        for(let f of this.funcionario){
          if(this.id === f.id){                      
            this.form.controls['nome'].setValue(f.nome);
            this.form.controls['foto'].setValue(f.foto);
            this.form.controls['rg'].setValue(f.rg);            
            this.form.controls['departamento'].setValue(f.departamento);
            this.funcio = f;  
          }
        }
      } else {
        this.funcio = null;
        this.form.patchValue(this.funcio);
      }
    }
    
    mostrar(){
      console.log(this.dpto);    
    }
    
    submit() {
      this.remover(this.funcio)
      const id = this.funcio.id;
      const nome = this.form.controls['nome'].value;
      const foto = this.form.controls['foto'].value;
      const rg = this.form.controls['rg'].value;
      const departamento = this.form.controls['departamento'].value;    
      this.funcionario.push(new Funcionario(id, nome, foto, rg, departamento));
      this.save();             
      this.router.navigate(['/funcionarios']);    
    }
    
    save() {
      const data = JSON.stringify(this.funcionario);
      localStorage.setItem('funcionario', data);
    }
    
    remover(func: Funcionario) {
      const index = this.funcionario.indexOf(func);
      if (index !== -1) {
        this.funcionario.splice(index, 1);
      }
    }
  }
  