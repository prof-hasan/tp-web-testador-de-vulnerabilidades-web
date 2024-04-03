# Descrição

O projeto tem como objetivo implementar um website que apresenta diversos recursos para testar vulnerabilidades Web. Diversos ataques podem ser executados contra sistemas Web e é dever dos desenvolvedores garantirem que seus projetos implementem medidas para proteger suas aplicações. O propósito é que este projeto seja uma ferramenta educativa para os desenvolvedores de aplicações Web, demonstrando as boas práticas de segurança para garantir maior efetividade na proteção dos dados e dos usuários em websites. O site também trará a oportunidade de testar as vulnerabilidades na mesma perspectiva de um atacante, permitindo a execução dos ataques às falhas propositais no site, mostrando como os trechos de código que implementam a aplicação estão vulneráveis e as alterações necessárias para corrigi-las. Serão demonstradas as seguintes vulnerabilidades: SQL Injections, Cross-site Scripting (XSS) e Broken Access Control.

- XSS: 

    - Quando outros usuários visitam a página, o script malicioso é executado em seus navegadores.
    - Isso pode parecer inofensivo, mas os atacantes podem criar scripts mais perigosos para roubar cookies, sequestrar sessões ou realizar outras ações maliciosas.
    - Isso pode ser prevenido usando validação de entrada, onde apenas dados podem ser inseridos em um formato específico.
    - Tipos: Refletido, Armazenado/Persistente e DOM.

<div align="center">
  <img width="316" alt="image" src="https://github.com/prof-hasan/tp-web-testador-de-vulnerabilidades-web/assets/95055138/f34d13a0-7a92-49d3-8ddb-3431e483d61a">
</div>

- SQLi:

    - O atacante explora vulnerabilidades nos campos de entrada defeituosos de um site ou aplicativo para manipular as consultas SQL executadas no banco de dados do backend.
    - Como funciona:
      - Campos de entrada: Muitas aplicações web recebem entradas do usuário por meio de formulários ou parâmetros de URL. Essas entradas são frequentemente usadas para construir consultas SQL para interagir com um banco de dados.
      - Entrada maliciosa: Um invasor insere uma entrada especialmente criada (frequentemente contendo código SQL) nesses campos de entrada.
      - Manipulação de consulta: Se uma aplicação não valida ou sanitiza adequadamente a entrada, o código SQL malicioso torna-se parte da consulta executada em um banco de dados.
      - Exposição de dados: Dependendo do tipo de ataque, um invasor pode extrair informações sensíveis, modificar ou excluir dados, ou até mesmo obter controle administrativo sobre um banco de dados.

<div align="center">
  <img width="303" alt="image" src="https://github.com/prof-hasan/tp-web-testador-de-vulnerabilidades-web/assets/95055138/8d94d3bc-ab3e-497b-be34-f9432de550e5">
</div>

- Broken Access Control: 
    - Tipo de vulnerabilidade que permite aos usuários acessar dados e funcionalidades aos quais não deveriam ter acesso.
    - Na maioria dos casos de ataques de Broken Access Control, um usuário malicioso se aproveita de implementações fracas ou inexistentes de controle de acesso na aplicação alvo.
    - Existem muitas formas de vulnerabilidade de Broken Access Control.
    - Um exemplo é um usuário regular de um aplicativo da web poder acessar a página de Administração devido à implementação deficiente de controle de acesso.
    - Esse usuário agora pode prosseguir para realizar tarefas como excluir todos os dados ou acessar dados sensíveis do usuário, como endereços de e-mail de todos os usuários.
    - Outros exemplos: Manipulação de URL e elevação de privilégios (privilege escalation).
  
<div align="center">
  <img width="395" alt="image" src="https://github.com/prof-hasan/tp-web-testador-de-vulnerabilidades-web/assets/95055138/1e792c83-f050-4f33-8059-53e76473b8e4">
</div>

# Paleta de Cores

<img width="516" alt="image" src="https://github.com/prof-hasan/tp-web-testador-de-vulnerabilidades-web/assets/95055138/2b447b04-6cdb-4559-aecc-0455fa2a3f05">

# Tipografia

<img width="416" alt="image" src="https://github.com/prof-hasan/tp-web-testador-de-vulnerabilidades-web/assets/95055138/6bfa0b3f-5150-45bd-9b7a-a39e49d3b06a)">
