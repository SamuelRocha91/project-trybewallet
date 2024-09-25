# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Project TrybeWallet <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![Vista previa de la aplicación](./public/wallet.gif)

Este proyecto fue desarrollado como parte del módulo de Frontend del curso de Desarrollo Web de Trybe. Es un organizador de gastos que permite al usuario controlar sus finanzas a través de una interfaz con validación de inicio de sesión y gestión de datos financieros.

## Descripción

La aplicación es una plataforma para la gestión de gastos personales e incluye las siguientes funcionalidades principales:
- Pantalla de inicio de sesión con validación de usuario y contraseña.
- Página de control de la billetera donde el usuario puede agregar, editar y eliminar gastos.
- Tabla de gastos que muestra los datos de cada gasto registrado.
- Soporte completo de CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de gastos.

El objetivo del proyecto fue desarrollar habilidades en manejo de rutas, gestión de estado con Redux, ciclo de vida de componentes, integración de formularios e implementación de pruebas con la biblioteca React Testing Library.

## Tecnologías Utilizadas

- **React.js** - para construir la interfaz de usuario.
- **Redux** - para la gestión de estado global.
- **JavaScript** - lenguaje de programación.
- **CSS/HTML** - para el diseño y la estructura de la aplicación.
- **React Testing Library** - para las pruebas unitarias.
- **Docker** - para la contenedorización de la aplicación.

## Funcionalidades Principales

- **Manejo de Rutas**: Uso de React Router para la navegación entre las páginas de inicio de sesión y control de la billetera.
- **Redux**: Gestión centralizada del estado de la aplicación, incluyendo los gastos.
- **Validación de Usuario**: Lógica para validar el inicio de sesión (usuario y contraseña).
- **Tabla de Gastos**: Agregar, editar y eliminar gastos que se muestran en una tabla dinámica.
- **Pruebas**: Implementación de pruebas utilizando la biblioteca `React Testing Library`.

## Estructura de la Aplicación

La aplicación se divide en dos páginas principales:

1. **Inicio de Sesión**: Donde el usuario se autentica.
2. **Billetera**: Donde el usuario puede gestionar sus gastos.

La tabla de gastos muestra información detallada como la descripción del gasto, el monto, el método de pago, la conversión de moneda, entre otros.

## Instrucciones para Ejecutar

La aplicación se puede ejecutar fácilmente utilizando **Docker**. Sigue los pasos a continuación para ejecutarla en tu entorno local.

### Requisitos Previos

- **Docker** debe estar instalado en tu máquina.

### Pasos para ejecutar:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. Navega hasta la carpeta del proyecto:
   ```bash
   cd repository-name
   ```

3. Construye la imagen Docker:
   ```bash
   docker build -t react_store .
   ```

4. Ejecuta el contenedor:
   ```bash
   docker run -d --name react -p 3000:3000 react_store
   ```

5. Accede a la aplicación en el navegador:
   ```
   http://localhost:3000
   ```

## Estructura del Proyecto

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

## Pruebas

Las pruebas fueron implementadas utilizando **React Testing Library**. Para ejecutar las pruebas:

```bash
npm test
```

## Otros Proyectos

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) 

