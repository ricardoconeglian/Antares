import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTipoManufaturaComponent } from './tipo-manufatura/form-tipo-manufatura/form-tipo-manufatura.component';
import { ListaTipoManufaturaComponent } from './tipo-manufatura/lista-tipo-manufatura/lista-tipo-manufatura.component';

const routes: Routes = [
  {
    //Rota para a tela listagem de tipo de manufatura
    path: "",
    component:ListaTipoManufaturaComponent
  },

  {
    //Rota para a tela de cadastro de tipo de manufatura
    path: 'tipo-manufatura/cadastro-tipo-manufatura/new',
    component: FormTipoManufaturaComponent
  },

  {
    // Rota para edição de tipo de manufatura
    path: "tipo-manufatura/cadastro-tipo-manufatura/:id/edit",
    component: FormTipoManufaturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufaturaRoutingModule { }
