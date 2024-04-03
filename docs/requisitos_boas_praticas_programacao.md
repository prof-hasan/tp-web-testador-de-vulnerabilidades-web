- Correta separação da camada de acesso aos dados (MVC), controllers, services, repositories…
  - Com o objetivo de manter a manutenibilidade, boa legibilidade e a correta atribuição de responsabilidades do programa, a correta separação da camada de acesso aos dados deverá ser realizada.
  - No modelo escolhido, uma parte do programa será responsável pela lógica de negócio e pelo acesso aos dados, geralmente incluindo os services e repositories.
  - Outra parte deverá ser responsável pelas interfaces de usuário, e a última deverá coordenar a comunicação entre as interfaces de usuário e a camada de acesso aos dados, normalmente com o auxílio de controllers.
  
- Incluir arquivos de testes unitário para guiar a implementação.
  - Um código que possui  uma boa cobertura de testes unitários possui uma manutenção mais fácil, maior qualidade de software atrelada, desenvolvimento mais acelerado, além de boa legibilidade. Com testes unitários, é fácil de verificar quando novas features acabam causando bugs em partes específicas do código, permitindo que erros e comportamentos indesejados sejam rapidamente corrigidos.

- Adotar padrões sempre que possível (design patterns).
  - Ao utilizar padrões de design já conhecidos, o programa como um todo se torna mais eficiente, pois passa a ser construídos a partir de soluções já verificada e testadas de problemas muitas vezes recorrentes na programação.

- Seguir convenções de nomes
  - Essas convenções são importantes para garantir que o código seja legível, compreensível e consistente, facilitando a colaboração entre os desenvolvedores e a manutenção do código ao longo do tempo.
  - Principais convenções de nomes: CamelCase ou camelCase, PascalCase ou PascalCase, snake_case ou snake_case, kebab-case ou kebab-case, UPPER_CASE ou UPPER_CASE, Hungarian notation.







