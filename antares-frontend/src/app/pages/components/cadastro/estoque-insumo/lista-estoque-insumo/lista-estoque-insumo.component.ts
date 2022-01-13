import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiCadastroInsumoService } from 'src/app/shared/services/api-cadastro-insumo.service';
import { ApiEstoqueInsumoService } from 'src/app/shared/services/api-estoque-insumo.service';
import { EstoqueInsumo } from '../shared/estoque-insumo.model';


@Component({
  selector: 'app-lista-estoque-insumo',
  templateUrl: './lista-estoque-insumo.component.html',
  styleUrls: ['./lista-estoque-insumo.component.css']
})
export class ListaEstoqueInsumoComponent implements OnInit {

   //Cria um array com os dados de estoque insumo
   //estoqueInsumo = {id: '', descricao_insumo:{descricao_insumo: '', codigo_sap_insumo: ''}, unidade: {id: '', unidade: '', descricao: ''}, quantidade: '', valor_unitario:'', valor_total: '', estoque_minimo: ''}

   //Array que recebera os estoque de insumo vindos do banco de dados
/*
   estoqueInsumos = [
    {id: '', descricao_insumo:{descricao_insumo: '', codigo_sap_insumo: ''}, unidade: {id: '', unidade: '', descricao: ''}, quantidade: '', valor_unitario:'', valor_total: '', estoque_minimo: ''}
   ];
*/
   estoqueInsumo: EstoqueInsumo | any
   estoqueInsumos: EstoqueInsumo[] = []

   getAllCadastroInsumo:[
         {id: '', codigo_sap_insumo: '', descricao_insumo: ''}
   ] | undefined


   //recebe ID selecionado para delete
   selected_id: number | any;

   constructor(private router: Router,
     private route: ActivatedRoute,
     private api:ApiEstoqueInsumoService, //recebe as funções do Serviço APIEstoqueInsumoService
     protected injector: Injector,
     protected apiCadastroInsumo: ApiCadastroInsumoService,

     ) {

       this.carregarEstoqueInsumo() //carrega todos os estoque de insumo na tabela toda vez que inicializa a pagina
       this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
       this.getCadastroInsumo()
       this.estoqueInsumo = new EstoqueInsumo();


      }

   ngOnInit(): void {
     //Pega o numero do id vindo da URL e passa como parametro no função carregaEstoqueInsumo()
     this.route.paramMap.subscribe((param: ParamMap) => {
       let id = parseInt(param.get('id') || '{}');
       this.selected_id = id;


     })
   }

   //Carrega os estoque de insumo que estão no banco de dados
   carregarEstoqueInsumo = () => {
     this.api.getAllEstoqueInsumo().subscribe(
       data => {
         this.estoqueInsumos = data

       },
       error => {
         console.log("Aconteceu um erro", error)
       }
     )
   }

    //Navega de volta para a tela de listagem de estoque insumo
    navegarParaCadastraEstoqueInsumo(){
     this.router.navigate(['insumo/estoque-insumo/new',])
   }

   /*-------------------------------------------------------
     Deletar cadastro de insumo
     -------------------------------------------------------
   */
     delete(estoqueInsumo:any) {
       const mustDelete = confirm('Deseja realmente excluir?')
       if(mustDelete){
         this.api.deleteEstoqueInsumo(estoqueInsumo).subscribe(
           data => {
             let index:any;
             this.estoqueInsumos.forEach((e, i) => {
               if(e.id == estoqueInsumo.id)
                index = i;
             })

             this.estoqueInsumos.splice(index, 1);
           },
           error => {
             console.log("Aconteceu um erro", error);
           }
         )
       }
     }

  //carrega a lista de cadastro de insumos da API cadastro de insumos
   getCadastroInsumo(){
     this.apiCadastroInsumo.getAllInsumo().subscribe(
      data => {
        this.getAllCadastroInsumo = data;

      },
      error => {
        console.log("Aconteceu um erro", error);
      }

    )}


}
