# 🚀 Projeto - Programação Web I - Trabalho 2

Aplicação web desenvolvida com **Angular** como parte da terceira avaliação da disciplina de **Programação Web I**.

O projeto implementa um sistema de **consulta, exclusão e atualização de cadastro**, consumindo uma API REST externa.

---

## 🎬 Demonstração do Projeto

Veja abaixo um vídeo demonstrando o funcionamento da aplicação:

👉 [Clique aqui para assistir ao vídeo](https://youtu.be/JCI-UUYcBhw)


## 📌 Funcionalidades

### 🔍 Consulta de Cadastro

* Entrada de um ID numérico
* Requisição **GET** para a API
* Exibição dos dados retornados:

  * ID
  * Nome
  * Departamento
  * Endereço
  * Email

---

### ❌ Exclusão de Cadastro

* Botão **"Exclusão"**
* Requisição **DELETE** para a API
* Exibição do resultado:

  * 🟢 Sucesso → fundo verde
  * 🔴 Erro → fundo vermelho

---

### ✏️ Atualização de Cadastro

* Formulário preenchido automaticamente com os dados consultados
* Requisição **PUT** para atualização
* Feedback visual baseado no status da API

---

## 🌐 API utilizada

```bash
GET    https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/{id}
DELETE https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/{id}
PUT    https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/{id}
```

---

## 🧱 Tecnologias utilizadas

* Angular
* TypeScript
* HTML5
* CSS3
* API REST
* Arquitetura baseada em componentes (Angular)

---

## 🧠 Conceitos aplicados

* Consumo de API REST
* Manipulação de requisições HTTP (GET, PUT, DELETE)
* Programação assíncrona (Observables)
* Estruturação de componentes
* Separação de responsabilidades
* Feedback visual baseado em resposta da API
* Responsividade básica

---

## 📁 Estrutura do projeto

```bash
src/
 ├── app/
 │   ├── components/
 │   │   ├── cadastro/
 │   │   ├── header/
 │   │   ├── footer/
 │   │   └── funcionarios/
 │   ├── services/
 │   └── app.routes.ts
 ├── assets/
 └── styles.css
```

---

## ▶️ Como rodar o projeto

### 🔧 Instalar dependências

```bash
npm install
```

### ▶️ Rodar em desenvolvimento

```bash
ng serve
```

Acesse:

```
http://localhost:4200
```

---

## 🏗️ Build para produção

```bash
ng build
```

Arquivos gerados em:

```
dist/app
```

---

## ☁️ Deploy

Projeto publicado na Vercel:

👉 https://gsp-transportes2.vercel.app/

---

## ⚠️ Observações importantes

* A API retorna status **"Ok"** ou **"Erro"** de forma aleatória
* O sistema trata ambos os casos com feedback visual
* Projeto desenvolvido com foco acadêmico

---

## 👨‍💻 Autor

Leandro Nascimento

---

## 📚 Contexto acadêmico

Projeto desenvolvido para a disciplina de **Programação Web I**, com os seguintes requisitos:

* CRUD parcial via API REST
* Interface com HTML semântico
* Uso de framework frontend
* Organização de código
* Responsividade

---

## 💡 Possíveis melhorias futuras

* Validação de formulários
* Tratamento de erros mais robusto
* Integração com backend próprio
* Melhorias de UI/UX
* Testes automatizados

---

## ⭐ Conclusão

Este projeto demonstra habilidades em:

* Desenvolvimento frontend com Angular
* Integração com APIs REST
* Deploy em ambiente real (Vercel)
* Debug de problemas reais de produção
