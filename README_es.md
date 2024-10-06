# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Proyecto TrybeWallet <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![Vista previa de la aplicación](./public/wallet.gif)

<details>
  <summary><h2>📖 Descripción</h2></summary>

  Este proyecto fue desarrollado como parte del módulo de Frontend del curso de Desarrollo Web de Trybe. Se trata de un organizador de gastos que permite al usuario controlar sus gastos a través de una interfaz con validación de inicio de sesión y manipulación de datos financieros.

  La aplicación consiste en una plataforma que gestiona los gastos personales. Incluye las siguientes funcionalidades principales:
  - Pantalla de inicio de sesión con validación de usuario y contraseña.
  - Página de control de cartera donde el usuario puede insertar, editar y eliminar gastos.
  - Tabla de gastos que muestra los datos de cada gasto registrado.
  - Soporte completo para CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de los gastos.

  El enfoque del proyecto fue desarrollar habilidades en la manipulación de rutas, gestión de estado con Redux, ciclo de vida de componentes, integración de formularios e implementación de pruebas con la biblioteca React Testing Library.
</details>

<details>
  <summary><h2>🛠️ Tecnologías Utilizadas</h2></summary>

  - **React.js** - para la construcción de la interfaz de usuario.
  - **Redux** - para la gestión del estado global.
  - **JavaScript** - lenguaje de programación.
  - **CSS/HTML** - estilización y estructura de la aplicación.
  - **React Testing Library** - para pruebas unitarias.
  - **Docker** - para la contenedorización de la aplicación.
</details>

<details>
  <summary><h2>⭐ Funcionalidades Principales</h2></summary>

  - **Manipulación de Rutas**: Uso de React Router para la navegación entre las páginas de inicio de sesión y control de cartera.
  - **Redux**: Gestión centralizada del estado de la aplicación, incluyendo los gastos.
  - **Validación de Usuario**: Lógica de validación para el inicio de sesión (usuario y contraseña).
  - **Tabla de Gastos**: Inserción, edición y eliminación de gastos mostrados en una tabla dinámica.
  - **Pruebas**: Implementación de pruebas utilizando la biblioteca `React Testing Library`.
</details>

<details>
  <summary><h2>📂 Estructura de la Aplicación</h2></summary>

  La aplicación está dividida en dos páginas principales:

  1. **Inicio de sesión**: Donde el usuario se autentica.
  2. **Cartera**: Donde el usuario puede gestionar sus gastos.

  La tabla de gastos muestra información detallada, como la descripción del gasto, el valor, el método de pago, la conversión de moneda, entre otros.
</details>

<details>
  <summary><h2>🚀 Instrucciones de Ejecución</h2></summary>

  La aplicación se puede ejecutar fácilmente utilizando **Docker**. Siga los pasos a continuación para ejecutarla en su entorno local.

  ### Pre-requisitos

  - **Docker** debe estar instalado en su máquina.

  ### Pasos para la ejecución:

  1. Clone este repositorio:
     ```bash
     git clone git@github.com:SamuelRocha91/project-trybewallet.git
     ```

  2. Navegue hasta la carpeta del proyecto:
     ```bash
     cd nombre-del-repositorio
     ```

  3. Construya la imagen de Docker:
     ```bash
     docker build -t react_store .
     ```

  4. Ejecute el contenedor:
     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  5. Acceda a la aplicación en el navegador:
     ```
     http://localhost:3000
     ```
</details>

<details>
  <summary><h2>📁 Estructura del Proyecto</h2></summary>

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

  ### Componentes Principales

  - **Header**: Muestra el encabezado de la aplicación.
  - **WalletForm**: Formulario para agregar nuevos gastos.
  - **Table**: Tabla de gastos con opciones para editar y eliminar gastos.
</details>

<details>
  <summary><h2>🧪 Pruebas</h2></summary>

  Las pruebas se implementaron utilizando la **React Testing Library**. Para ejecutar las pruebas:

  ```bash
  npm test
  ```
</details>

<details>
  <summary><h2>🔗 Otros proyectos</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
  - 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md)
</details>