import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiEstoqueInsumoService {



   //monta a base da URL que será enviado a API
   baseUrl = "http://127.0.0.1:8000/";
   //Monta o cabeçalho do HTTP a ser enviado
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')


   constructor(
    private http: HttpClient,
    ) { }

   //Busca todos os estoque de insumo no banco de dados
   getAllEstoqueInsumo(): Observable<any>{
     return this.http.get(this.baseUrl + 'insumo/estoque-insumo',
     {headers: this.httpHeaders})
   }

     //Busca o estoque de insumo por ID, usado em Update e Delete
   getEstoqueInsumo(id:any) : Observable<any>{
     return this.http.get(this.baseUrl + 'insumo/estoque-insumo/' + id + '/',
     {headers: this.httpHeaders});

   }

   //Salva novo estoque de insumo no banco de dados
   saveNewEstoqueInsumo(estoqueInsumo:any) : Observable<any>{
     return this.http.post(this.baseUrl + 'insumo/estoque-insumo/', estoqueInsumo,
     {headers: this.httpHeaders});

   }

   // Altera o estoque de insumo
   updateEstoqueInsumo(estoqueInsumo:any) : Observable<any>{
     // body é o corpo com os dados alterados do JSON, precisa dele para funcionar
     let body = {descricao_insumo: estoqueInsumo.descricao_insumo, unidade: estoqueInsumo.unidade, quantidade: estoqueInsumo.quantidade, valor_unitario: estoqueInsumo.valor_unitario, valor_total:estoqueInsumo.valor_total, estoque_minimo: estoqueInsumo.estoque_minimo}
     return this.http.put(this.baseUrl + 'insumo/estoque-insumo/' + estoqueInsumo.id + '/', body,
     {headers: this.httpHeaders});
   }

   // deleta o estoque de insumo
   deleteEstoqueInsumo(estoqueInsumo:any) : Observable<any>{
     return this.http.delete(this.baseUrl + 'insumo/estoque-insumo/' + estoqueInsumo.id + '/',
     {headers: this.httpHeaders});
   }

}
