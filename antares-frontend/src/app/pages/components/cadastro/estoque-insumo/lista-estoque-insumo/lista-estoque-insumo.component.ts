import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiCadastroInsumoService } from 'src/app/shared/services/api-cadastro-insumo.service';
import { ApiEstoqueInsumoService } from 'src/app/shared/services/api-estoque-insumo.service';
import { EstoqueInsumo, ListaEstoqueInsumo } from '../shared/estoque-insumo.model';


@Component({
  selector: 'app-lista-estoque-insumo',
  templateUrl: './lista-estoque-insumo.component.html',
  styleUrls: ['./lista-estoque-insumo.component.css']
})
export class ListaEstoqueInsumoComponent implements OnInit {



   estoqueInsumos: ListaEstoqueInsumo[] = []




   //recebe ID selecionado para delete
   selected_id: number | any;

   constructor(private router: Router,
     private route: ActivatedRoute,
     private api:ApiEstoqueInsumoService, //recebe as funções do Serviço APIEstoqueInsumoService
     protected injector: Injector,
     protected apiCadastroInsumo: ApiCadastroInsumoService,

    ){

       this.carregarEstoqueInsumo() //carrega todos os estoque de insumo na tabela toda vez que inicializa a pagina
       this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota




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




}
