import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCadastrado } from '../interfaces/user-cadastrado';

@Injectable({
  providedIn: 'root',
})
export class ServiceCadastro {
  constructor(private vHttpClient: HttpClient) { }

  findUserById(pId: number): Observable<UserCadastrado> {
    return this.vHttpClient.get<UserCadastrado>('https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/' + pId);
  }

  deleteUserCadastrado(pId: number): Observable<void> {
    return this.vHttpClient.delete<void>('https://jsonplaceholder.typicode.com/albums/' + pId);
  }

}
