import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroNavbarComponent } from './cadastro-navbar/cadastro-navbar.component';


@NgModule({
  declarations: [
    CadastroNavbarComponent,
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,

  ],
  exports:[
   
  ]
})
export class CadastroModule { }
