import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiModoManufaturaService } from 'src/app/shared/services/api-modo-manufatura.service';
import { MessagesService } from 'src/app/shared/services/messages.service';


@Component({
  selector: 'app-form-modo-manufatura',
  templateUrl: './form-modo-manufatura.component.html',
  styleUrls: ['./form-modo-manufatura.component.css']
})
export class FormModoManufaturaComponent implements OnInit {

  //define se está crindo ou editando um modo manufatura
  currentAction: string | undefined;

  //Recebe o valor de titulo da pagina (criar ou editar o modo manufatura)
  tituloPagina: string | undefined;

  protected route: ActivatedRoute;

//Array que recebe os valores de input dos dados para envio ao banco de dados
 modoManufatura = {modo_manufatura: ''}
 modoManufaturas = [
    {modo_manufatura: ''},
  ]

  //Array de erros recebidos da API
  errorMessages = {
    modo_manufatura: ''
  }


  constructor(
    protected router: Router,
    protected api: ApiModoManufaturaService,
    protected injector: Injector,
    protected messagesService: MessagesService,


    ) {
    this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota

   }

  ngOnInit(): void {
    this.setCurrentAction() // Roda função ao inicializar a tela
    //Pega o numero do id vindo da URL e passa como parametro no função carregaModoManufatura()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.carregaModoManufatura(id)

    })
  }

  ngAfterContentChecked(): void {
    this.setTituloPagina(); // Monitora constantemente se houve alteração cadastrar/editar
  }

  /**-------------------------------------------------------------------------------------
   * Criar e alterar cadastro de modo manufatura
    --------------------------------------------------------------------------------------
  */

  //Salva o novo cadastro ou altera o cadastro no banco de dados
  save(){
    // se for um novo cadastro de modo manufatura usa essa instrução
    if(this.currentAction == 'new'){
      this.api.saveNewManuMod(this.modoManufatura).subscribe(
        data => {
          this.modoManufaturas.push(data);
          this.messagesService.showMessageSuccess("Modo de Manufatura criado com sucesso!")
          //retorna para a tela lista tipo Manufatura
          this.navegarParaListaModoManufatura()
        },
        error => {
            //Envia array de erros
            this.errorMessages = error.error
        }
      );
    }
    //se for uma alteração de cadastro usa essa instrução
    else{
      this.api.updateManuMod(this.modoManufatura).subscribe(
        data => {
          this.modoManufatura = data;
          this.messagesService.showMessageSuccess("Modo de Manufatura alterado com sucesso!")
          //retorna para a tela lista Modo manufatura
          this.navegarParaListaModoManufatura()
        },
        error => {
         //Envia array de erros
         this.errorMessages = error.error
      }
      )
    }

  };

  //Retorna para a tela lista modo manufatura
  navegarParaListaModoManufatura(){
    this.router.navigate(['/modo-manufatura/',])
  }

  //Carrega os dados do modo manufatura por id para edição
  carregaModoManufatura(id:any) {
    if(this.currentAction == 'edit')
      this.api.getManuMod(id).subscribe(
        data => {
          this.modoManufatura = data;
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
    return "Cadastro de Modo Manufatura" // Escreve a string no titulo quando é cadastro
  }

  protected editarTituloPagina(): string{
    const nomeModoManufatura = this.modoManufatura.modo_manufatura || "";
    return "Editar Modo Manufatura: " + nomeModoManufatura // Escreve a string no titulo quando é edição
  }


}


