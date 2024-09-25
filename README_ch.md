# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> TrybeWallet 项目 <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![葡萄牙语](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![西班牙语](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![英语](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![俄语](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![阿拉伯语](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![应用程序预览](./public/wallet.gif)

该项目是作为 Trybe 网页开发课程前端模块的一部分而开发的，旨在为用户提供一个管理财务的应用程序，用户可以通过登录界面管理自己的财务数据。

## 描述

该应用程序是一个个人开支管理平台，主要功能包括：
- 登录页面，验证用户名和密码。
- 钱包页面，用户可以添加、编辑和删除开支。
- 开支表格，展示所有注册开支的详细信息。
- 完整的 CRUD 功能（创建、读取、更新、删除）以管理开支。

该项目的目标是提升开发者在路由、状态管理（使用 Redux）、组件生命周期、表单集成和使用 React Testing Library 进行测试等方面的技能。

## 使用的技术

- **React.js** - 用于构建用户界面。
- **Redux** - 用于全局状态管理。
- **JavaScript** - 编程语言。
- **CSS/HTML** - 用于应用程序的格式和结构。
- **React Testing Library** - 用于编写单元测试。
- **Docker** - 用于在容器中运行应用程序。

## 主要特点

- **路由功能**：使用 React Router 实现登录页面和钱包管理页面之间的导航。
- **Redux**：集中管理应用程序状态，包括开支数据。
- **用户验证**：实现登录验证逻辑（用户名和密码）。
- **开支表格**：动态显示开支的详细信息，支持添加、编辑和删除。
- **测试**：使用 `React Testing Library` 进行测试实现。

## 应用结构

应用分为两个主要页面：

1. **登录页面**：用户在此输入凭据进行登录。
2. **钱包**：用户在此管理自己的开支。

开支表格展示了每一笔开支的详细信息，包括描述、金额、支付方式、货币等。

## 运行说明

可以使用 **Docker** 轻松运行该应用。请按照以下说明在本地环境中运行。

### 先决条件

- 需要在计算机上安装 **Docker**。

### 运行步骤：

1. 克隆此代码库：
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. 进入项目文件夹：
   ```bash
   cd repository-name
   ```

3. 构建 Docker 镜像：
   ```bash
   docker build -t react_store .
   ```

4. 运行容器：
   ```bash
   docker run -d --name react -p 3000:3000 react_store
   ```

5. 在浏览器中打开应用：
   ```
   http://localhost:3000
   ```

## 项目结构

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

### 主要组件

- **Header**: 显示应用程序的标题。
- **WalletForm**: 用于添加新开支的表单。
- **Table**: 显示开支的表格，支持数据的编辑和删除。

## 测试

使用 **React Testing Library** 执行测试。要运行测试，请执行：

```bash
npm test
```

## 其他项目

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ch.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) 

