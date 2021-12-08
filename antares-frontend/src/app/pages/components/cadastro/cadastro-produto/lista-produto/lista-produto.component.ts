import { Component, Injector, OnInit} from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiProdutoService } from 'src/app/shared/services/api-produto.service';


@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produto = {codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''}

  //Array que recebera os produtos vindos do banco de dados
  produtos = [
    {id:'', codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''}
  ];

  //recebe ID selecionado para delete
  selected_id: number | any;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private api:ApiProdutoService, //recebe as funções do Serviço APIProdutoService
    protected injector: Injector,
    ) {
      this.carregarProdutos()
      this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
    }

  ngOnInit(): void {
     //Pega o numero do id vindo da URL e passa como parametro no função carregaProduto()
      this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.selected_id = id;

    })
  }

  //Carrega os produtos que estão no banco de dados
  carregarProdutos = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.produtos = data
      },
      error => {
        console.log("Aconteceu um erro", error)
      }
    )
  }

  //Navega de volta para a tela de listagem de produtos
  navegarParaListaProduto(){
    this.router.navigate(['/produto/cadastro-produto/new',])
  }

  /*-------------------------------------------------------
    Deletar cadastro de produtos
    -------------------------------------------------------
  */
    delete(produto:any) {
      const mustDelete = confirm('Deseja realmente excluir?')
      if(mustDelete){
        this.api.deleteProduct(produto).subscribe(
          data => {
            let index:any;
            this.produtos.forEach((e, i) => {
              if(e.id == produto.id)
               index = i;
            })

            this.produtos.splice(index, 1);
          },
          error => {
            console.log("Aconteceu um erro", error);
          }
        )
      }
    }

}

