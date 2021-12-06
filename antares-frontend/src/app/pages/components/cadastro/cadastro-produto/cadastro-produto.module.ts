import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';

import { CadastroProdutoRoutingModule, } from './cadastro-produto-routing.module';


@NgModule({
  declarations: [
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule

  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CadastroProdutoModule { }
