import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Rotas da tela de cadastros (Tentar refatorar isso depois)
const routes: Routes = [
  {
    path: "produto",
    loadChildren: () => import('./pages/components/cadastro/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
