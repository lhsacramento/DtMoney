# DT Money

### Link do Projeto
Estou ainda finalizando o projeto; assim que terminar, irei disponibilizar o acesso. (Estou trabalhando na versão para celular também)

### Sobre o Projeto
Este site foi um projeto realizado paralelamente às aulas da Rocketseat, onde a ideia principal era aprender sobre otimização, consumo de APIs e acessibilidade.


### Desafios do Projeto
Este foi um projeto incrível que gostei muito de fazer. Integrar o front-end com o backend e ver tudo funcionando é realmente indescritível. Além disso, também foi muito bom conhecer outras bibliotecas como o Radix, com componentes que são primitivos e ao mesmo tempo têm acessibilidade (ah, e vem sem estilização, assim a gente pode deixar do nosso jeito estilizando o componente do zero). No projeto, consegui aplicar conceitos de contextos, uso de requisições (API), reduce, e outras bibliotecas também como Axios para requisições e ReactHookForm para os formulários, junto com validações da biblioteca Zod. E não poderia esquecer, para simular um backend eu utilizei o Json Server, que dispõe de uma gama de funções muito completa!

### Performance
Tive a oportunidade nesse projeto de entender conceitos mais profundos. Um deles é o como funciona a renderização de um componente (as etapas que são executadas antes de renderizar), o que pode fazer com que meu componente renderize e como eu posso fazer para que ele não renderize sem necessidade. No caso, como eu posso evitar que ele renderize sem que realmente precise. Para isso tive que utilizar algumas bibliotecas de dentro e de fora do "react", dentre elas destacam-se:
- useCallback: Para evitar que determinada função seja alterada na memória e com isso o componente seja renderizado novamente por conta dessa alteração.
- useMemo: Para evitar que determinado dado seja alterado na memória e com isso o componente todo seja rendizado novamente.
- Memo: Verifica se as propriedades e funções de um componente foram alterados e caso não tenham sido, ele não faz a rendização novamente componente.
- useContextSelector: Separa partes do contexto para que ao usar uma função ou dado do contexto, ele não tenha que ser renderizado por inteiro novamente.

### Tecnologias Utilizadas
- Criação: Vite e React  
- Linguagem: Typescript;
- Estilização: Styled-components;
- Formulários: React-hook-form;
- Validação: Zod;
- Requisições: Api fetch(nativa) e Axios;
- Componentes: Radix;
- Backend: Json Server;


### Como executar na sua máquina?
- 1- Abra o projeto em algum editor (eu utilizo o visual studio code);
- 2- No terminal, instale as dependencias do projeto "npm install";
- 3- Após aguardar o término da instalação, execute o comando "npm run dev" para iniciar a aplicação;
- 4- Logo em seguida, em outro terminal, digite o comando "npm run dev:server" para iniciar o "backend" do Json Server;
- 5- Pronto, agora é só acessar a aplicação!


### Imagens do projeto

<img src='https://i.imgur.com/fQIlVQj.png' width='800px'>
<img src='https://i.imgur.com/E1rQI43.png' width='800px'>
<img src='https://i.imgur.com/t6JtJ11.png' width='800px'>
<img src='https://i.imgur.com/HKsiMTi.png' width='800px'>
<img src='https://i.imgur.com/9pajVRL.png' width='800px'>
<img src='https://i.imgur.com/qO9ciF7.png' width='800px'>
<img src='https://i.imgur.com/VCHuF5R.png' width='800px'>
<img src='https://i.imgur.com/OJMjj8H.png' width='800px'>
