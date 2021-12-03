import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  //Agrega rota de navegação nos botões de navegação da component cadastro


  navegarParaCadastroProdutos(): void {
    this.router.navigate(['/produto/cadastro-produtos'])
  }


  navegarParaListaTecnica(): void {
    this.router.navigate(['/produto/lista-tecnica'])
  }

  navegarParaCadastroInsumo(): void {
    this.router.navigate(['insumo/cadastro-insumo'])
  }

  navegarParaEstoqueInsumo(): void {
    this.router.navigate(['insumo/estoque-insumo'])
  }

  navegarParaUnidadeEngenharia(): void {
    this.router.navigate(['insumo/unidade-engenharia'])
  }

  navegarParaModoManufatura(): void {
    this.router.navigate(['manufatura/modo-manufatura'])
  }

  navegarParaTipoManufatura(): void {
    this.router.navigate(['manufatura/tipo-manufatura'])
  }

}
