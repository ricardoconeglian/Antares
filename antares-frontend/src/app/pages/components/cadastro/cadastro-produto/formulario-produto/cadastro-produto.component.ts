import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiProdutoService } from 'src/app/shared/services/api-produto.service';



@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  // Lista que recebe os valores vindos dos campos de cadastro do HTML
  produto = {codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''}

  //Lista de produtos que será enviado para o banco de dados
  produtos = [
    {codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''},
  ];
  constructor(private router: Router, private api: ApiProdutoService) { }

  ngOnInit(): void {
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

}
