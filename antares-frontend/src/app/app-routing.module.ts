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

  {
    //Rota para a chamada de cadastro de insumo. Depois ela entra para o cadastro-insumo-routing module
    path: "insumo",
    loadChildren: () => import('./pages/components/cadastro/cadastro-insumo/cadastro-insumo.module').then(m => m.CadastroInsumoModule)
  },

  {
    //Rota para a chamada de estoque de insumo. Depois ela entra para o estoque-insumo-routing module
    path: "insumo/estoque-insumo",
    loadChildren: () => import('./pages/components/cadastro/estoque-insumo/estoque-insumo.module').then(m => m.EstoqueInsumoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

