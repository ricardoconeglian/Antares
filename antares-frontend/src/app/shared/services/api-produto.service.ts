import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProdutoService {
  //monta a base da URL que será enviado a API
  baseUrl = "http://127.0.0.1:8000/";
  //Monta o cabeçalho do HTTP a ser enviado
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }

  //Busca todos os produtos no banco de dados
  getAllProducts(): Observable<any>{
    return this.http.get(this.baseUrl + 'produto/cadastro-produto/',
    {headers: this.httpHeaders})
  }

  //Busca o produto por ID, usado em Update e Delete
  getProduct(id:any) : Observable<any>{
    return this.http.get(this.baseUrl + 'produto/cadastro-produto/' + id + '/',
    {headers: this.httpHeaders});

  }

  //Salva novo produto no banco de dados
  saveNewProduct(produto:any) : Observable<any>{
    return this.http.post(this.baseUrl + 'produto/cadastro-produto/', produto,
    {headers: this.httpHeaders});

  }

  // Altera o produto
  updateProduct(product:any) : Observable<any>{
    let body = {name: product.name, surname: product.surname, phone: product.phone};
    return this.http.put(this.baseUrl + 'produto/cadastro-produto/' + product.id + '/', body,
    {headers: this.httpHeaders});

  }

  // deleta o produto
  deleteProduct(id:any) : Observable<any>{
    return this.http.delete(this.baseUrl + 'produto/cadastro-produto/' + id + '/',
    {headers: this.httpHeaders});
  }
}

