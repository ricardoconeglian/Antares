import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCadastroInsumoService {

   //monta a base da URL que será enviado a API
   baseUrl = "http://127.0.0.1:8000/";
   //Monta o cabeçalho do HTTP a ser enviado
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')


   constructor(private http: HttpClient) { }

   //Busca todos os insumos no banco de dados
   getAllInsumo(): Observable<any>{
     return this.http.get(this.baseUrl + 'insumo/cadastro-insumo',
     {headers: this.httpHeaders})
   }

   //Busca o insumo por ID, usado em Update e Delete
   getInsumo(id:any) : Observable<any>{
     return this.http.get(this.baseUrl + 'insumo/cadastro-insumo/' + id + '/',
     {headers: this.httpHeaders});

   }

   //Salva novo insumo no banco de dados
   saveNewInsumo(insumo:any) : Observable<any>{
     return this.http.post(this.baseUrl + 'insumo/cadastro-insumo/', insumo,
     {headers: this.httpHeaders});

   }

   // Altera o insumo
   updateInsumo(insumo:any) : Observable<any>{
     // body é o corpo com os dados alterados do JSON, precisa dele para funcionar
     let body = {codigo_sap_insumo: insumo.codigo_sap_insumo, descricao_insumo: insumo.descricao_insumo}
     return this.http.put(this.baseUrl + 'insumo/cadastro-insumo/' + insumo.id + '/', body,
     {headers: this.httpHeaders});
   }

   // deleta o insumo
   deleteInsumo(insumo:any) : Observable<any>{
     return this.http.delete(this.baseUrl + 'insumo/cadastro-insumo/' + insumo.id + '/',
     {headers: this.httpHeaders});
   }


 }
