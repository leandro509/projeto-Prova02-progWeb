import { Component, signal } from '@angular/core';
import { Data } from './services/data';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Nav } from "./components/nav/nav";
import { Footer } from "./components/footer/footer";
import { Funcionarios } from './components/funcionarios/funcionarios';
import { Observable } from 'rxjs';
import { Pessoa } from './interfaces/pessoa';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');

  data: Pessoa[] = [];


  constructor(private dataService: Data) {  
    this.dataService.getJsonData().subscribe((res: Pessoa[]) => {
      this.data = res;
    });
  }
}

