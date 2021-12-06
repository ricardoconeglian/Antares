import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {




  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  navegarParaCadastroProduto(){
    this.router.navigate(['/produto/cadastro-produto',])
  }




}

