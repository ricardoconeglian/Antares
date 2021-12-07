import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProdutoService {
  baseUrl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any>{
    return this.http.get(this.baseUrl + 'produto/cadastro-produto',
    {headers: this.httpHeaders})
  }

  getProduct(id:any) : Observable<any>{
    return this.http.get(this.baseUrl + 'produto/' + id + '/',
    {headers: this.httpHeaders});

  }

  saveNewProduct(produto:any) : Observable<any>{
    return this.http.post(this.baseUrl + 'produto/cadastro-produto/', produto,
    {headers: this.httpHeaders});

  }

  updateProduct(product:any) : Observable<any>{
    let body = {name: product.name, surname: product.surname, phone: product.phone};
    return this.http.put(this.baseUrl + 'produto/cadastro-produto/' + product.id + '/', body,
    {headers: this.httpHeaders});

  }

  deleteProduct(id:any) : Observable<any>{
    return this.http.delete(this.baseUrl + 'produto/cadastro-produto/' + id + '/',
    {headers: this.httpHeaders});
  }
}

