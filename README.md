# Angular19CRUDTutorialForBeginners

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

# 📁 Project Folder Structure

โครงสร้างโฟลเดอร์ของโปรเจกต์ Angular เพื่อความเป็นระเบียบและง่ายต่อการจัดการโค้ด

## 1️⃣ **public/**

ใช้เก็บไฟล์ static ที่ต้องการเข้าถึงได้โดยตรง เช่น `favicon.ico`, รูปภาพ และไฟล์ assets อื่นๆ

```
📁 assets/ → เก็บรูปภาพ, ไอคอน, ฟอนต์ หรือไฟล์ JSON ที่ใช้ภายในแอป
⭐ favicon.ico → ไอคอนของเว็บไซต์ (ที่แสดงบนแท็บเบราว์เซอร์)
```

## 2️⃣ **assets/**

โฟลเดอร์สำหรับเก็บข้อมูลรูปภาพหรือไฟล์ที่ใช้ภายในแอป เช่น ไฟล์ไอคอน, ฟอนต์ หรือ JSON Configuration

## 3️⃣ **environments/**

โฟลเดอร์ที่ใช้สำหรับจัดการค่าคอนฟิกแยกระหว่าง Environment ต่างๆ เช่น **Development (dev)**, **Production (prod)**, **Staging**, หรือ **Testing**

## 4️⃣ **src/**

โฟลเดอร์หลักที่เก็บซอร์สโค้ดของแอป

```
📂 app/ → โฟลเดอร์หลักที่เก็บ Component, Module, Routing และ Services ของแอป
   - app.module.ts → ไฟล์หลักของโมดูลแอปพลิเคชัน
   - app.component.ts → คอมโพเนนต์หลักของแอป

📂 core/ → เก็บ Services และ Providers ที่เป็น Global (ใช้ได้ทั่วทั้งแอป)
   - auth.service.ts → จัดการ Authentication
   - http.service.ts → จัดการ HTTP Requests
   - interceptors/ → จัดการ HTTP Interceptors

📂 features/ → เก็บ Feature Modules หรือ โมดูลย่อยของแอป
   - user/ → ฟีเจอร์ที่เกี่ยวข้องกับผู้ใช้ (User Module)
   - dashboard/ → ฟีเจอร์ของ Dashboard
   - products/ → ฟีเจอร์ของสินค้า

📂 shared/ → เก็บ Reusable Components, Directives, Pipes และ Shared Modules
   - button.component.ts → ปุ่มที่ใช้ซ้ำในหลายจุด
   - modal.component.ts → Modal Dialog
   - custom.pipe.ts → Pipe ที่ใช้ในหลายจุด
```

# 📌 Angular 19 CLI Commands

## ✅ **1. สร้างโปรเจกต์ Angular**

```sh
ng new my-angular-app --style css --routing
```

- `--style css` → กำหนดให้ใช้ CSS (สามารถเปลี่ยนเป็น `scss` หรือ `less` ได้)
- `--routing` → สร้างไฟล์ routing module ให้พร้อมใช้งาน

---

## ✅ **2. รันโปรเจกต์ Angular**

```sh
ng serve
```

- ใช้ `ng serve --open` เพื่อเปิดเว็บอัตโนมัติ
- ใช้ `ng serve --port 4201` เพื่อเปลี่ยนพอร์ตเป็น 4201

---

## ✅ **3. สร้าง Component, Service, Directive และ Pipe**

### 🔹 **Component**

```sh
ng g c components/navbar --skip-tests
```

- `--skip-tests` → ไม่สร้างไฟล์ `.spec.ts`
- `--inline-style` → ใช้ inline CSS
- `--inline-template` → ใช้ inline HTML

### 🔹 **Service**

```sh
ng g s services/auth --skip-tests
```

### 🔹 **Directive**

```sh
ng g d directives/highlight --skip-tests
```

### 🔹 **Pipe**

```sh
ng g p pipes/custom-format --skip-tests
```

---

## ✅ **4. สร้าง Module และ Routing**

### 🔹 **สร้างโมดูลใหม่**

```sh
ng g m modules/admin --routing
```

- `--routing` → สร้างไฟล์ `admin-routing.module.ts`

---

## ✅ **5. สร้าง Environment Configuration**

```sh
ng build --configuration=production
```

- ค่าใน `src/environments/environment.prod.ts` จะถูกใช้
- ใช้ `ng build --configuration=staging` ถ้าต้องการ build staging

---

## ✅ **6. เพิ่มและจัดการ Dependency**

### 🔹 **ติดตั้งแพ็กเกจใหม่**

```sh
npm install axios
```

### 🔹 **ลบแพ็กเกจ**

```sh
npm uninstall axios
```

---

## ✅ **7. เช็คเวอร์ชันของ Angular และอัปเดต**

### 🔹 **ตรวจสอบเวอร์ชัน Angular CLI**

```sh
ng version
```

### 🔹 **อัปเดต Angular CLI และ Core**

```sh
ng update @angular/cli @angular/core
```

---

## ✅ **8. สร้างและรัน Unit Test**

```sh
ng test
```

- ใช้ `--watch=false` เพื่อรันแค่ครั้งเดียว
- ใช้ `ng test --code-coverage` เพื่อดูรายงาน coverage

---

## ✅ **9. สร้างและรัน E2E Test (End-to-End)**

```sh
ng e2e
```

- ต้องติดตั้ง `@angular/e2e` ก่อนถ้ายังไม่มี

---

## ✅ **10. Build และ Deploy Angular App**

### 🔹 **Build สำหรับ Production**

```sh
ng build --configuration=production
```

### 🔹 **Build และ Output ไฟล์ไปที่โฟลเดอร์ `dist/`**

```sh
ng build --output-path=dist/my-app
```

### 🔹 **Deploy บน Firebase**

```sh
ng add @angular/fire
ng deploy
```
