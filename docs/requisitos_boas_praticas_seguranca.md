- Validação de todos os inputs do usuário.
  - Para cada input presente nos páginas que não sejam intencionalmente vulneráveis, o programador deverá validar os dados passados para o usuário, garantindo que a entrada passada seja correta, completa e segura para o correto funcionamento do programa.
  - Dessa forma, possíveis vulnerabilidades como SQL injection, command Injection, cross-site scripting e file inclusion podem ser evitadas.
  - Esse verificação pode ser feita manualmente pelo lado do servidor por exemplo, removendo caracteres indesejados, como o ‘/’, comumente usados para injeção de script, usando expressões regulares para definir padrões desejados de entrada, ou até mesmo usando funções pré-estabelecidas da linguagem de programação utilizada, como é o caso da função xss_check para PHP.

- Codificação (hash) de senhas e informações importantes do sistema.
  - Senhas continuam sendo  as credenciais de segurança mais comuns nas aplicações de hoje web em dia.
  - Sendo assim, para aumentar a segurança da aplicação, deve ser exigido que todas as senhas tenham um tamanho e uma complexidade adequadas, além de serem sempre armazenadas na forma de hash criptográficos.

- Configurar o HTTPS como o padrão de comunicação do site, junto com a correta configuração de todos os seus headers.
  - Alguns headers como: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, X-XSS-Protection and Content-Security-Policy 
- Também pode ser incluída a proteção dos cookies
