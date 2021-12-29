import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiCadastroInsumoService } from 'src/app/shared/services/api-cadastro-insumo.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CadastroInsumo } from '../shared/cadastro-insumo.model';

@Component({
  selector: 'app-form-cadastro-insumo',
  templateUrl: './form-cadastro-insumo.component.html',
  styleUrls: ['./form-cadastro-insumo.component.css']
})
export class FormCadastroInsumoComponent implements OnInit {

  //define se está crindo ou editando um insumo
  currentAction: string | undefined;

  //Recebe o valor de titulo da pagina (criar ou editar o insumo)
  tituloPagina: string | undefined;

  protected route: ActivatedRoute;

//Array que recebe os valores de input dos dados para envio ao banco de dados
  insumo: CadastroInsumo | any;
  insumos: CadastroInsumo[] = []

  //Array de erros recebidos da API
  errorMessages: CadastroInsumo | any;



  constructor(
    protected router: Router,
    protected api: ApiCadastroInsumoService,
    protected injector: Injector,
    protected messagesService: MessagesService,


    ) {
    this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
    this.insumo = new CadastroInsumo()
   }

  ngOnInit(): void {
    this.setCurrentAction() // Roda função ao inicializar a tela
    //Pega o numero do id vindo da URL e passa como parametro no função carregaInsumo()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.carregaInsumo(id)

    })
  }

  ngAfterContentChecked(): void {
    this.setTituloPagina(); // Monitora constantemente se houve alteração cadastrar/editar
  }

  /**-------------------------------------------------------------------------------------
   * Criar e alterar cadastro de insumo
    --------------------------------------------------------------------------------------
  */

  //Salva o novo cadastro ou altera o cadastro no banco de dados
  save(){
    // se for um novo cadastro de insumo usa essa instrução
    if(this.currentAction == 'new'){
      this.api.saveNewInsumo(this.insumo).subscribe(
        data => {
          this.insumos.push(data);
          this.messagesService.showMessageSuccess("Insumo criado com sucesso!")
          //retorna para a tela lista Insumos
          this.navegarParaListaInsumo()
        },
        error => {
             //Envia array de erros
             this.errorMessages = error.error
        }
      );
    }
    //se for uma alteração de cadastro usa essa instrução
    else{
      this.api.updateInsumo(this.insumo).subscribe(
        data => {
          this.insumo = data;
          this.messagesService.showMessageSuccess("Insumo alterado com sucesso!")
          //retorna para a tela lista insumo
          this.navegarParaListaInsumo()
        },
        error => {
           //Envia array de erros
           this.errorMessages = error.error
      }
      )
    }

  };

  //Retorna para a tela lista insumo
  navegarParaListaInsumo(){
    this.router.navigate(['/insumo/',])
  }

  //Carrega os dados do insumo por id para edição
  carregaInsumo(id:any) {
    if(this.currentAction == 'edit')
      this.api.getInsumo(id).subscribe(
        data => {
          this.insumo = data;
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
    return "Cadastro de Insumo" // Escreve a string no titulo quando é cadastro
  }

  protected editarTituloPagina(): string{
    const insumo = this.insumo.descricao_insumo || "";
    return "Editar Insumo: " + insumo // Escreve a string no titulo quando é edição
  }


}

