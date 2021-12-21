import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { ApiEstoqueInsumoService } from 'src/app/shared/services/api-estoque-insumo.service';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-form-estoque-insumo',
  templateUrl: './form-estoque-insumo.component.html',
  styleUrls: ['./form-estoque-insumo.component.css']
})
export class FormEstoqueInsumoComponent implements OnInit {


  //define se está crindo ou editando um estoque de insumo
  currentAction: string | undefined;

  //Recebe o valor de titulo da pagina (criar ou editar o estoque de insumo)
  tituloPagina: string | undefined;

  protected route: ActivatedRoute;

  // Lista que recebe os valores vindos dos campos de cadastro do HTML
  insumo = {codigo_sap_insumo: '',
  descricao_insumo: '',
  unidade: '',
  quantidade: '',
  estoque_minimo: '',
  valor_unitario: '',
  valor_total: ''}

  //Lista de estoque de insumos que será enviado para o banco de dados
  insumos = [
    {codigo_sap_insumo: '',
    descricao_insumo: '',
    unidade: '',
    quantidade: '',
    estoque_minimo: '',
    valor_unitario: '',
    valor_total: ''},
  ];

  //Array de erros recebidos da API
  errorMessages = {codigo_sap_insumo: '',
  descricao_insumo: '',
  unidade: '',
  quantidade: '',
  estoque_minimo: '',
  valor_unitario: '',
  valor_total: ''}

  constructor(
    protected router: Router,
    protected api: ApiEstoqueInsumoService,
    protected injector: Injector,
    protected messagesService: MessagesService,


    ) {
    this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
   }

  ngOnInit(): void {
    this.setCurrentAction() // Roda função ao inicializar a tela
    //Pega o numero do id vindo da URL e passa como parametro no função carregaEstoqueInsumo()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.carregaEstoqueInsumo(id)
    })
  }

  ngAfterContentChecked(): void {
    this.setTituloPagina(); // Monitora constantemente se houve alteração cadastrar/editar
  }

  /**-------------------------------------------------------------------------------------
   * Criar e alterar cadastro de estoque de insumos
    --------------------------------------------------------------------------------------
  */

  //Salva o novo cadastro ou altera o cadastro no banco de dados
  save(){
    // se for um novo cadastro de estoque de insumo usa essa instrução
    if(this.currentAction == 'new'){
      this.api.saveNewEstoqueInsumo(this.insumo).subscribe(
        data => {
          this.insumos.push(data);
          this.messagesService.showMessageSuccess("Estoque de insumo criado com sucesso!")
          //retorna para a tela lista estoque de insumos
          this.navegarParaListaEstoqueInsumo()
        },
        error => {
            //Envia array de erros
            this.errorMessages = error.error
        }
      );
    }
    //se for uma alteração de cadastro usa essa instrução
    else{
      this.api.updateEstoqueInsumo(this.insumo).subscribe(
        data => {
          this.insumo = data;
          this.messagesService.showMessageSuccess("Estoque de insumo alterado com sucesso!")
          //retorna para a tela lista estoque insumo
          this.navegarParaListaEstoqueInsumo()
        },
        error => {
          //Envia array de erros
          this.errorMessages = error.error
      }
      )
    }

  };

  //Retorna para a tela lista estoque de insumo
  navegarParaListaEstoqueInsumo(){
    this.router.navigate(['insumo/estoque-insumo/',])
  }

  //Carrega os dados do estoque de insumo por id para edição
  carregaEstoqueInsumo(id:any) {
    if(this.currentAction == 'edit')
      this.api.getEstoqueInsumo(id).subscribe(
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
    if(this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  //Verifica se está sendo criado um novo estoque de insumos ou editando
  protected setTituloPagina(){
    if(this.currentAction == 'new')
      this.tituloPagina = this.criarTituloPagina();
    else{
      this.tituloPagina = this.editarTituloPagina()
    }
  }

  protected criarTituloPagina(): string{
    return "Cadastro de Estoque de Insumo" // Escreve a string no titulo quando é cadastro
  }

  protected editarTituloPagina(): string{
    const nomeEstoqueInsumo = this.insumo.descricao_insumo || "";
    return "Editar Estoque Insumo: " + nomeEstoqueInsumo // Escreve a string no titulo quando é edição
  }


}
