import { Component } from '@angular/core';
import { UserCadastrado } from '../../interfaces/user-cadastrado';
import { ServiceCadastro } from '../../services/service-cadastro';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteStatus } from '../../interfaces/delete-status';
import { AlteraStatus } from '../../interfaces/altera-status';


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

  vAlteraStatus: AlteraStatus = {
    status: '',
    mensagem: ''
  }

  primeiroId: number = 0;

  constructor(private vServiceCadastro: ServiceCadastro) { }


  carregaUsuario(): void {
    this.vUserCadastradoEdit = { ...this.vUserCadastrado };
  }

  atualizarId(): void {
    this.primeiroId = this.vUserCadastrado.id;
  }

  buscarUsuario(): void {
    if (this.vUserCadastrado.id <= 0) {
      alert('Por favor, insira um ID válido para buscar o usuário.');
      return;
    }
    this.vServiceCadastro.findUserById(this.vUserCadastrado.id!).subscribe({
      next: (pCadastro: UserCadastrado) => {
        this.vUserCadastrado = pCadastro;
        this.carregaUsuario();
        this.atualizarId();
      },
      error: (pErro: HttpErrorResponse) => alert(pErro.status + ' - ' + pErro.message)
    })
  }

  limpaStatusAlteracao(): void {
    setTimeout(() => {
      this.vAlteraStatus.mensagem = '';
      this.vAlteraStatus.status = '';
    }, 3000);
  }

  limpaStatusExclusao(): void {
    setTimeout(() => {
      this.vDeleteStatus.mensagem = '';
      this.vDeleteStatus.status = '';
    }, 3000);
  }

  limpaFormularios(): void {
    this.primeiroId = 0;
    this.vUserCadastrado.nome = '';
    this.vUserCadastrado.departamento = '';
    this.vUserCadastrado.endereco = '';
    this.vUserCadastrado.email = '';
    this.vUserCadastradoEdit.id = 0;
    this.vUserCadastradoEdit.nome = '';
    this.vUserCadastradoEdit.departamento = '';
    this.vUserCadastradoEdit.endereco = '';
    this.vUserCadastradoEdit.email = '';
  }


  alteraUsuario(): void {
    if (this.vUserCadastrado.id <= 0) {
      alert('Por favor, insira um ID válido para alterar o usuário.');
      return;
    }
    this.vServiceCadastro.updateUserCadastrado(this.vUserCadastradoEdit).subscribe({
      next: (pUserCadastrado: UserCadastrado) => {
        this.vUserCadastrado = pUserCadastrado;
        this.vUserCadastradoEdit = { ...pUserCadastrado };

        this.vAlteraStatus.mensagem = 'Usuário alterado com sucesso!';
        this.vAlteraStatus.status = "Ok";
        this.limpaStatusAlteracao();
        this.limpaFormularios();
      },
      error: (pErro: HttpErrorResponse) => {
        this.vAlteraStatus.mensagem = 'Erro ao alterar usuário!';
        this.vAlteraStatus.status = "Erro";
        this.limpaStatusAlteracao();
        this.limpaFormularios();
      }
    })
  }

  excluiUsuario(): void {
    if (this.vUserCadastrado.id <= 0) {
      alert('Por favor, insira um ID válido para excluir o usuário.');
      return;
    }
    this.vServiceCadastro.deleteUserCadastrado(this.vUserCadastrado.id!).subscribe({
      next: () => {
        this.vDeleteStatus.mensagem = 'Usuário excluído com sucesso!';
        this.vDeleteStatus.status = "Ok";
        this.limpaStatusExclusao();
        this.limpaFormularios();
      },
      error: (pErro: HttpErrorResponse) => {
        this.vDeleteStatus.mensagem = 'Erro ao excluir usuário!';
        this.vDeleteStatus.status = "Erro";
        this.limpaStatusExclusao();
        this.limpaFormularios();
      }
    });
  }
}
