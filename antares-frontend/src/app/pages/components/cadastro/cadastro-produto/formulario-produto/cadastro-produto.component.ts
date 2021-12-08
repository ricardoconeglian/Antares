import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ApiProdutoService } from 'src/app/shared/services/api-produto.service';



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
  constructor(
    private router: Router,
    private api: ApiProdutoService,
    protected injector: Injector,
    ) {
    this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
   }

  ngOnInit(): void {
    this.setCurrentAction() // Roda função ao inicializar a tela
  }

  ngAfterContentChecked(): void {
    this.setTituloPagina(); // Monitora constantemente se houve alteração cadastrar/editar
  }

  //Salva o novo cadastro no banco de dados
  save(){
    this.api.saveNewProduct(this.produto).subscribe(
      data => {
        this.produtos.push(data);
      },
      error => {
          console.log("Aconteceu um erro", error);
      }
    );
    this.navegarParaListaProduto()
  };

  //Retorna para a tela lista produto
  navegarParaListaProduto(){
    this.router.navigate(['/produto/',])
  }

  
  //Metodos privados

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
   // const categoryName = this.resource.name || "";
    return "Editar Produto " //+ categoryName // Escreve a string no titulo quando é edição
  }

}
