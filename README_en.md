# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Project TrybeWallet <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![Preview of the application](./public/wallet.gif)

<details>
  <summary><h2>📖 Description</h2></summary>

  This project was developed as part of the Frontend module of the Trybe Web Development course. It is an expense organizer that allows users to manage their spending through an interface with login validation and financial data manipulation.

  The application consists of a platform that manages personal expenses. It includes the following main features:
  - Login screen with user and password validation.
  - Wallet control page where users can add, edit, and delete expenses.
  - Expense table displaying data for each recorded expense.
  - Full CRUD support (Create, Read, Update, Delete) for managing expenses.

  The focus of the project was to develop skills in routing manipulation, state management with Redux, component lifecycle, form integration, and implementing tests with the React Testing Library.
</details>

<details>
  <summary><h2>🛠️ Technologies Used</h2></summary>

  - **React.js** - for building the user interface.
  - **Redux** - for global state management.
  - **JavaScript** - programming language.
  - **CSS/HTML** - for styling and structuring the application.
  - **React Testing Library** - for unit testing.
  - **Docker** - for containerizing the application.
</details>

<details>
  <summary><h2>⭐ Main Features</h2></summary>

  - **Routing Manipulation**: Use of React Router for navigation between the login and wallet control pages.
  - **Redux**: Centralized management of the application's state, including expenses.
  - **User Validation**: Logic for login validation (user and password).
  - **Expense Table**: Insertion, editing, and deletion of expenses displayed in a dynamic table.
  - **Tests**: Implementation of tests using the `React Testing Library`.
</details>

<details>
  <summary><h2>📂 Application Structure</h2></summary>

  The application is divided into two main pages:

  1. **Login**: Where the user authenticates.
  2. **Wallet**: Where the user can manage their expenses.

  The expense table shows detailed information, such as expense description, amount, payment method, currency conversion, among others.
</details>

<details>
  <summary><h2>🚀 Execution Instructions</h2></summary>

  The application can be easily run using **Docker**. Follow the steps below to run it in your local environment.

  ### Prerequisites

  - **Docker** must be installed on your machine.

  ### Steps to run:

  1. Clone this repository:
     ```bash
     git clone git@github.com:SamuelRocha91/project-trybewallet.git
     ```

  2. Navigate to the project folder:
     ```bash
     cd project-trybewallet
     ```

  3. Build the Docker image:
     ```bash
     docker build -t react_store .
     ```

  4. Run the container:
     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  5. Access the application in your browser:
     ```
     http://localhost:3000
     ```
</details>

<details>
  <summary><h2>📁 Project Structure</h2></summary>

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
  ├── Dockerfile
  ├── package.json
  └── README.md
  ```

  ### Main Components

  - **Header**: Displays the application header.
  - **WalletForm**: Form for adding new expenses.
  - **Table**: Expense table with options to edit and delete expenses.
</details>

<details>
  <summary><h2>🧪 Tests</h2></summary>

  Tests were implemented using the **React Testing Library**. To run the tests:

  ```bash
  npm test
  ```
</details>

<details>
  <summary><h2>🔗 Other Projects</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_en.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md)
  - 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md)
</details>
