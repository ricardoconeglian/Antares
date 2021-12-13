import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUnidadeEngenhariaService {
 //monta a base da URL que será enviado a API
 baseUrl = "http://127.0.0.1:8000/";
 //Monta o cabeçalho do HTTP a ser enviado
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')


 constructor(private http: HttpClient) { }

 //Busca todas as unidades de engenharia no banco de dados
 getAllUniEng(): Observable<any>{
   return this.http.get(this.baseUrl + 'insumo/cadastro-unidade-engenharia',
   {headers: this.httpHeaders})
 }

 //Busca a unidade de engenharia por ID, usado em Update e Delete
 getUniEng(id:any) : Observable<any>{
   return this.http.get(this.baseUrl + 'insumo/cadastro-unidade-engenharia/' + id + '/',
   {headers: this.httpHeaders});

 }

 //Salva a nova unidade de engenharia no banco de dados
 saveNewUniEng(uniEng:any) : Observable<any>{
   return this.http.post(this.baseUrl + 'insumo/cadastro-unidade-engenharia/', uniEng,
   {headers: this.httpHeaders});

 }

 // Altera a unidade de engenharia
 updateUniEng(uniEng:any) : Observable<any>{
   // body é o corpo com os dados alterados do JSON, precisa dele para funcionar
   let body = {descricao: uniEng.descricao, unidade:uniEng.unidade}
   return this.http.put(this.baseUrl + 'insumo/cadastro-unidade-engenharia/' + uniEng.id + '/', body,
   {headers: this.httpHeaders});
 }

 // deleta a unidade engenharia
 deleteUniEng(uniEng:any) : Observable<any>{
   return this.http.delete(this.baseUrl + 'insumo/cadastro-unidade-engenharia/' + uniEng.id + '/',
   {headers: this.httpHeaders});
 }


}
