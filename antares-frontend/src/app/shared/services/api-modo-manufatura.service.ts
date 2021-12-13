import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiModoManufaturaService {

   //monta a base da URL que será enviado a API
   baseUrl = "http://127.0.0.1:8000/";
   //Monta o cabeçalho do HTTP a ser enviado
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')


   constructor(private http: HttpClient) { }

   //Busca todos os modo manufatura no banco de dados
   getAllManuMod(): Observable<any>{
     return this.http.get(this.baseUrl + 'manufatura/cadastro-modo-manufatura',
     {headers: this.httpHeaders})
   }

   //Busca o modo manufatura por ID, usado em Update e Delete
   getManuMod(id:any) : Observable<any>{
     return this.http.get(this.baseUrl + 'manufatura/cadastro-modo-manufatura/' + id + '/',
     {headers: this.httpHeaders});

   }

   //Salva novo modo manufatura no banco de dados
   saveNewManuMod(manuMod:any) : Observable<any>{
     return this.http.post(this.baseUrl + 'manufatura/cadastro-modo-manufatura/', manuMod,
     {headers: this.httpHeaders});

   }

   // Altera o modo manufatura
   updateManuMod(manuMod:any) : Observable<any>{
     // body é o corpo com os dados alterados do JSON, precisa dele para funcionar
     let body = {modo_manufatura: manuMod.modo_manufatura}
     return this.http.put(this.baseUrl + 'manufatura/cadastro-modo-manufatura/' + manuMod.id + '/', body,
     {headers: this.httpHeaders});
   }

   // deleta o modo manufatura
   deleteManuMod(manuMod:any) : Observable<any>{
     return this.http.delete(this.baseUrl + 'manufatura/cadastro-modo-manufatura/' + manuMod.id + '/',
     {headers: this.httpHeaders});
   }


 }
