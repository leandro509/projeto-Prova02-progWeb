import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Funcionarios } from './components/funcionarios/funcionarios';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "funcionarios",
        component: Funcionarios
    },
    {
        path: "cadastro",
        component: Cadastro
    }
];
