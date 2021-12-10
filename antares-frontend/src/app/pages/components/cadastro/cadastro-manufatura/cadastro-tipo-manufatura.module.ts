import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufaturaRoutingModule } from './cadastro-tipo-manufatura-routing.module';
import { FormTipoManufaturaComponent } from './tipo-manufatura/form-tipo-manufatura/form-tipo-manufatura.component';
import { ListaTipoManufaturaComponent } from './tipo-manufatura/lista-tipo-manufatura/lista-tipo-manufatura.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormTipoManufaturaComponent,
    ListaTipoManufaturaComponent
  ],
  imports: [
    CommonModule,
    ManufaturaRoutingModule,
    SharedModule,
    FormsModule,

  ]
})
export class ManufaturaModule { }
