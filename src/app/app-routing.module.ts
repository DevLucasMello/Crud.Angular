import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FramePageComponent } from './components/frame-page/frame-page.component';
import { DepartamentoComponent } from './pages/pages-departamento/departamento/departamento.component';
import { FuncionarioComponent } from './pages/pages-funcionario/funcionario/funcionario.component';
import { DepartamentoCadastrarComponent } from './pages/pages-departamento/departamentoCadastrar/departamentoCadastrar.component';
import { DepartamentoEditarComponent } from './pages/pages-departamento/departamentoEditar/departamentoEditar.component';
import { FuncionarioCadastrarComponent } from './pages/pages-funcionario/funcionarioCadastrar/funcionarioCadastrar.component';
import { FuncionarioEditarComponent } from './pages/pages-funcionario/funcionarioEditar/funcionarioEditar.component';



const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'departamentos', component: DepartamentoComponent },
      { path: 'funcionarios', component: FuncionarioComponent }, 
    ]
  },  
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
