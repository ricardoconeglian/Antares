import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Rotas da tela de cadastros
const routes: Routes = [
  {
    //Rota para a chamada de cadastro de produtos. Depois ela entra para o cadastro-produto-routing module
    path: "produto",
    loadChildren: () => import('./pages/components/cadastro/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoModule)
  },

  {
    //Rota para a chamada de cadastro de tipo manufatura. Depois ela entra para o manufatura-routing module
    path: "manufatura",
    loadChildren: () => import('./pages/components/cadastro/cadastro-manufatura/cadastro-tipo-manufatura.module').then(m => m.ManufaturaModule)
  },

  {
    //Rota para a chamada de cadastro de modo manufatura. Depois ela entra para o manufatura-routing module
    path: "modo-manufatura",
    loadChildren: () => import('./pages/components/cadastro/modo-manufatura/modo-manufatura.module').then(m => m.ModoManufaturaModule)
  },

  {
    //Rota para a chamada de cadastro de unidade de engenharia. Depois ela entra para o unidade-engenharia-routing module
    path: "unidade-engenharia",
    loadChildren: () => import('./pages/components/cadastro/unidade-engenharia/unidade-engenharia.module').then(m => m.UnidadeEngenhariaModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

