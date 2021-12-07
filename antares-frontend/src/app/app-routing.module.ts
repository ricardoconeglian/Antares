import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Rotas da tela de cadastros
const routes: Routes = [
  {
    //Rota para a chamada de cadastro de produtos. Depois ela entra papra o cadastro-produto-routing module
    path: "produto",
    loadChildren: () => import('./pages/components/cadastro/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

