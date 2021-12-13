import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUnidadeEngenhariaComponent } from './form-unidade-engenharia/form-unidade-engenharia.component';
import { ListaUnidadeEngenhariaComponent } from './lista-unidade-engenharia/lista-unidade-engenharia.component';

const routes: Routes = [
  {
    //Rota para a tela listagem de unidade engenharia
    path: "",
    component:ListaUnidadeEngenhariaComponent
  },

  {
    //Rota para a tela de cadastro de unidade engenharia
    path: 'cadastro-unidade-engenharia/new',
    component: FormUnidadeEngenhariaComponent
  },

  {
    // Rota para edição de unidade engenharia
    path: "cadastro-unidade-engenharia/:id/edit",
    component: FormUnidadeEngenhariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadeEngenhariaRoutingModule { }
