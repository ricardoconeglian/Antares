import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './views/home/home.component';
import { CadastroProdutoComponent } from './views/cadastro-produto/cadastro-produto.component';
import { CadastroProdutosComponent } from './components/produto/cadastro-produtos/cadastro-produtos.component';
import {MatButtonModule} from '@angular/material/button';
import { ListaTecnicaComponent } from './components/produto/lista-tecnica/lista-tecnica.component';
import { TipoManufaturaComponent } from './components/manufatura/tipo-manufatura/tipo-manufatura.component';
import { ModoManufaturaComponent } from './components/manufatura/modo-manufatura/modo-manufatura.component';
import { ExecucaoManufaturaComponent } from './components/manufatura/execucao-manufatura/execucao-manufatura.component';
import { CadastroInsumoComponent } from './components/insumo/cadastro-insumo/cadastro-insumo.component';
import { UnidadeEngenhariaComponent } from './components/insumo/unidade-engenharia/unidade-engenharia.component';
import { EstoqueInsumoComponent } from './components/insumo/estoque-insumo/estoque-insumo.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroProdutoComponent,
    CadastroProdutosComponent,
    ListaTecnicaComponent,
    TipoManufaturaComponent,
    ModoManufaturaComponent,
    ExecucaoManufaturaComponent,
    CadastroInsumoComponent,
    UnidadeEngenhariaComponent,
    EstoqueInsumoComponent,
    CadastroComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    CoreModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
