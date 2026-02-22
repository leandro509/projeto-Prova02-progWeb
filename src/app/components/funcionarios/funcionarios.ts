import { Component, inject, Input } from '@angular/core';
import { Data } from '../../services/data';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.css',
})
export class Funcionarios {
  
   private dataService = inject(Data);
  data$ = this.dataService.getJsonData();
} 
