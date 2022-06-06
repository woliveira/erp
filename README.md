## Sobre o projeto

ERP é um projeto que tem como objetivo, ajudar empresas a controlar o fluxo e controle de estoque.

## Funcionalidades desenvolvidas até o momento

- Consulta de produtos
- Consulta de fornecedores

## Backlog

Funcionalidades de Cadastro:
- Produtos
- Categorias
- Marcas
- Fornecedores
- Clientes
- Depósito

Funcionalidades para movimentações
- Gerenciamento de estoque Kardex
- Entrada de produtos
- Saída de produtos
- Movimentação de produtos entre depósitos

Relatórios
- Produtos
- Fornecedores
- Depósito

## Jest - Teste unitário
- Testa o retorno da consulta de produtos no banco de dados
- Testa o retorno da consulta de fornecedores no banco de dados

## Como executar o projeto
1. Backend (pasta server) 

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:woliveira/erp.git

# Acesse a pasta do projeto no terminal/cmd
$ cd erp

# Instale as dependências
$ npm install

# Execute a aplicação
$ node server

# O servidor inciará na porta:3000 - acesse http://localhost:3000 
