import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionarios } from '../components/funcionarios/funcionarios';
import { Pessoa } from '../interfaces/pessoa';

@Injectable({
  providedIn: 'root',
})
export class Data {
  constructor(private http: HttpClient) {}

  getJsonData(): Observable<Pessoa[]>  {
    return this.http.get<Pessoa[]>('assets/exemploJSON.json');
  }
}
