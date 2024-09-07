# Rotas do Módulo de Usuário

## AdminController (`/admin`)

- **GET** `/all/hard`
  - Descrição: Retorna todos os usuários com proteção de autorização (Acesso restrito a `ADMIN`).
  - Autorização: `@PreAuthorize("hasRole('ADMIN')")`
  - Retorno: Lista de usuários com informações do perfil.

- **GET** `/all/easy`
  - Descrição: Retorna todos os usuários sem proteção de autorização.
  - Retorno: Lista de usuários com informações do perfil.

## AuthUserController (`/user`)

- **POST** `/auth`
  - Descrição: Autentica um usuário com base nas credenciais fornecidas.
  - Corpo da requisição: `AuthUserRequestDTO`
  - Retorno: Token JWT se as credenciais forem válidas.

## BankingInformationController (`/user/bank`)

- **GET** `/`
  - Descrição: Retorna as informações bancárias do usuário autenticado.
  - Autorização: O usuário precisa estar autenticado.
  - Retorno: Informações bancárias do usuário.

- **POST** `/vulnerable`
  - Descrição: Retorna as informações bancárias com base nos parâmetros de pesquisa sem proteção.
  - Corpo da requisição: `BankingInformationSearchRequestDTO`
  - Retorno: Informações bancárias encontradas.

- **POST** `/protected`
  - Descrição: Retorna as informações bancárias com proteção (consulta segura).
  - Corpo da requisição: `BankingInformationSearchRequestDTO`
  - Retorno: Informações bancárias encontradas.

## MessagesController (`/user/message`)

- **POST** `/`
  - Descrição: Cria uma nova mensagem associada ao usuário autenticado.
  - Corpo da requisição: `CreateMessageRequestDTO`
  - Retorno: Detalhes da mensagem criada.

## UserController (`/user`)

- **POST** `/`
  - Descrição: Cria um novo usuário.
  - Corpo da requisição: `CreateUserRequestDTO`
  - Retorno: Detalhes do usuário criado.

- **GET** `/`
  - Descrição: Retorna o perfil do usuário autenticado.
  - Autorização: `@PreAuthorize("hasRole('USER')")`
  - Retorno: Informações do perfil do usuário.
