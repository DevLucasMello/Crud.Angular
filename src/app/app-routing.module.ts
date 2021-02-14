import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartamentoComponent } from './departamento/departamento.component';
import { DepartamentoCadastrarComponent } from './departamentoCadastrar/departamentoCadastrar.component';
import { DepartamentoEditarComponent } from './departamentoEditar/departamentoEditar.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionarioCadastrarComponent } from './funcionarioCadastrar/funcionarioCadastrar.component';
import { FuncionarioEditarComponent } from './funcionarioEditar/funcionarioEditar.component';


const routes: Routes = [
  { path: '', component: DepartamentoComponent },
  { path: 'funcionarios', component: FuncionarioComponent }, 
  { path: 'cadastrarDep', component: DepartamentoCadastrarComponent },
  { path: 'editarDep/:id', component: DepartamentoEditarComponent }, 
  { path: 'cadastrarFunc', component: FuncionarioCadastrarComponent },
  { path: 'editarFunc/:id', component: FuncionarioEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
