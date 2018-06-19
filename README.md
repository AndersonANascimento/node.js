# Códigos das Videoaulas de Node.js - Rodrigo Branas

## Aula 1 - Introdução
    Arquivo: primes-single-thread-server.js
    Objetivo: Demonstrar que o Node.js é sigle thread (Event Loop).
---
    Arquivo: file.js
    Objetivo: Demonstrar que no Node.js existe um pool de thread responsável por processamento de I/O (Thread pool).
---
    Arquivo: primes-multi-thread.js
    Objetivo: Demonstrar como escalar o Event Loop no Node.js apesar de ser single thread.
---
    Arquivos: primes.js X Primes.java
    Objetivo: Analise comparativa de performance entre o Java(JVM) e Node.js(V8).
---
## Aula 2 - Sistema de Módulos
- Tudo que é definido dentro do módulo é privado;
- Também é possível exportar o módulo utilizando ``exports`` ou ``this``;
- Se o módulo requerido não começar com ``/, ../ ou ./`` o algoritmo de busca da função require vai procurar na pasta ``node_modules``.
- Ao utilizar o ``npm``, os módulos instalados são armazenados na pasta ``node_modules``.
- A função ``require`` utiliza um mecanismo de cache.

### Diferença entre ``module.exports``, ``exports`` e ``this``?
- Todos apontam para a mesma referência;
- ``WARNING!``Apenas ``module.exports`` é retornado da função ``require``;
---
    Arquivos: serialGeneratorV*.js e index.js
    Objetivo: Exemplificar definição e utilização de módulos;
---
    Arquivo: module.js
    Objetivo: Mostra que 'module.exports', 'exports' e 'this' apontam para a mesma referência;
---

## Aula 3 - Global Objects
- Toda declaração no módulo torna-se privada dele;
- Evite poluir o escopo global;
- Defina variáveis globais sem utilizar o escopo global.(ex: config.js);

## Aula 4 - Timers
- Com eles é possível agendar a execução de funções;
- Para evitar o bloqueio do event loop, que é executado em uma única thread, as funções invocadas pelos timers ficam aguardando em uma fila.
- Formas de criar (exemplos):
    - setTimeout.js;
    - setTimeoutInterval.js;
    - setInterval.js;
    - setTimeoutZero.js;
    - setImmediate.js
- Formas de parar:
    - clearTimeout.js;
    - clearInterval.js;

## Aula 5 - Process
- Um processo é uma instância de um determinado programa em execução no sistema operacional;
- 