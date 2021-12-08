
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CadastroProdutoRoutingModule, } from './cadastro-produto-routing.module';
import { CadastroProdutoComponent } from './formulario-produto/cadastro-produto.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListaProdutoComponent,
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    SharedModule



  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,

  ]
})
export class CadastroProdutoModule { }
