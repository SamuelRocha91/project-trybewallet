# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="شعار Trybe" width="42" height="30" /> مشروع TrybeWallet <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="شعار Trybe" width="42" height="30" />

## 🌐 [![البرتغالية](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README.md) [![الإسبانية](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md) [![الإنجليزية](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md) [![الروسية](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md) [![الصينية](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

![معاينة التطبيق](./public/wallet.gif)

<details>
  <summary><h2>📖 الوصف</h2></summary>

  هذا المشروع هو جزء من دورة تطوير الويب في Trybe. إنه مدير نفقات يسمح للمستخدمين بالتحكم في نفقاتهم من خلال واجهة تتضمن التحقق من تسجيل الدخول وعمليات البيانات المالية.

  التطبيق عبارة عن منصة لإدارة النفقات الشخصية. يتضمن الوظائف الرئيسية التالية:
  - صفحة تسجيل دخول مع التحقق من المستخدم وكلمة المرور.
  - صفحة إدارة المحفظة حيث يمكن للمستخدمين إضافة وتحرير وحذف النفقات.
  - جدول نفقات يعرض بيانات كل عملية شراء مسجلة.
  - دعم كامل لعمليات CRUD (إنشاء، قراءة، تحديث، حذف) لإدارة النفقات.

  التركيز الرئيسي للمشروع هو تطوير عمليات التوجيه، وإدارة حالة Redux، ودورة حياة المكونات، وتكامل النماذج، واستخدام مكتبة اختبار React لتنفيذ الاختبارات.
</details>

<details>
  <summary><h2>🛠️ التقنيات المستخدمة</h2></summary>

  - **React.js** - لبناء واجهات المستخدم.
  - **Redux** - لإدارة الحالة العالمية.
  - **JavaScript** - لغة البرمجة.
  - **CSS/HTML** - تنسيق وبنية التطبيق.
  - **مكتبة اختبار React** - للاختبارات الوحدوية.
  - **Docker** - لتعبئة التطبيق.
</details>

<details>
  <summary><h2>⭐ الميزات الرئيسية</h2></summary>

  - **عمليات التوجيه**: التنقل بين صفحة تسجيل الدخول وصفحة إدارة المحفظة باستخدام React Router.
  - **Redux**: إدارة حالة التطبيق بشكل مركزي، بما في ذلك النفقات.
  - **التحقق من المستخدم**: منطق التحقق من النظام عند تسجيل الدخول (اسم المستخدم وكلمة المرور).
  - **جدول النفقات**: إدراج وتحرير وحذف النفقات، وعرضها في جدول ديناميكي.
  - **الاختبار**: تنفيذ الاختبارات باستخدام `مكتبة اختبار React`.
</details>

<details>
  <summary><h2>📂 هيكل التطبيق</h2></summary>

  يتكون التطبيق من صفحتين رئيسيتين:

  1. **تسجيل الدخول**: المستخدم يقوم بالتحقق من هويته.
  2. **المحفظة**: يمكن للمستخدم إدارة نفقاته.

  يعرض جدول النفقات تفاصيل مثل وصف النفقات، المبلغ، وسيلة الدفع، تحويل العملة، وغيرها.
</details>

<details>
  <summary><h2>🚀 تعليمات التشغيل</h2></summary>

  يمكن تشغيل هذا التطبيق بسهولة باستخدام **Docker**. اتبع الخطوات التالية لتشغيله في بيئة محلية.

  ### المتطلبات

  - يجب تثبيت **Docker** على جهاز الكمبيوتر.

  ### خطوات التشغيل:

  1. استنساخ هذا المستودع:
     ```bash
     git clone git@github.com:SamuelRocha91/project-trybewallet.git
     ```

  2. الانتقال إلى مجلد المشروع:
     ```bash
     cd اسم_المشروع
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
</details>

<details>
  <summary><h2>📁 هيكل المشروع</h2></summary>

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
  - **Table**: يعرض النفقات، ويوفر وظائف التحرير والحذف.
</details>

<details>
  <summary><h2>🧪 الاختبار</h2></summary>

  تم تنفيذ الاختبارات باستخدام **مكتبة اختبار React**. لتشغيل الاختبارات:

  ```bash
  npm test
  ```
</details>

<details>
  <summary><h2>🔗 مشاريع أخرى</h2></summary>

  - 🌶️ [تطبيق الوصفات](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)
  - 🎮 [تريفيا](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)
  - 🐣 [بودكاست](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)
  - 🏪 [متجر إلكتروني للواجهة الأمامية](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)
</details>
