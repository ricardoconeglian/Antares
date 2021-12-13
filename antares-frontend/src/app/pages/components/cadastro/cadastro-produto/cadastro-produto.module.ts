
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroProdutoRoutingModule, } from './cadastro-produto-routing.module';
import { CadastroProdutoComponent } from './formulario-produto/cadastro-produto.component';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListaProdutoComponent,
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutoRoutingModule,
    FormsModule,
    SharedModule



  ],
  exports:[


  ]
})
export class CadastroProdutoModule { }
