import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTipoManufaturaService {

  //monta a base da URL que será enviado a API
  baseUrl = "http://127.0.0.1:8000/";
  //Monta o cabeçalho do HTTP a ser enviado
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')


  constructor(private http: HttpClient) { }

  //Busca todos os produtos no banco de dados
  getAllManuType(): Observable<any>{
    return this.http.get(this.baseUrl + 'manufatura/tipo-manufatura',
    {headers: this.httpHeaders})
  }

  //Busca o tipo manufatura por ID, usado em Update e Delete
  getManuType(id:any) : Observable<any>{
    return this.http.get(this.baseUrl + 'manufatura/tipo-manufatura' + id + '/',
    {headers: this.httpHeaders});

  }

  //Salva novo tipo manufatura no banco de dados
  saveNewManuType(manuType:any) : Observable<any>{
    return this.http.post(this.baseUrl + 'manufatura/tipo-manufatura', manuType,
    {headers: this.httpHeaders});

  }

  // Altera o tipo manufatura
  updateManuType(manuType:any) : Observable<any>{
    // body é o corpo com os dados alterados do JSON, precisa dele para funcionar
    let body = {tipo_manufatura: manuType.tipo_manufatura}
    return this.http.put(this.baseUrl + 'manufatura/tipo-manufatura' + manuType.id + '/', body,
    {headers: this.httpHeaders});
  }

  // deleta o tipo manufatura
  deleteManuType(manuType:any) : Observable<any>{
    return this.http.delete(this.baseUrl + 'manufatura/tipo-manufatura' + manuType.id + '/',
    {headers: this.httpHeaders});
  }


}
