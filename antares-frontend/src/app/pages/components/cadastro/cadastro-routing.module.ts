import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroNavbarComponent } from './cadastro-navbar/cadastro-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroNavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
