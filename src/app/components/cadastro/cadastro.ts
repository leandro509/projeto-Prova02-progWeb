import { Component } from '@angular/core';
import { UserCadastrado } from '../../interfaces/user-cadastrado';
import { ServiceCadastro } from '../../services/service-cadastro';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteStatus } from '../../interfaces/delete-status';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  vetUserCadastrado: UserCadastrado[] = [];
  vUserCadastrado: UserCadastrado = {
    id: 0,
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };
  vUserCadastradoEdit: UserCadastrado = {
    id: 0,
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };

  vDeleteStatus: DeleteStatus = {
    status: '',
    mensagem: ''
  };

  constructor(private vServiceCadastro: ServiceCadastro) { }

  buscarUsuario(): void {
    this.vServiceCadastro.findUserById(this.vUserCadastrado.id!).subscribe({
      next: (pCadastro: UserCadastrado) => this.vUserCadastrado = pCadastro,
      error: (pErro: HttpErrorResponse) => alert(pErro.status + ' - ' + pErro.message)
    })
  }

  excluiUsuario(): void {
    this.vServiceCadastro.deleteUserCadastrado(this.vUserCadastrado.id!).subscribe({
      next: () => {
        this.vDeleteStatus.mensagem = 'Usuário excluído com sucesso!';
        this.vDeleteStatus.status = "Ok";
      },
      error: (pErro: HttpErrorResponse) => {
        this.vDeleteStatus.mensagem = 'Erro ao excluir usuário!';
        this.vDeleteStatus.status = "Erro";
      }
    });
  }
}
