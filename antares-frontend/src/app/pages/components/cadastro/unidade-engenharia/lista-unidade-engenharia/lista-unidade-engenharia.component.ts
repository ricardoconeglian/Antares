import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiUnidadeEngenhariaService } from 'src/app/shared/services/api-unidade-engenharia.service';
import { UnidadeEngenharia } from '../shared/unidade-engenharia.model';

@Component({
  selector: 'app-lista-unidade-engenharia',
  templateUrl: './lista-unidade-engenharia.component.html',
  styleUrls: ['./lista-unidade-engenharia.component.css']
})
export class ListaUnidadeEngenhariaComponent implements OnInit {

  //Cria um array com os dados de unidade de engenharia
  unidadeEngenharia: UnidadeEngenharia | any;

  //Array que recebera as unidades de engenharia vindos do banco de dados
 unidadeEngenharias: UnidadeEngenharia[] = [];

  //recebe ID selecionado para delete
  selected_id: number | any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api: ApiUnidadeEngenhariaService, //recebe as funções do Serviço ApiUnidadeEngenhariaService
    protected injector: Injector) {

      this.carregarUnidadeEngenharia() //carrega todos as unidades de engenharia na tabela toda vez que inicializa a pagina
      this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota

     }

  ngOnInit(): void {
    //Pega o numero do id vindo da URL e passa como parametro no função carregaUnidadeEngenharia()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.selected_id = id;

    })
  }

  //Carrega as unidades de engenharia que estão no banco de dados
  carregarUnidadeEngenharia = () => {
    this.api.getAllUniEng().subscribe(
      data => {
        this.unidadeEngenharias = data
      },
      error => {
        console.log("Aconteceu um erro", error)
      }
    )
  }

   //Navega para a tela de cadastro unidade engenharia
   navegarParaCadastraUnidadeEngenharia(){
    this.router.navigate(['unidade-engenharia/cadastro-unidade-engenharia/new',])
  }

  /*-------------------------------------------------------
    Deletar cadastro de unidade engenharia
    -------------------------------------------------------
  */
    delete(unidadeEngenharia:any) {
      const mustDelete = confirm('Deseja realmente excluir?')
      if(mustDelete){
        this.api.deleteUniEng(unidadeEngenharia).subscribe(
          data => {
            let index:any;
            this.unidadeEngenharias.forEach((e, i) => {
              if(e.id == unidadeEngenharia.id)
               index = i;
            })

            this.unidadeEngenharias.splice(index, 1);
          },
          error => {
            console.log("Aconteceu um erro", error);
          }
        )
      }
    }


}

