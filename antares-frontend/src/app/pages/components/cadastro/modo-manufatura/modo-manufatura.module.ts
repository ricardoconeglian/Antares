import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModoManufaturaRoutingModule } from './modo-manufatura-routing.module';
import { FormModoManufaturaComponent } from './form-modo-manufatura/form-modo-manufatura.component';
import { ListaModoManufaturaComponent } from './lista-modo-manufatura/lista-modo-manufatura.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormModoManufaturaComponent,
    ListaModoManufaturaComponent
  ],
  imports: [
    CommonModule,
    ModoManufaturaRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ModoManufaturaModule { }
