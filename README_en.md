# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Project TrybeWallet <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![Application Preview](./public/wallet.gif)

This project was developed as part of the Frontend module of Trybe's Web Development course. It is an expense organizer that allows users to manage their spending through an interface with login validation and financial data management.

## Description

The application is a personal expense management platform that includes the following main features:
- Login screen with user and password validation.
- Wallet control page where users can add, edit, and delete expenses.
- Expense table that displays data for each recorded expense.
- Full CRUD support (Create, Read, Update, Delete) for managing expenses.

The focus of the project was to develop skills in route handling, state management with Redux, component lifecycle, form integration, and testing with React Testing Library.

## Technologies Used

- **React.js** - for building the user interface.
- **Redux** - for global state management.
- **JavaScript** - programming language.
- **CSS/HTML** - for application styling and structure.
- **React Testing Library** - for unit testing.
- **Docker** - for containerizing the application.

## Main Features

- **Route Handling**: Using React Router for navigating between the login and wallet control pages.
- **Redux**: Centralized state management, including the handling of expenses.
- **User Validation**: Logic for user login validation (username and password).
- **Expense Table**: Adding, editing, and deleting expenses displayed in a dynamic table.
- **Testing**: Implementation of tests using `React Testing Library`.

## Application Structure

The application is divided into two main pages:

1. **Login**: Where users authenticate.
2. **Wallet**: Where users can manage their expenses.

The expense table shows detailed information such as expense description, amount, payment method, currency conversion, and more.

## Execution Instructions

The application can easily be run using **Docker**. Follow the steps below to run it in your local environment.

### Prerequisites

- **Docker** must be installed on your machine.

### Steps to run:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. Navigate to the project folder:
   ```bash
   cd repository-name
   ```

3. Build the Docker image:
   ```bash
   docker build -t react_store .
   ```

4. Run the container:
   ```bash
   docker run -d --name react -p 3000:3000 react_store
   ```

5. Access the application in the browser:
   ```
   http://localhost:3000
   ```

## Project Structure

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

## Tests

The tests were implemented using **React Testing Library**. To run the tests:

```bash
npm test
```

## Other Projects

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_en.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) 

