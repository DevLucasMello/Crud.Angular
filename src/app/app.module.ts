import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FramePageComponent } from './components/frame-page/frame-page.component';
import { DepartamentoComponent } from './pages/pages-departamento/departamento/departamento.component';
import { FuncionarioComponent } from './pages/pages-funcionario/funcionario/funcionario.component';
import { DepartamentoCadastrarComponent } from './pages/pages-departamento/departamentoCadastrar/departamentoCadastrar.component';
import { FuncionarioCadastrarComponent } from './pages/pages-funcionario/funcionarioCadastrar/funcionarioCadastrar.component';
import { DepartamentoEditarComponent } from './pages/pages-departamento/departamentoEditar/departamentoEditar.component';
import { FuncionarioEditarComponent } from './pages/pages-funcionario/funcionarioEditar/funcionarioEditar.component';

@NgModule({
  declarations: [												
    AppComponent,
      DepartamentoComponent,
      FuncionarioComponent,
      DepartamentoCadastrarComponent,
      FuncionarioCadastrarComponent,
      DepartamentoEditarComponent,
      FuncionarioEditarComponent,
      TituloComponent,
      NavBarComponent,
      DashboardComponent,
      FramePageComponent
   ],
  imports: [
    BrowserModule,    
    AppRoutingModule,    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(), 
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
