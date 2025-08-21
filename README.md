# Express-MySQL
# Express-MySQL

Este projeto é uma aplicação Node.js utilizando Express e MySQL para gerenciamento de clientes e produtos. Ele segue uma arquitetura MVC, com rotas, controllers, serviços, middlewares e integração com banco de dados.

## Como rodar o projeto

### 1. Pré-requisitos
- Node.js (>=14.x)
- MySQL Server

### 2. Instalação das dependências
No diretório do projeto, execute:
```bash
npm install
```

### 3. Configuração do banco de dados
- Crie um banco de dados MySQL.
- Execute os scripts em `models/creation_clientes.sql` e `models/creation_produtos.sql` para criar as tabelas necessárias.
- Execute os scripts em `models/insert_clients.sql` e `models/insert_produtos.sql` para inserir dados de exemplo.
- Configure as credenciais do banco em `configs/dbConfiguration.js`.

### 4. Inicialização do servidor
Para rodar o servidor em modo desenvolvimento:
```bash
npm run dev
```
Ou para rodar normalmente:
```bash
npm start
```

O servidor estará disponível em `http://localhost:3000` (ou porta configurada).

## Estrutura do Projeto e Função dos Arquivos

```
Express-MySQL/
├── app.js                # Configuração principal do Express, middlewares globais, rotas
├── index.js              # Ponto de entrada da aplicação
├── example.js            # Exemplo de uso ou testes
├── package.json          # Dependências e scripts do projeto
├── bin/www.js            # Inicialização do servidor HTTP
├── configs/
│   └── dbConfiguration.js    # Configuração de conexão com o MySQL
├── controllers/
│   ├── clienteController.js  # Lógica das rotas de clientes
│   └── produtoController.js  # Lógica das rotas de produtos
├── middlewares/
│   ├── corMiddleware.js      # Middleware para validação de cor
│   ├── idadeMiddleware.js    # Middleware para validação de idade
│   ├── nomeMiddleware.js     # Middleware para validação de nome
│   └── sobrenomeMiddleware.js# Middleware para validação de sobrenome
├── models/
│   ├── creation_clientes.sql # Script de criação da tabela clientes
│   ├── creation_produtos.sql # Script de criação da tabela produtos
│   ├── insert_clients.sql    # Script de inserção de clientes
│   └── insert_produtos.sql   # Script de inserção de produtos
├── public/
│   └── stylesheets/style.css # Estilos CSS da aplicação
├── routes/
│   ├── clientes.js           # Rotas relacionadas a clientes
│   ├── produtos.js           # Rotas relacionadas a produtos
│   ├── users.js              # Rotas de usuários (exemplo)
│   └── index.js              # Rotas principais
├── services/
│   ├── clientesServices.js   # Serviços de acesso a dados de clientes
│   └── produtosServices.js   # Serviços de acesso a dados de produtos
├── views/
│   ├── error.jade            # Página de erro
│   ├── index.jade            # Página inicial
│   └── layout.jade           # Layout base das views
├── .eslintrc.js/.json        # Configuração do ESLint
├── .gitignore                # Arquivos/ pastas ignorados pelo git
└── README.md                 # Documentação do projeto
```

## Principais Pacotes Utilizados
- express: Framework web para Node.js
- mysql: Driver para conexão com MySQL
- morgan: Logger de requisições HTTP
- body-parser: Parser de corpo de requisições
- jade/pug: Template engine para views

Instale dependências adicionais com:
```bash
npm install express mysql morgan body-parser pug
```

## Observações
- Os middlewares validam dados das requisições antes de chegar aos controllers.
- Os controllers processam as requisições e utilizam os services para acessar o banco.
- Os services encapsulam a lógica de acesso ao MySQL.
- As views utilizam Jade para renderização das páginas.
- Os scripts SQL devem ser executados manualmente no banco antes de rodar a aplicação.

## Autor
Alencar Avelar

## Licença
Consulte o arquivo LICENSE para mais informações.
