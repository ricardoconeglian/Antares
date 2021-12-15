import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEstoqueInsumoComponent } from './form-estoque-insumo/form-estoque-insumo.component';
import { ListaEstoqueInsumoComponent } from './lista-estoque-insumo/lista-estoque-insumo.component';

const routes: Routes = [
  {
    //Rota para a tela listagem de estoque insumo
    path: "",
    component:ListaEstoqueInsumoComponent
  },

  {
    //Rota para a tela de cadastro de estoque insumo
    path: 'new',
    component: FormEstoqueInsumoComponent
  },

  {
    // Rota para edição de estoque insumo
    path: ":id/edit",
    component: FormEstoqueInsumoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueInsumoRoutingModule { }
