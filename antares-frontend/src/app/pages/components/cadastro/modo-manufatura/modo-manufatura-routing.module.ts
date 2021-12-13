import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModoManufaturaComponent } from './form-modo-manufatura/form-modo-manufatura.component';
import { ListaModoManufaturaComponent } from './lista-modo-manufatura/lista-modo-manufatura.component';

const routes: Routes = [
  {
    //Rota para a tela listagem de modo de manufatura
    path: "",
    component:ListaModoManufaturaComponent
  },

  {
    //Rota para a tela de cadastro de modo de manufatura
    path: 'cadastro-modo-manufatura/new',
    component: FormModoManufaturaComponent
  },

  {
    // Rota para edição de modo de manufatura
    path: "cadastro-modo-manufatura/:id/edit",
    component: FormModoManufaturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModoManufaturaRoutingModule { }
