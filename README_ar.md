# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> مشروع TrybeWallet <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![معاينة التطبيق](./public/wallet.gif)

تم تطوير هذا المشروع كجزء من وحدة الواجهة الأمامية في دورة تطوير الويب في Trybe. إنه منظم لإدارة النفقات، يتيح للمستخدمين التحكم في شؤونهم المالية من خلال واجهة تسجيل دخول وإدارة البيانات المالية.

## الوصف

يمثل التطبيق منصة لإدارة النفقات الشخصية ويتضمن الميزات الأساسية التالية:
- صفحة تسجيل دخول مع تحقق من اسم المستخدم وكلمة المرور.
- صفحة المحفظة حيث يمكن للمستخدم إضافة وتعديل وحذف النفقات.
- جدول النفقات الذي يعرض البيانات الخاصة بكل نفقات مسجلة.
- وظيفة CRUD كاملة (إنشاء، قراءة، تحديث، حذف) لإدارة النفقات.

كان الهدف من المشروع هو تطوير مهارات العمل مع المسارات، وإدارة الحالة باستخدام Redux، ودورة حياة المكونات، وتكامل النماذج، وتنفيذ الاختبارات باستخدام مكتبة React Testing Library.

## التقنيات المستخدمة

- **React.js** - لإنشاء واجهة المستخدم.
- **Redux** - لإدارة الحالة العالمية.
- **JavaScript** - لغة البرمجة.
- **CSS/HTML** - لتنسيق وبنية التطبيق.
- **React Testing Library** - لكتابة الاختبارات الوحدوية.
- **Docker** - لتشغيل التطبيق في حاويات.

## الميزات الرئيسية

- **العمل مع المسارات**: استخدام React Router للتنقل بين صفحات تسجيل الدخول وإدارة المحفظة.
- **Redux**: إدارة الحالة المركزية للتطبيق، بما في ذلك النفقات.
- **التحقق من المستخدم**: منطق للتحقق من تسجيل الدخول (اسم المستخدم وكلمة المرور).
- **جدول النفقات**: إضافة وتعديل وحذف النفقات المعروضة في جدول ديناميكي.
- **الاختبارات**: تنفيذ الاختبارات باستخدام مكتبة `React Testing Library`.

## هيكل التطبيق

ينقسم التطبيق إلى صفحتين رئيسيتين:

1. **صفحة تسجيل الدخول**: حيث يقوم المستخدم بإدخال بيانات اعتماده لتسجيل الدخول.
2. **المحفظة**: حيث يمكن للمستخدم إدارة نفقاته.

يعرض جدول النفقات معلومات مفصلة عن كل نفقة، بما في ذلك الوصف، والمبلغ، وطريقة الدفع، والعملات، وغيرها من التفاصيل.

## تعليمات التشغيل

يمكن تشغيل التطبيق بسهولة باستخدام **Docker**. اتبع التعليمات أدناه لتشغيله في بيئتك المحلية.

### المتطلبات الأساسية

- يجب أن يكون لديك **Docker** مثبتًا على جهاز الكمبيوتر الخاص بك.

### خطوات التشغيل:

1. استنساخ هذا المستودع:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. انتقل إلى مجلد المشروع:
   ```bash
   cd repository-name
   ```

3. بناء صورة Docker:
   ```bash
   docker build -t react_store .
   ```

4. تشغيل الحاوية:
   ```bash
   docker run -d --name react -p 3000:3000 react_store
   ```

5. افتح التطبيق في المتصفح:
   ```
   http://localhost:3000
   ```

## هيكل المشروع

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

### المكونات الرئيسية

- **Header**: يعرض عنوان التطبيق.
- **WalletForm**: نموذج لإضافة نفقات جديدة.
- **Table**: جدول النفقات مع إمكانية تعديل وحذف البيانات.

## الاختبار

تم تنفيذ الاختبارات باستخدام **React Testing Library**. لتشغيل الاختبارات:

```bash
npm test
```

## مشاريع أخرى

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md) 

