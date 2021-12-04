import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroProdutoRoutingModule, } from './cadastro-produto-routing.module';


@NgModule({
  declarations: [
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutoRoutingModule,

  ],
  exports:[
    
  ]
})
export class CadastroProdutoModule { }
