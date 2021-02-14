import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/models/departamento.model';

@Component({
  selector: 'app-departamentoEditar',
  templateUrl: './departamentoEditar.component.html',
  styleUrls: ['./departamentoEditar.component.css']
})
export class DepartamentoEditarComponent implements OnInit {
  public form: FormGroup;
  public id: number;
  public departamento: Departamento[] = [];
  public dpto: Departamento;
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
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
      
      const dep = localStorage.getItem('departamento');
      if (dep) {
        this.departamento = JSON.parse(dep);
        for(let d of this.departamento){
          if(this.id === d.id){
            this.form.controls['nome'].setValue(d.nome);
            this.form.controls['sigla'].setValue(d.sigla);            
            this.dpto = d;
          }
        }
      } else {
        this.dpto = null;
        this.form.patchValue(this.dpto);
      }
    }
    
    submit() {
      this.remover(this.dpto)
      const id = this.dpto.id;
      const nome = this.form.controls['nome'].value;
      const sigla = this.form.controls['sigla'].value; 
      this.departamento.push(new Departamento(id, nome, sigla));
      this.save();             
      this.router.navigate(['/']);    
    }
    
    save() {
      const data = JSON.stringify(this.departamento);
      localStorage.setItem('departamento', data);
    }
    
    remover(dep: Departamento) {
      const index = this.departamento.indexOf(dep);
      if (index !== -1) {
        this.departamento.splice(index, 1);
      }
    }
    
  }
  