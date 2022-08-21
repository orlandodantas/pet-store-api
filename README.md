# Pet Store API
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
API para uma loja de Pets

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Como rodar os teste](#como-rodar-os-testes)

:small_blue_diamond: [Dependências e Libs](#linguagens-dependencias-e-libs-utilizadas-books)

:small_blue_diamond: [Licença](#licença)


## Descrição do projeto 

<p align="justify">
  Esta é um API que fornece um <b>CRUD</b> em postegreSQL, com o intuito de fornecer endpoints que atendam ao front-end de uma loja de Pets.
</p>
<p>No momento este projeto está em desenvolvimento, mas após ser finalizado será possível, se cadastrar como novo usuário, comprar alimentos e utilitários para os pets, comprar pets e emitir Nota Fiscal.</p>
<p>
  O maior desafio enfrentado aqui está sendo o tempo, pois tenho que disputa-lo com meu atual trabalho, com o curso super intensivo que é o da <a hfer="https://www.betrybe.com/">Trybe</a> e claro com a minha vida pessoal.
 </p>

<!-- Descomentar depois que estiver pronto e complementar claro!
## Funcionalidades

:heavy_check_mark: Cadastro de usuários.  

:heavy_check_mark: Cadastro de Categoria.


## Deploy da Aplicação :dash:

> Pode ver a aplicação completa em funcionamento aqui: https://vercel.app/

> Link do projeto Front-End: https://github.com/orlandodantas/

-->
## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Git](https://git-scm.com/downloads)
:warning: [Docker](https://docs.docker.com/get-docker/)
:warning: [Docker-Compose](https://docs.docker.com/compose/install/) 

## Como rodar a aplicação :arrow_forward:

#### No terminal:
Clone o projeto: 

```
git clone https://github.com/orlandodantas/pet-store-api.git
```
Entre na pasta do projeto: 

```
cd pet-store-api
```

Instale as dependências: 

```sh
npm install
```
Renomei o arquivo docker-compose.yml.exemple para docker-compose.yml:
> Unix:
```sh
mv docker-compose.yml.exemple docker-compose.yml
```
> Windows:
```sh
rename docker-compose.yml.exemple docker-compose.yml
```

Abra o arquivo que acabou de renomear em um Editor/IDE de sua preferência por exemplo [VsCode](https://code.visualstudio.com/):
> Onde tem POSTGRES_PASSWORD=sua_password_postgres troque sua_password_postgres por uma senha a sua escolha para ser a senha de root
de acesso ao banco de dados. :warning: Atenção guarde esta senha que vamos usa-la mais a frente. Salve o arquivo e volte ao terminal.

Levante o container com o banco de dados MySQL: 

```sh
npm run compose:up
```
Renomei o arquivo .env.exemple para .env:
> Unix
```sh
mv .env.exemple .env
```
> Windows
```sh
rename .env.exemple .env
```

Abra o arquivo que acabou de renomear em um Editor/IDE de sua preferência por exemplo [VsCode](https://code.visualstudio.com/):
> Onde tem DATABASE_URL="postgresql://postgres:password@localhost:5432/pet_store?schema=public", troque password pela senha configurando anteriormente no arquivo
docker-compose.yml.
> Salve o arquivo e retorne ao terminal.. 

Criação do banco de dados:

```sh
npx prisma migrate dev
```

Rodar a aplicação:

```sh
npm run dev
```

> Agora a aplicação está pronta para ser usada em um cliente rest por exemplo o [Insomnia](https://insomnia.rest/download).

<!-- Descomentar quando os testes estiverem prontos
## Como rodar os testes

#### Em um terminal:
Rodar a execução dos testes:

```sh
npm test
```

Rodar a execução do teste coverage:

```sh
npm run test:coverage
```
-->

## Linguagens, dependências e libs utilizadas :books:

- [Node](https://nodejs.org/en/download/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
- [Restify Errors](https://www.npmjs.com/package/restify-errors)
- [Joi](https://www.npmjs.com/package/joi)
- [dotenv](https://www.npmjs.com/package/dotenv)

<!-- Descomentar depois se eu for usar estas libs
- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [BCrypt Js](https://www.npmjs.com/package/bcryptjs)
- [Cors](https://www.npmjs.com/package/cors)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
-->


## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - Pet Store API
