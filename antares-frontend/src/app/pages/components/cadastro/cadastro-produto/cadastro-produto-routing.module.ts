import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './formulario-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';



const routes: Routes = [
  {
    //Rota para a tela listagem de produtos
    path: "",
    component: ListaProdutoComponent
  },

  {
    //Rota para a tela de cadastro de produto
    path: 'cadastro-produto/new',
    component: CadastroProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroProdutoRoutingModule { }
