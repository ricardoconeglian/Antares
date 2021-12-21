import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { ApiProdutoService } from 'src/app/shared/services/api-produto.service';
import { MessagesService } from 'src/app/shared/services/messages.service';



@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {



  //define se está crindo ou editando um produto
  currentAction: string | undefined;

  //Recebe o valor de titulo da pagina (criar ou editar o produto)
  tituloPagina: string | undefined;

  protected route: ActivatedRoute;

  // Lista que recebe os valores vindos dos campos de cadastro do HTML
  produto = {codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''}

  //Lista de produtos que será enviado para o banco de dados
  produtos = [
    {codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''},
  ];

  //Array de erros recebidos da API
  errorMessages = {
    codigo_sap_produto: '',
    nome_produto: '',
    descricao_produto: '',
    utilizacao: ''
  }

  constructor(
    protected router: Router,
    protected api: ApiProdutoService,
    protected injector: Injector,
    protected messagesService: MessagesService,


    ) {
    this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
   }

  ngOnInit(): void {
    this.setCurrentAction() // Roda função ao inicializar a tela
    //Pega o numero do id vindo da URL e passa como parametro no função carregaProduto()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.carregaProduto(id)
    })
  }

  ngAfterContentChecked(): void {
    this.setTituloPagina(); // Monitora constantemente se houve alteração cadastrar/editar
  }

  /**-------------------------------------------------------------------------------------
   * Criar e alterar cadastro de produtos
    --------------------------------------------------------------------------------------
  */

  //Salva o novo cadastro ou altera o cadastro no banco de dados
  save(){
    // se for um novo cadastro de produto usa essa instrução
    if(this.currentAction == 'new'){
      this.api.saveNewProduct(this.produto).subscribe(
        data => {
          this.produtos.push(data);
          this.messagesService.showMessageSuccess("Produto criado com sucesso!")
          //retorna para a tela lista produtos
          this.navegarParaListaProduto()
        },
        error => {
            //Envia array de erros
            this.errorMessages = error.error
        }
      );
    }
    //se for uma alteração de cadastro usa essa instrução
    else{
      this.api.updateProduct(this.produto).subscribe(
        data => {
          this.produto = data;
          this.messagesService.showMessageSuccess("Produto alterado com sucesso!")
          //retorna para a tela lista produtos
          this.navegarParaListaProduto()
        },
        error => {
          //Envia array de erros
          this.errorMessages = error.error
      }
      )
    }

  };

  //Retorna para a tela lista produto
  navegarParaListaProduto(){
    this.router.navigate(['/produto/',])
  }

  //Carrega os dados do produto por id para edição
  carregaProduto(id:any) {
    if(this.currentAction == 'edit')
      this.api.getProduct(id).subscribe(
        data => {
          this.produto = data;
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
    return "Cadastro de Produto" // Escreve a string no titulo quando é cadastro
  }

  protected editarTituloPagina(): string{
    const nomeProduto = this.produto.nome_produto || "";
    return "Editar Produto: " + nomeProduto // Escreve a string no titulo quando é edição
  }

}

