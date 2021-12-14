import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroInsumoRoutingModule } from './cadastro-insumo-routing.module';
import { FormCadastroInsumoComponent } from './form-cadastro-insumo/form-cadastro-insumo.component';
import { ListaCadastroInsumoComponent } from './lista-cadastro-insumo/lista-cadastro-insumo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormCadastroInsumoComponent,
    ListaCadastroInsumoComponent
  ],
  imports: [
    CommonModule,
    CadastroInsumoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CadastroInsumoModule { }
