import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiProdutoService } from 'src/app/shared/services/api-produto.service';



@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto = {codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''}

  produtos = [
    {codigo_sap_produto: '', nome_produto: '', descricao_produto: '', utilizacao: '', projeto: '', foto: ''},
  ];
  constructor(private router: Router, private api: ApiProdutoService) { }

  ngOnInit(): void {
  }

  save(){
    this.api.saveNewProduct(this.produto).subscribe(
      data => {
        this.produtos.push(data);
      },
      error => {
          console.log("Aconteceu um erro", error);
      }
    );
  };

  navegarParaListaProduto(){
    this.router.navigate(['/produto/',])
  }

}
