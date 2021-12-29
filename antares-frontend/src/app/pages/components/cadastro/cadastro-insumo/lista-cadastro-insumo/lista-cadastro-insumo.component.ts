import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiCadastroInsumoService } from 'src/app/shared/services/api-cadastro-insumo.service';
import { CadastroInsumo } from '../shared/cadastro-insumo.model';

@Component({
  selector: 'app-lista-cadastro-insumo',
  templateUrl: './lista-cadastro-insumo.component.html',
  styleUrls: ['./lista-cadastro-insumo.component.css']
})
export class ListaCadastroInsumoComponent implements OnInit {

  //Cria um array com os dados de insumo
  insumo: CadastroInsumo | any;

  //Array que recebera os insumos vindos do banco de dados
  insumos: CadastroInsumo[] = [];


  //recebe ID selecionado para delete
  selected_id: number | any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api:ApiCadastroInsumoService, //recebe as funções do Serviço APICadastroInsumoService
    protected injector: Injector) {

      this.carregarInsumo() //carrega todos os insumos na tabela toda vez que inicializa a pagina
      this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
     
     }

  ngOnInit(): void {
    //Pega o numero do id vindo da URL e passa como parametro no função carregaInsumo()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.selected_id = id;

    })
  }

  //Carrega os insumos que estão no banco de dados
  carregarInsumo = () => {
    this.api.getAllInsumo().subscribe(
      data => {
        this.insumos = data
      },
      error => {
        console.log("Aconteceu um erro", error)
      }
    )
  }

   //Navega para a tela de cadadastro insumo
   navegarParaCadastraInsumo(){
    this.router.navigate(['insumo/cadastro-insumo/new',])
  }

  /*-------------------------------------------------------
    Deletar cadastro de insumo
    -------------------------------------------------------
  */
    delete(insumo:any) {
      const mustDelete = confirm('Deseja realmente excluir?')
      if(mustDelete){
        this.api.deleteInsumo(insumo).subscribe(
          data => {
            let index:any;
            this.insumos.forEach((e, i) => {
              if(e.id == insumo.id)
               index = i;
            })

            this.insumos.splice(index, 1);
          },
          error => {
            console.log("Aconteceu um erro", error);
          }
        )
      }
    }


}
