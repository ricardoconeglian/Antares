import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadeEngenhariaRoutingModule } from './unidade-engenharia-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormUnidadeEngenhariaComponent } from './form-unidade-engenharia/form-unidade-engenharia.component';
import { ListaUnidadeEngenhariaComponent } from './lista-unidade-engenharia/lista-unidade-engenharia.component';


@NgModule({
  declarations: [
    FormUnidadeEngenhariaComponent,
    ListaUnidadeEngenhariaComponent
  ],
  imports: [
    CommonModule,
    UnidadeEngenhariaRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UnidadeEngenhariaModule { }
