import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiTipoManufaturaService } from 'src/app/shared/services/api-tipo-manufatura.service';

@Component({
  selector: 'app-lista-tipo-manufatura',
  templateUrl: './lista-tipo-manufatura.component.html',
  styleUrls: ['./lista-tipo-manufatura.component.css']
})
export class ListaTipoManufaturaComponent implements OnInit {

  //Extende do model TipoManufatura criando um array com os dados
  tipoManufatura = {id: '', tipo_manufatura: ''}

  //Array que recebera os produtos vindos do banco de dados
  tipoManufaturas = [
    {id: '', tipo_manufatura: ''}
  ];


  //recebe ID selecionado para delete
  selected_id: number | any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api:ApiTipoManufaturaService, //recebe as funções do Serviço APITipoManufaturaService
    protected injector: Injector) {

      this.carregarTipoManufatura() //carrega todos os tipos de manufatura na tabela toda vez que inicializa a pagina
      this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota

     }

  ngOnInit(): void {
    //Pega o numero do id vindo da URL e passa como parametro no função carregaTipoManufatura()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.selected_id = id;
    
    })
  }

  //Carrega os tipos de manufatura que estão no banco de dados
  carregarTipoManufatura = () => {
    this.api.getAllManuType().subscribe(
      data => {
        this.tipoManufaturas = data
      },
      error => {
        console.log("Aconteceu um erro", error)
      }
    )
  }

   //Navega de volta para a tela de listagem de tipo manufatura
   navegarParaCadastraTipoManufatura(){
    this.router.navigate(['manufatura/tipo-manufatura/cadastro-tipo-manufatura/new',])
  }

  /*-------------------------------------------------------
    Deletar cadastro de produtos
    -------------------------------------------------------
  */
    delete(tipoManufatura:any) {
      const mustDelete = confirm('Deseja realmente excluir?')
      if(mustDelete){
        this.api.deleteManuType(tipoManufatura).subscribe(
          data => {
            let index:any;
            this.tipoManufaturas.forEach((e, i) => {
              if(e.id == tipoManufatura.id)
               index = i;
            })

            this.tipoManufaturas.splice(index, 1);
          },
          error => {
            console.log("Aconteceu um erro", error);
          }
        )
      }
    }

}

