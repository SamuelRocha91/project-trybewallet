# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> TrybeWallet 项目 <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![葡萄牙语](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![西班牙语](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![英语](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![俄语](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![阿拉伯语](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![应用预览](./public/wallet.gif)

<details>
  <summary><h2>📖 描述</h2></summary>

  此项目是 Trybe 网页开发课程中前端模块的一部分。它是一个费用管理器，允许用户通过一个具有用户登录验证和财务数据操作的界面来控制自己的支出。

  该应用程序是一个管理个人支出的平台。它包含以下主要功能：
  - 带有用户和密码验证的登录页面。
  - 钱包管理页面，用户可以添加、编辑和删除支出。
  - 显示每笔注册购买数据的支出表格。
  - 完全支持 CRUD（创建、读取、更新、删除）以管理支出。

  项目的主要关注点是开发路由操作、Redux 状态管理、组件生命周期、表单集成和使用 React 测试库实现测试的技能。
</details>

<details>
  <summary><h2>🛠️ 使用的技术</h2></summary>

  - **React.js** - 用于构建用户界面。
  - **Redux** - 用于管理全局状态。
  - **JavaScript** - 编程语言。
  - **CSS/HTML** - 应用程序的样式和结构。
  - **React 测试库** - 用于单元测试。
  - **Docker** - 用于容器化应用程序。
</details>

<details>
  <summary><h2>⭐ 主要功能</h2></summary>

  - **路由操作**：使用 React Router 在登录页面和钱包管理页面之间导航。
  - **Redux**：集中管理应用程序状态，包括支出。
  - **用户验证**：登录系统的验证逻辑（用户名和密码）。
  - **支出表格**：插入、编辑和删除支出，动态表格中显示。
  - **测试**：使用 `React 测试库` 实现测试。
</details>

<details>
  <summary><h2>📂 应用程序结构</h2></summary>

  应用程序分为两个主要页面：

  1. **登录**：用户进行身份验证。
  2. **钱包**：用户可以管理他们的支出。

  支出表格显示详细信息，如支出描述、金额、支付方式、货币转换等。
</details>

<details>
  <summary><h2>🚀 启动说明</h2></summary>

  可以使用 **Docker** 简单启动该应用程序。按照以下步骤在本地环境中启动。

  ### 前提条件

  - 必须在计算机上安装 **Docker**。

  ### 启动步骤：

  1. 克隆此存储库：
     ```bash
     git clone git@github.com:SamuelRocha91/project-trybewallet.git
     ```

  2. 进入项目文件夹：
     ```bash
     cd 项目名
     ```

  3. 构建 Docker 镜像：
     ```bash
     docker build -t react_store .
     ```

  4. 运行容器：
     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  5. 在浏览器中打开应用程序：
     ```
     http://localhost:3000
     ```
</details>

<details>
  <summary><h2>📁 项目结构</h2></summary>

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

  - **Header**: 显示应用程序标题。
  - **WalletForm**: 添加新支出的表单。
  - **Table**: 显示支出，并提供编辑和删除功能。
</details>

<details>
  <summary><h2>🧪 测试</h2></summary>

  使用 **React 测试库** 实现了测试。要运行测试：

  ```bash
  npm test
  ```
</details>

<details>
  <summary><h2>🔗 其他项目</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md)
  - 🏪 [前端在线商店](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md)
</details>
