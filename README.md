# GymBro

Este projeto foi criado utilizando o framework [NestJS](https://nestjs.com/), com suporte a TypeORM, autenticação JWT, validação de dados e outros recursos.

## Requisitos

- Node.js (v16 ou superior)
- npm (v8 ou superior)

## Dependências

```bash
npx @nestjs/cli && npm i @nestjs/typeorm typeorm sqlite3 && npm install @nestjs/jwt passport-jwt @nestjs/passport passport bcrypt && npm install --save-dev @types/passport-jwt @types/bcrypt && npm install class-validator class-transformer && npm install @nestjs/mapped-types
```

Execute o projeto:

```bash
npm run start:dev
```

## Configuração

- Para configurar as variáveis de ambiente, crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```env
SECRET_KEY="sua_chave"
```

## Front-End

- Repositório: [FRONTEND_Gymbro](https://github.com/EdOc-PS/FRONTEND_Gymbro)
- Criado por: [@EdOc-PS](https://github.com/EdOc-PS)

