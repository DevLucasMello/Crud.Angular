import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DepartamentoCadastrarComponent } from './departamentoCadastrar/departamentoCadastrar.component';
import { FuncionarioCadastrarComponent } from './funcionarioCadastrar/funcionarioCadastrar.component';
import { DepartamentoEditarComponent } from './departamentoEditar/departamentoEditar.component';
import { FuncionarioEditarComponent } from './funcionarioEditar/funcionarioEditar.component';

@NgModule({
  declarations: [								
    AppComponent,
      DepartamentoComponent,
      FuncionarioComponent,
      DepartamentoCadastrarComponent,
      FuncionarioCadastrarComponent,
      DepartamentoEditarComponent,
      FuncionarioEditarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
