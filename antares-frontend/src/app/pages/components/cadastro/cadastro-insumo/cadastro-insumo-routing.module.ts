import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroInsumoComponent } from './form-cadastro-insumo/form-cadastro-insumo.component';
import { ListaCadastroInsumoComponent } from './lista-cadastro-insumo/lista-cadastro-insumo.component';

const routes: Routes = [
  {
    //Rota para a tela listagem de cadastro insumo
    path: "",
    component:ListaCadastroInsumoComponent
  },

  {
    //Rota para a tela de cadastro de cadastro insumo
    path: 'cadastro-insumo/new',
    component: FormCadastroInsumoComponent
  },

  {
    // Rota para edição de cadastro insumo
    path: "cadastro-insumo/:id/edit",
    component: FormCadastroInsumoComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroInsumoRoutingModule { }
