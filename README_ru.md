# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Проект TrybeWallet <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Португальский](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![Испанский](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![Английский](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![Предварительный просмотр приложения](./public/wallet.gif)

<details>
  <summary><h2>📖 Описание</h2></summary>

  Этот проект был разработан в рамках модуля Frontend курса веб-разработки в Trybe. Это организатор расходов, который позволяет пользователю контролировать свои расходы через интерфейс с проверкой входа и манипуляцией финансовыми данными.

  Приложение представляет собой платформу для управления личными расходами. Оно включает в себя следующие основные функции:
  - Страница входа с проверкой пользователя и пароля.
  - Страница управления кошельком, где пользователь может добавлять, редактировать и удалять расходы.
  - Таблица расходов, отображающая данные о каждой зарегистрированной покупке.
  - Полная поддержка CRUD (Создать, Читать, Обновить, Удалить) для управления расходами.

  Основное внимание в проекте было уделено развитию навыков манипуляции маршрутами, управления состоянием с Redux, жизненного цикла компонентов, интеграции форм и реализации тестов с использованием библиотеки React Testing Library.
</details>

<details>
  <summary><h2>🛠️ Используемые технологии</h2></summary>

  - **React.js** - для построения пользовательского интерфейса.
  - **Redux** - для управления глобальным состоянием.
  - **JavaScript** - язык программирования.
  - **CSS/HTML** - стилизация и структура приложения.
  - **React Testing Library** - для юнит-тестирования.
  - **Docker** - для контейнеризации приложения.
</details>

<details>
  <summary><h2>⭐ Основные функции</h2></summary>

  - **Манипуляция маршрутами**: Использование React Router для навигации между страницами входа и управления кошельком.
  - **Redux**: Централизованное управление состоянием приложения, включая расходы.
  - **Проверка пользователя**: Логика проверки для входа в систему (пользователь и пароль).
  - **Таблица расходов**: Вставка, редактирование и удаление расходов, отображаемых в динамической таблице.
  - **Тестирование**: Реализация тестов с использованием библиотеки `React Testing Library`.
</details>

<details>
  <summary><h2>📂 Структура приложения</h2></summary>

  Приложение делится на две основные страницы:

  1. **Вход в систему**: Где пользователь аутентифицируется.
  2. **Кошелек**: Где пользователь может управлять своими расходами.

  Таблица расходов показывает подробную информацию, такую как описание расхода, сумма, способ оплаты, конверсия валюты и т. д.
</details>

<details>
  <summary><h2>🚀 Инструкции по запуску</h2></summary>

  Приложение можно легко запустить с помощью **Docker**. Следуйте приведенным ниже шагам, чтобы запустить его в локальной среде.

  ### Предварительные требования

  - **Docker** должен быть установлен на вашем компьютере.

  ### Шаги для запуска:

  1. Клонируйте этот репозиторий:
     ```bash
     git clone git@github.com:SamuelRocha91/project-trybewallet.git
     ```

  2. Перейдите в папку проекта:
     ```bash
     cd имя-репозитория
     ```

  3. Постройте образ Docker:
     ```bash
     docker build -t react_store .
     ```

  4. Запустите контейнер:
     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  5. Откройте приложение в браузере:
     ```
     http://localhost:3000
     ```
</details>

<details>
  <summary><h2>📁 Структура проекта</h2></summary>

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

  ### Основные компоненты

  - **Header**: Отображает заголовок приложения.
  - **WalletForm**: Форма для добавления новых расходов.
  - **Table**: Таблица расходов с возможностями редактирования и удаления.
</details>

<details>
  <summary><h2>🧪 Тестирование</h2></summary>

  Тесты были реализованы с использованием **React Testing Library**. Чтобы запустить тесты:

  ```bash
  npm test
  ```
</details>

<details>
  <summary><h2>🔗 Другие проекты</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md)
  - 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md)
</details>