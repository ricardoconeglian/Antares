
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ApiTipoManufaturaService } from 'src/app/shared/services/api-tipo-manufatura.service';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-form-tipo-manufatura',
  templateUrl: './form-tipo-manufatura.component.html',
  styleUrls: ['./form-tipo-manufatura.component.css']
})
export class FormTipoManufaturaComponent implements OnInit {

  //define se está crindo ou editando um tipo manufatura
  currentAction: string | undefined;

  //Recebe o valor de titulo da pagina (criar ou editar o tipo manufatura)
  tituloPagina: string | undefined;

  protected route: ActivatedRoute;


  tipoManufatura = { tipo_manufatura: ''}
  tipoManufaturas = [
    { tipo_manufatura: ''},
  ]



  constructor(
    protected router: Router,
    protected api: ApiTipoManufaturaService,
    protected injector: Injector,
    protected messagesService: MessagesService,


    ) {
    this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota

   }

  ngOnInit(): void {
    this.setCurrentAction() // Roda função ao inicializar a tela
    //Pega o numero do id vindo da URL e passa como parametro no função carregaTipoManufatura()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.carregaTipoManufatura(id)
      
    })
  }

  ngAfterContentChecked(): void {
    this.setTituloPagina(); // Monitora constantemente se houve alteração cadastrar/editar
  }

  /**-------------------------------------------------------------------------------------
   * Criar e alterar cadastro de tipo manufatura
    --------------------------------------------------------------------------------------
  */

  //Salva o novo cadastro ou altera o cadastro no banco de dados
  save(){
    // se for um novo cadastro de tipo manufatura usa essa instrução
    if(this.currentAction == 'new'){
      this.api.saveNewManuType(this.tipoManufatura).subscribe(
        data => {
          this.tipoManufaturas.push(data);
          this.messagesService.showMessageSuccess("Tipo de Manufatura criado com sucesso!")
          //retorna para a tela lista tipo Manufatura
          this.navegarParaListaTipoManufatura()
        },
        error => {
            console.log("Aconteceu um erro", error);
        }
      );
    }
    //se for uma alteração de cadastro usa essa instrução
    else{
      this.api.updateManuType(this.tipoManufatura).subscribe(
        data => {
          this.tipoManufatura = data;
          this.messagesService.showMessageSuccess("Tipo de Manufatura alterado com sucesso!")
          //retorna para a tela lista tipo manufatura
          this.navegarParaListaTipoManufatura()
        },
        error => {
          console.log("Aconteceu um erro", error);
      }
      )
    }

  };

  //Retorna para a tela lista tipo manufatura
  navegarParaListaTipoManufatura(){
    this.router.navigate(['/manufatura/',])
  }

  //Carrega os dados do tipo manufatura por id para edição
  carregaTipoManufatura(id:any) {
    if(this.currentAction == 'edit')
      this.api.getManuType(id).subscribe(
        data => {
          this.tipoManufatura = data;
        },
        error => {
          console.log("Aconteceu um erro", error);
        }
      )
  }



  /* --------------------------------------------------------
        Metodos privados
    ---------------------------------------------------------
  */
  //Recebe do browser a URL para identificar se está sendo feito a criação ou edição
  protected setCurrentAction(){

    if(this.route.snapshot.url[2].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  //Verifica se está sendo criado um novo produto ou editando
  protected setTituloPagina(){
    if(this.currentAction == 'new')
      this.tituloPagina = this.criarTituloPagina();
    else{
      this.tituloPagina = this.editarTituloPagina()
    }
  }

  protected criarTituloPagina(): string{
    return "Cadastro de Produto" // Escreve a string no titulo quando é cadastro
  }

  protected editarTituloPagina(): string{
    const nomeTipoManufatura = this.tipoManufatura || "";
    return "Editar Tipo Manufatura: " + nomeTipoManufatura // Escreve a string no titulo quando é edição
  }

}

