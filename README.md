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

  #### 4 - Rode o comando npm run build na pasta do back-end para fazer o build da aplicação;
  `npm run build`

  #### 5 - Suba a aplicação do compose, utilizando:
  `npm run compose:up` 

  #### 5.1 - Caso queira descer a aplicacao do compose, utilize:
  `npm run compose:down`

  #### 6 - Rode o backend na porta 3001:
  `npm run dev`

  #### 7 - Rode o frontend na porta 3000:
  `npm start`

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

# Requisitos Obrigatórios

### 1 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de times
<br />

### 2 - (TDD) Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em /app/backend/src, com um mínimo de 7 linhas cobertas
<br />

### 3 - Desenvolva o endpoint /teams no back-end de forma que ele possa retornar todos os times corretamente
<br />

### 4 - (TDD) Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em /app/backend/src, com um mínimo de 19 linhas cobertas
<br />

### 5 - Desenvolva o endpoint /teams/:id no back-end de forma que ele possa retornar dados de um time específico
<br />

### 6 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias
<br />

### 7 - (TDD) Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em /app/backend/src, com um mínimo de 25 linhas cobertas
<br />

### 8 - Desenvolva o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end
<br />

### 9 - (TDD) Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em /app/backend/src, com um mínimo de 35 linhas cobertas
<br />

### 10 - Desenvolva o endpoint /login no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
<br />

### 11 - (TDD) Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em /app/backend/src, com um mínimo de 45 linhas cobertas
<br />

### 12 - Desenvolva um middleware de validação para o token, verificando se ele é válido, e desenvolva o endpoint /login/role no back-end de maneira que ele retorne os dados corretamente no front-end
<br />

### 13 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de partidas
<br />

### 14 - (TDD) Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em /app/backend/src, com um mínimo de 70 linhas cobertas
<br />

### 15 - Desenvolva o endpoint /matches de forma que os dados apareçam corretamente na tela de partidas no front-end
<br />

### 16 - Desenvolva o endpoint /matches de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
<br />

### 17 - Desenvolva o endpoint /matches/:id/finish de modo que seja possível finalizar uma partida no banco de dados
<br />

### 18 - Desenvolva o endpoint /matches/:id de forma que seja possível atualizar partidas em andamento
<br />

### 19 - (TDD) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em /app/backend/src, com um mínimo de 80 linhas cobertas
<br />

### 20 - Desenvolva o endpoint /matches de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
<br />

### 21 - Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times
<br />

### 22 - (Bônus; TDD) Desenvolva testes que cubram no mínimo 80 por cento dos arquivos em /app/backend/src, com um mínimo de 100 linhas cobertas
<br />

### 23 - Desenvolva o endpoint /leaderboard/home de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
<br />

### 24 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
<br />

### 25 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
<br />

### 26 - Desenvolva o endpoint /leaderboard/away de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
<br />

### 27 - Desenvolva o endpoint /leaderboard/away, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
<br />

### 28 - Desenvolva o endpoint /leaderboard/away de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
<br />

### 29 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados
<br />

# Requisitos Bônus

### 30 - (Bônus) Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC
<br />

