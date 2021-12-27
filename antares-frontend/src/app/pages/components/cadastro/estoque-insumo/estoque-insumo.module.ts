import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueInsumoRoutingModule } from './estoque-insumo-routing.module';
import { FormEstoqueInsumoComponent } from './form-estoque-insumo/form-estoque-insumo.component';
import { ListaEstoqueInsumoComponent } from './lista-estoque-insumo/lista-estoque-insumo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';


@NgModule({
  declarations: [
    FormEstoqueInsumoComponent,
    ListaEstoqueInsumoComponent,
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    EstoqueInsumoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class EstoqueInsumoModule { }
