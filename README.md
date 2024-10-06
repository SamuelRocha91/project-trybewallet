# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Project TrybeWallet <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![Preview da aplicação](./public/wallet.gif)

<details>
  <summary><h2>📖 Descrição</h2></summary>

  Este projeto foi desenvolvido como parte do módulo de Frontend do curso de Desenvolvimento Web da Trybe. Trata-se de um organizador de despesas que permite ao usuário controlar seus gastos através de uma interface com validação de login e manipulação de dados financeiros.

  A aplicação consiste em uma plataforma que gerencia despesas pessoais. Inclui as seguintes funcionalidades principais:
  - Tela de login com validação de usuário e senha.
  - Página de controle de carteira onde o usuário pode inserir, editar e excluir gastos.
  - Tabela de gastos que exibe os dados de cada despesa registrada.
  - Suporte a CRUD completo (Create, Read, Update, Delete) para o gerenciamento das despesas.

  O foco do projeto foi desenvolver habilidades em manipulação de rotas, gerenciamento de estado com Redux, ciclo de vida de componentes, integração de formulários e implementação de testes com a biblioteca React Testing Library.
</details>

<details>
  <summary><h2>🛠️ Tecnologias Utilizadas</h2></summary>

  - **React.js** - para a construção da interface de usuário.
  - **Redux** - para o gerenciamento de estado global.
  - **JavaScript** - linguagem de programação.
  - **CSS/HTML** - estilização e estrutura da aplicação.
  - **React Testing Library** - para testes unitários.
  - **Docker** - para containerização da aplicação.
</details>

<details>
  <summary><h2>⭐ Funcionalidades Principais</h2></summary>

  - **Manipulação de Rotas**: Uso de React Router para a navegação entre as páginas de login e controle de carteira.
  - **Redux**: Gerenciamento centralizado do estado da aplicação, incluindo as despesas.
  - **Validação de Usuário**: Lógica de validação para login (usuário e senha).
  - **Tabela de Gastos**: Inserção, edição e deleção de despesas exibidas em uma tabela dinâmica.
  - **Testes**: Implementação de testes utilizando a biblioteca `React Testing Library`.
</details>

<details>
  <summary><h2>📂 Estrutura da Aplicação</h2></summary>

  A aplicação está dividida em duas páginas principais:

  1. **Login**: Onde o usuário faz a autenticação.
  2. **Carteira**: Onde o usuário pode gerenciar suas despesas.

  A tabela de despesas mostra informações detalhadas, como descrição do gasto, valor, método de pagamento, conversão de moeda, entre outras.
</details>

<details>
  <summary><h2>🚀 Instruções de Execução</h2></summary>

  A aplicação pode ser facilmente executada utilizando **Docker**. Siga os passos abaixo para rodá-la em seu ambiente local.

  ### Pré-requisitos

  - **Docker** deve estar instalado em sua máquina.

  ### Passos para execução:

  1. Clone este repositório:
     ```bash
     git clone git@github.com:SamuelRocha91/project-trybewallet.git
     ```

  2. Navegue até a pasta do projeto:
     ```bash
     cd nome-do-repositorio
     ```

  3. Construa a imagem Docker:
     ```bash
     docker build -t react_store .
     ```

  4. Execute o container:
     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  5. Acesse a aplicação no navegador:
     ```
     http://localhost:3000
     ```
</details>

<details>
  <summary><h2>📁 Estrutura do Projeto</h2></summary>

  ```bash
  .
  ├── src
  │   ├── components
  │   ├── pages
  │   ├── store
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── public
  ├── DockerfileAs seções agora seguem o padrão que você indicou, utilizando `<details>`, `<summary>` e `<h2>` para organizar o conteúdo.
  ├── package.json
  └── README.md
  ```

  ### Componentes Principais

  - **Header**: Mostra o cabeçalho da aplicação.
  - **WalletForm**: Formulário para adicionar novas despesas.
  - **Table**: Tabela de gastos com opções de editar e excluir despesas.
</details>

<details>
  <summary><h2>🧪 Testes</h2></summary>

  Os testes foram implementados utilizando a **React Testing Library**. Para rodar os testes:

  ```bash
  npm test
  ```
</details>

<details>
  <summary><h2>🔗 Outros projetos</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex)
  - 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store)
</details>