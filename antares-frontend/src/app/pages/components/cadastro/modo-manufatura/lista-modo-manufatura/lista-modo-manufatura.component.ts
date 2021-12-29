import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiModoManufaturaService } from 'src/app/shared/services/api-modo-manufatura.service';
import { ModoManufatura } from '../shared/modo-manufatura.model';

@Component({
  selector: 'app-lista-modo-manufatura',
  templateUrl: './lista-modo-manufatura.component.html',
  styleUrls: ['./lista-modo-manufatura.component.css']
})
export class ListaModoManufaturaComponent implements OnInit {

  //Cria um array com os dados de modo manufatura
  modoManufatura: ModoManufatura | any;

  //Array que recebera os modos de manufatura vindos do banco de dados
  modoManufaturas: ModoManufatura[] = []


  //recebe ID selecionado para delete
  selected_id: number | any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api:ApiModoManufaturaService, //recebe as funções do Serviço APIModoManufaturaService
    protected injector: Injector) {

      this.carregarModoManufatura() //carrega todos os modos de manufatura na tabela toda vez que inicializa a pagina
      this.route = this.injector.get(ActivatedRoute); //Injeção de dependencia da rota
      
     }

  ngOnInit(): void {
    //Pega o numero do id vindo da URL e passa como parametro no função carregaModoManufatura()
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.selected_id = id;

    })
  }

  //Carrega os modos de manufatura que estão no banco de dados
  carregarModoManufatura = () => {
    this.api.getAllManuMod().subscribe(
      data => {
        this.modoManufaturas = data
      },
      error => {
        console.log("Aconteceu um erro", error)
      }
    )
  }

   //Navega de volta para a tela de listagem de modo manufatura
   navegarParaCadastraModoManufatura(){
    this.router.navigate(['modo-manufatura/cadastro-modo-manufatura/new',])
  }

  /*-------------------------------------------------------
    Deletar cadastro de modo manufatura
    -------------------------------------------------------
  */
    delete(modoManufatura:any) {
      const mustDelete = confirm('Deseja realmente excluir?')
      if(mustDelete){
        this.api.deleteManuMod(modoManufatura).subscribe(
          data => {
            let index:any;
            this.modoManufaturas.forEach((e, i) => {
              if(e.id == modoManufatura.id)
               index = i;
            })

            this.modoManufaturas.splice(index, 1);
          },
          error => {
            console.log("Aconteceu um erro", error);
          }
        )
      }
    }


}
