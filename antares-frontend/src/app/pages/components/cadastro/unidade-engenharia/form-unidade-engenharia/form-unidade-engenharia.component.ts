import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ApiUnidadeEngenhariaService } from 'src/app/shared/services/api-unidade-engenharia.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { UnidadeEngenharia } from '../shared/unidade-engenharia.model';

@Component({
  selector: 'app-form-unidade-engenharia',
  templateUrl: './form-unidade-engenharia.component.html',
  styleUrls: ['./form-unidade-engenharia.component.css']
})
export class FormUnidadeEngenhariaComponent implements OnInit {

  //define se está crindo ou editando uma unidade de engenharia
  currentAction: string | undefined;

  //Recebe o valor de titulo da pagina (criar ou editar a unidade de engenharia)
  tituloPagina: string | undefined;

  protected route: ActivatedRoute;

//Array que recebe os valores de input dos dados para envio ao banco de dados
 unidadeEngenharia: UnidadeEngenharia | any
 unidadeEngenharias: UnidadeEngenharia[] = []

//Array de erros recebidos da API
errorMessages = {
  descricao: '',
  unidade: ''
}

  constructor(
    protected router: Router,
    protected api: ApiUnidadeEngenhariaService,
    protected injector: Injector,
    protected messagesService: MessagesService,


    ) {
    this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
    this.unidadeEngenharia = new UnidadeEngenharia();
   }

  ngOnInit(): void {
    this.setCurrentAction() // Roda função ao inicializar a tela
    //Pega o numero do id vindo da URL e passa como parametro no função carregaUnidadeEngenharia()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.carregaUnidadeEngenharia(id)

    })
  }

  ngAfterContentChecked(): void {
    this.setTituloPagina(); // Monitora constantemente se houve alteração cadastrar/editar
  }

  /**-------------------------------------------------------------------------------------
   * Criar e alterar cadastro de unidade de engenharia
    --------------------------------------------------------------------------------------
  */

  //Salva o novo cadastro ou altera o cadastro no banco de dados
  save(){
    // se for um novo cadastro de unidade de engenharia usa essa instrução
    if(this.currentAction == 'new'){
      this.api.saveNewUniEng(this.unidadeEngenharia).subscribe(
        data => {
          this.unidadeEngenharias.push(data);
          this.messagesService.showMessageSuccess("Unidade de engenharia criado com sucesso!")
          //retorna para a tela lista unidade de engenharia
          this.navegarParaListaUnidadeEngenharia()
        },
        error => {
            //Envia array de erros
            this.errorMessages = error.error
        }
      );
    }
    //se for uma alteração de cadastro usa essa instrução
    else{
      this.api.updateUniEng(this.unidadeEngenharia).subscribe(
        data => {
          this.unidadeEngenharia = data;
          this.messagesService.showMessageSuccess("Unidade de engenharia alterado com sucesso!")
          //retorna para a tela lista unidade de engenharia
          this.navegarParaListaUnidadeEngenharia()
        },
        error => {
         //Envia array de erros
         this.errorMessages = error.error
      }
      )
    }

  };

  //Retorna para a tela lista unidade de engenharia
  navegarParaListaUnidadeEngenharia(){
    this.router.navigate(['/unidade-engenharia/',])
  }

  //Carrega os dados de unidade de engenharia por id para edição
  carregaUnidadeEngenharia(id:any) {
    if(this.currentAction == 'edit')
      this.api.getUniEng(id).subscribe(
        data => {
          this.unidadeEngenharia = data;
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

    if(this.route.snapshot.url[1].path == "new")
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
    return "Cadastro de Unidade de Engenharia" // Escreve a string no titulo quando é cadastro
  }

  protected editarTituloPagina(): string{
    const nomeunidadeEngenharia = this.unidadeEngenharia.unidade || "";
    return "Editar Unidade de Engenharia: " + nomeunidadeEngenharia // Escreve a string no titulo quando é edição
  }


}
