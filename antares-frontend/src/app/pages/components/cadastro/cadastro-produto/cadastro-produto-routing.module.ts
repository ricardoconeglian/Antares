import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './formulario-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';



const routes: Routes = [
  {
    path: "",
    component: ListaProdutoComponent
  },

  {
    path: 'cadastro-produto',
    component: CadastroProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroProdutoRoutingModule { }
