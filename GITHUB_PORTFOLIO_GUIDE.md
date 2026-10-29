# 🚀 คู่มือการใช้งานและนำ Portfolio (React + Modern UI Libraries) ขึ้น GitHub Pages

> **อัปเกรดเป็นเวอร์ชัน 2.0 สำหรับคุณฟอร์ด (AI & Technology)**  
> พัฒนาด้วยชุด Library มาตรฐานสากล: **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Recharts + Lucide Icons**  
> พร้อมปกป้องข้อมูลความลับของบริษัทบนภาพแดชบอร์ด Power BI 100%

---

## 📁 1. โครงสร้างไฟล์ทั้งหมดในโปรเจกต์นี้

```text
ผลลงาน Port forlio/
├── website/                        # ซอร์สโค้ดเว็บไซต์ React + Vite ทั้งหมด
│   ├── public/assets/              # รูปภาพผลงานจริงทั้งหมด (รวมภาพ Power BI ที่เบลอข้อมูลลับแล้ว)
│   ├── src/
│   │   ├── data/portfolioData.ts   # ข้อมูลโปรเจกต์ทั้ง 5 ชิ้น + ข้อมูลจำลองกราฟ BI
│   │   ├── components/             # คอมโพเนนต์แยกส่วน (Navbar, Hero, Projects, PowerBISandbox, Modal ฯลฯ)
│   │   ├── App.tsx                 # หน้าหลักของแอปพลิเคชัน
│   │   └── index.css               # ตั้งค่า Tailwind CSS และธีม Dark Aurora Glassmorphism
│   ├── dist/                       # ✅ ไฟล์ที่ Build เสร็จพร้อมอัปโหลดขึ้น GitHub Pages ได้ทันที!
│   └── package.json                # รายการ Library ทั้งหมด
├── projects/                       # เอกสาร Case Study เชิงลึกแบบ STAR Method ทั้ง 5 โครงการ (.md)
├── profile-readme/README.md        # โค้ดสำหรับวางในหน้า GitHub Profile แนะนำตัว
└── ระบบส่วนงานของฟอร์ด.xlsx         # ไฟล์ตารางงานต้นฉบับ (ไม่ถูกแก้ไขใดๆ)
```

---

## 💻 2. วิธีรันดูและแก้ไขเว็บไซต์ในเครื่องตัวเอง (Local Development)

หากต้องการเปิดโหมดแก้ไขโค้ดแบบเห็นผลทันที (Hot Reload):
1. เปิด Terminal ในโฟลเดอร์ `website`
2. รันคำสั่ง:
   ```bash
   npm run dev
   ```
3. เปิดลิงก์ `http://localhost:5173` ในเบราว์เซอร์
4. เมื่อแก้ไขข้อมูลเสร็จแล้ว (เช่น เปลี่ยนอีเมลจริงใน `website/src/components/SkillsAndContact.tsx`) ให้รันคำสั่งสร้างไฟล์สำหรับขึ้นเว็บจริง:
   ```bash
   npm run build
   ```
   ระบบจะอัปเดตไฟล์พร้อมใช้งานไว้ในโฟลเดอร์ `website/dist/` โดยอัตโนมัติ

---

## 🌐 3. วิธีนำเว็บไซต์ขึ้น GitHub Pages ฟรี (ง่ายที่สุดใน 3 นาที)

เนื่องจากโปรเจกต์ตั้งค่า `base: './'` และทำการ **Build ไว้ให้เรียบร้อยแล้วในโฟลเดอร์ `website/dist/`** คุณฟอร์ดสามารถลากไฟล์ขึ้น GitHub Pages ได้ทันที:

1. สร้าง Repository ใหม่บน GitHub ชื่อ **`portfolio`** (เลือกเป็น **Public**)
2. คลิก **uploading an existing file**
3. เปิดเข้าไปในโฟลเดอร์ **`website/dist/`** ในเครื่องคอมพิวเตอร์ แล้วลากไฟล์และโฟลเดอร์ข้างในทั้งหมด (`index.html`, โฟลเดอร์ `assets/`) ไปวางในหน้าเว็บ GitHub แล้วกด **Commit changes**
4. ไปที่แท็บ **Settings** → เมนูซ้าย **Pages** → หัวข้อ **Branch** เลือกเป็น `main` โฟลเดอร์ `/ (root)` → กด **Save**
5. รอ 1–2 นาที เว็บไซต์ React Portfolio สุดพรีเมียมจะออนไลน์ที่ `https://<your-username>.github.io/portfolio/` ทันที! 🎉

---

## 🔒 4. มาตรฐานการปกป้องข้อมูลความลับ (Data Privacy Verification)

* **ไม่มีการฝังลิงก์ Power BI ดิบในซอร์สโค้ดหน้าเว็บ:** ป้องกันผู้เข้าชมหรือผู้กด Inspect โค้ดเข้าไปเปิดดูยอดขายและรายชื่อลูกค้าจริงบนเซิร์ฟเวอร์
* **ภาพหน้าจอจริงผ่านการ Pixelate + Gaussian Blur ถาวร:** ทั้งไฟล์ `pbi-multiyear-masked.png` และ `pbi-smart-life-masked.png` ได้เบลอตัวเลขยอดขาย ชื่อกลุ่มสินค้า ชื่อบริษัทคู่ค้า และชื่อพนักงานขายทั้งหมดเรียบร้อยแล้ว
* **Interactive BI Sandbox ใช้ข้อมูลจำลอง (Simulated Index):** ผู้สัมภาษณ์งานสามารถทดลองกดกรอง Quarter และกลุ่มสินค้าจำลองบนกราฟ **Recharts** ได้อย่างลื่นไหลโดยไม่กระทบข้อมูลจริงของบริษัท
