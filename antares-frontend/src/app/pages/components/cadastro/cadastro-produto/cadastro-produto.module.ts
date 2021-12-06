import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'

import { CadastroProdutoRoutingModule, } from './cadastro-produto-routing.module';


@NgModule({
  declarations: [
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutoRoutingModule,
    MatCardModule

  ],
  exports:[
    MatCardModule
  ]
})
export class CadastroProdutoModule { }
