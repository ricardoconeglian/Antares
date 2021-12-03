import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import { CadastroProdutosComponent } from './components/produto/cadastro-produtos/cadastro-produtos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import {ListaTecnicaComponent} from './components/produto/lista-tecnica/lista-tecnica.component';
import {CadastroInsumoComponent} from './components/insumo/cadastro-insumo/cadastro-insumo.component';
import {EstoqueInsumoComponent} from './components/insumo/estoque-insumo/estoque-insumo.component';
import {UnidadeEngenhariaComponent} from './components/insumo/unidade-engenharia/unidade-engenharia.component';
import {ModoManufaturaComponent} from './components/manufatura/modo-manufatura/modo-manufatura.component';
import {TipoManufaturaComponent} from './components/manufatura/tipo-manufatura/tipo-manufatura.component';


// Rotas da tela de cadastros (Tentar refatorar isso depois)
const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
  },
  {
    path: "cadastros",
    loadChildren: () => import('./pages/components/cadastro/cadastro.module').then(m => m.CadastroModule)
  },

  {
    path: "produto/cadastro-produtos",
    component: CadastroProdutosComponent
  },

  {
    path: "produto/lista-tecnica",
    component: ListaTecnicaComponent
  },

  {
    path: "insumo/cadastro-insumo",
    component: CadastroInsumoComponent
  },

  {
    path: "insumo/estoque-insumo",
    component: EstoqueInsumoComponent
  },

  {
    path: "insumo/unidade-engenharia",
    component: UnidadeEngenhariaComponent
  },

  {
    path: "manufatura/modo-manufatura",
    component: ModoManufaturaComponent
  },

  {
    path: "manufatura/tipo-manufatura",
    component: TipoManufaturaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
