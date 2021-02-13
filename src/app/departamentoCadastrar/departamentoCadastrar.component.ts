import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-departamentoCadastrar',
  templateUrl: './departamentoCadastrar.component.html',
  styleUrls: ['./departamentoCadastrar.component.css']
})
export class DepartamentoCadastrarComponent implements OnInit {
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
  