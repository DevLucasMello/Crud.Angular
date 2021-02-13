import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/models/departamento.model';

@Component({
  selector: 'app-departamentoEditar',
  templateUrl: './departamentoEditar.component.html',
  styleUrls: ['./departamentoEditar.component.css']
})
export class DepartamentoEditarComponent implements OnInit {
  public form: FormGroup;
  
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
      
    }
    
    submit() {
      
      this.router.navigate(['/cadastrarDep']);
    }
    
  }
  