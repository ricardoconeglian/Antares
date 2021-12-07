import { Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiProdutoService } from 'src/app/shared/services/api-produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  //Array que recebera os produtos vindos do banco de dados
  produtos = [
    {id:'', codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''}
  ];


  constructor(private router: Router,
    private route: ActivatedRoute,
    private api:ApiProdutoService, //recebe as funções do Serviço APIProdutoService
    ) {
      this.carregarProdutos()
    }

  ngOnInit(): void {

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
    this.router.navigate(['/produto/cadastro-produto',])
  }




}

