# Boas-vindas ao repositório do projeto Trybe Futebol Clube!

O TFC é um projeto fullstack de um site informativo sobre partidas e classificações de futebol!

Fui responsável por desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto, construí um back-end dockerizado utilizando modelagem de dados através do Sequelize.

É possível visualizar três tabelas diferentes, alterar e adicionar partidas. Mas, para editar ou adicionar, a pessoa deverá estar logada, ou seja, é necessário ter um Token que só é fornecido para usuários cadastrados. Existe um relacionamento entre as tabelas "teams" e "matches" para fazer as atualizações das partidas.

O back-end implementa regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

#vqv 🚀 #TFC

### 🗓 Entrega 
* Projeto individual.
* Foram `5` dias de projeto.

<br />

# Tecnologias utilizadas

O projeto foi construido utilizando as tecnologias:

- Node.js
- Express
- Docker
- MySQL
- Sequelize
- JWT (JSON Web Token) para autenticação
- Bcrypt
- Jest para testes unitários e de integração
- Supertest para testes HTTP
- ESLint e Prettier para padronização de código.

<br />

# Instalação

<details>
  <summary><strong>Comandos</strong></summary>
  Antes de começar a instalação, verifique se você possui o Node.js e o MySQL instalados em sua máquina.

  <br />

  * Dica: Para testar os endpoints recomendo usar a extensão Thunder Client

  <br />

  ####  1 - Clone este repositório para sua máquina local usando o seguinte comando no terminal:
  `git clone https://github.com/lucascbb/trybe-futebol-clube.git`

  #### 2 - Acesse o diretório do projeto:
  `cd trybe-futebol-clube`

  #### 3 - Instale as dependências do projeto utilizando o seguinte comando:
  `npm install` 
  
  #### 4 - Acesse a pasta backend/:
  `cd app/` e `cd backend/`

  #### 5 - Rode o comando npm run build na pasta do back-end para fazer obuild da aplicação;
  `npm run build`
  
  #### 6 - Volte para app/:
  `cd ..`

  #### 7 - Suba a aplicação do compose, utilizando:  
  `npm run compose:up`
  
  #### 8 - Rode o backend na pota 3001 usando a extensao Docker
  `code .` abra a extensao e clique com botao direito no container `app_backend` e depois clique em `view logs`
  
  #### 9 - Rode o frontend na porta 3000:
  Abra outro terminal e rode `cd app/`, `cd frontend/` e `npm start`
  
  #### 10 - Pronto para testar os endpoints e o fronend

</details>
<br />

# Endpoints
<details><summary><strong>A API possui os seguintes endpoints:</strong></summary>

Obs.: As rotas incluem validacoes caso haja algum tipo de dado invalido, se houver algum erro é possivel receber um status 401 ou 404

- GET -> `/teams`: Retornar todos os times;   

- GET -> `/teams/:id`: Retorna dados de um time específico;   

- POST -> `/login`: Permite fazer o login com dados válidos e caso esteja certo retorna um Token;
  Exemplo de como corpo da requisição deverá receber o formato:

  ```json
  {
  "email": "user@user.com",
  "password": "secret_user"
  }
  ```

- GET -> `/login/role`: Retorna o tipo do user caso os dados sejam validos;   

- GET -> `/matches`: Retorna a lista de partidas;

- POST -> `/matches`: Possível cadastrar uma nova partida, e retorna os dados dessa partida;
  Exemplo de como corpo da requisição deverá receber o formato:

  ```json
  {
  "homeTeamId": 16,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  }
  ```

- GET -> `/matches?inProgress=true`: Retorna a lista de partidas que estao em andamento;

- GET -> `/matches?inProgress=false`: Retorna a lista de partidas encerradas;

- PATCH -> `/matches/:id/finish`: Possível finalizar uma partida, o retorno deve ser um "Finished";

- PATCH -> `/matches/:id`: Possível atualizar uma partida em andamento, o retorno deve ser um "Edited";
  Exemplo de como corpo da requisição deverá receber o formato:

  ```json
  {
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
  }
  ```

- GET -> `/leaderboard`: Retorna todas informações do desempenho dos times;

- GET -> `/leaderboard/home`: Retorna as informações do desempenho dos times da casa;

- GET -> `/leaderboard/away`: Retorna as informações do desempenho dos times da visitantes;


</details>
<br />

### 29 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados
<br />

# Requisitos Bônus

### 30 - (Bônus) Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC
<br />

