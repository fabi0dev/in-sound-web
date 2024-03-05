# InSound App

Ele oferece acesso a uma vasta biblioteca de músicas utilizando a [API do Deezer](https://developers.deezer.com/api), o preview oferecido é de apenas 30 segundos por cada música. Porém oferece uma experiência musical bem dinâmica, desde a descoberta de novas faixas até a criação de uma playlist personalizada.

O App foi desenvolvido com [ReactJS](https://pt-br.legacy.reactjs.org/), [Redux Toolkit](https://redux-toolkit.js.org/), e [vite](https://vitejs.dev/) no seu workflow.

<div>
  <img alt="img-1" src="https://i.imgur.com/K2uOTI2.png" />
</div>

### Principais Funcionalidades

- <b>Exploração Aberta:</b> Os usuários podem explorar o vasto catálogo de músicas, artistas e álbuns diretamente através da integração com a API do Deezer. Isso permite que eles descubram novas músicas de seus gêneros favoritos ou explorem estilos totalmente novos.
  <br />
- <b>Playlist Personalizada:</b> Permite que o usuário crie uma playlist personalizada com suas músicas favoritas. A API do Deezer oferece acesso fácil a informações detalhadas sobre faixas, o que pode ser aproveitado para mostrar ao usuário sobre o que ele está ouvindo.
  <br />
- <b>Recomendações Inteligentes:</b> Utilizando recursos de recomendação da API do Deezer, o aplicativo sugere na tela inicial músicas tendências do Brasil, eu fixei esta região para não fazer algo tão complexo, visto que é um App somente para demonstração. Mas a experiência de encontrar novos artistas ou faixas populares ainda existe.
  <br />
- <b>Busca Avançada:</b> Uma busca avançada facilita a localização rápida de artistas, álbuns ou faixas específicas, garantindo uma experiência de descoberta musical eficiente.

<div>
  <img alt="img-3" src="https://i.imgur.com/rov4ZIU.png" />
</div>

### Sobre a Estrutura

- Vite é um framework de desenvolvimento rápido para aplicações web em JavaScript/TypeScript, suportando ReactJS.
  <br />
- O Redux Toolkit é uma biblioteca oficial do Redux projetada para simplificar e melhorar a experiência de desenvolvimento com o Redux.
  <br />
- Tailwind CSS é uma biblioteca de utilitários CSS para estilização eficiente, fornece classes que podem ser combinadas para criar estilos personalizados.
  <br />
- O Redux foi implementado para o gerenciamento de estado, o que é crucial para manter a consistência e a eficiência do aplicativo, também utilizei a persistência de dados para que ficasse salvo no local a playlist e qual música está sendo reproduzida.
  <br />
- Juntos, Vite, Tailwind e React proporcionam um ambiente de desenvolvimento eficiente, permitindo a criação de interfaces elegantes e reativas.

### Como testar

1. Clone o código do App e no diretório do projeto, execute `yarn instal`.
   <br />
2. Apos isso `yarn dev`.
