# Case Study: HACO CARD — AI OCR Business Card Scanner & Contact Intelligence

> **Category:** AI Computer Vision & Cloud Mobile Web App  
> **Role:** AI & Technology Developer  
> **Tools & Tech:** Google Apps Script Web App, AI Vision / OCR Engine, Entity Extraction (LLM), Mobile-First UI, Employee Auth Gate  
> **Live App:** [HACO CARD — HACO Smart Scanner](https://script.google.com/macros/s/AKfycbxWMx3SEmyPvN6GiRFDCS2j-PuGGz66TgX9sq5bERcYhaHVfESCebi14limXNFElQML/exec)  
> **Status:** Production / Implemented  

---

## 📌 Executive Summary
แอปพลิเคชัน **HACO CARD (HACO Smart Scanner)** สำหรับสแกนนามบัตรและเอกสารติดต่อธุรกิจอัจฉริยะด้วยเทคโนโลยี **Optical Character Recognition (OCR) ผสาน Generative AI** พัฒนาในรูปแบบ Cloud Web App บน Google Apps Script พร้อมระบบยืนยันตัวตนพนักงาน ช่วยสกัดข้อความจากภาพถ่ายนามบัตร (ชื่อ, เบอร์โทรศัพท์, อีเมล, บริษัท, ตำแหน่งงาน) เข้าสู่ฐานข้อมูลกลางขององค์กรโดยอัตโนมัติ

---

## 🎯 1. Situation & Problem (ปัญหาเดิมและสถานการณ์)
* **การเก็บข้อมูลนามบัตรแบบดั้งเดิมสูญหายง่าย:** พนักงานขายและทีมพัฒนาธุรกิจได้รับนามบัตรจำนวนมากจากงานสัมมนาและประชุม มักตกค้างและไม่ได้นำมาบันทึกต่อยอด
* **การพิมพ์ข้อมูลด้วยมือ (Manual Entry) เสียเวลาและสะกดผิดบ่อย:** การคีย์ชื่อ อีเมล และเบอร์โทรศัพท์ทีละใบมีความล่าช้าและเสี่ยงผิดพลาด
* **ต้องการระบบที่เปิดใช้งานผ่านมือถือได้ทันทีโดยไม่ต้องติดตั้งแอปลงเครื่อง:** พร้อมจำกัดสิทธิ์เฉพาะพนักงานภายในองค์กร

---

## 🛠️ 2. Task & Solution Architecture (เป้าหมายและการออกแบบระบบ)
พัฒนาเว็บแอปพลิเคชัน **HACO Smart Scanner** ที่ทำงานจบครบในลิงก์เดียว:
1. **Employee Security Login:** ยืนยันตัวตนด้วยรหัสพนักงานและรหัสผ่านก่อนเข้าถึงระบบเพื่อปกป้องฐานข้อมูลลูกค้า
2. **Mobile Camera Image Capture:** ถ่ายภาพนามบัตรจากหน้างานผ่านเบราว์เซอร์สมาร์ตโฟนได้ทันที
3. **Bilingual OCR & AI Entity Extraction:** สกัดตัวอักษรทั้งภาษาไทยและภาษาอังกฤษ พร้อมจัดลงฟิลด์ (ชื่อ-สกุล, บริษัท, ตำแหน่ง, เบอร์โทร, อีเมล) อัตโนมัติ
4. **Centralized Cloud Database Sync:** บันทึกข้อมูลลงฐานข้อมูลกลางบนคลาวด์ทันทีเพื่อให้ทีมงานค้นหาและติดตามต่อได้แบบเรียลไทม์

---

## 📈 3. Result & Business Impact (ผลลัพธ์เชิงธุรกิจที่วัดผลได้)
* ⚡ **ลดเวลาบันทึกข้อมูลนามบัตรจาก 2 นาทีต่อใบ เหลือเพียง 5 วินาที** (เร็วขึ้นกว่า 90%)
* 🎯 **ความแม่นยำในการแยกแยะฟิลด์ข้อมูลติดต่อสำคัญสูงถึง 95%+**
* 🤝 **เพิ่มความคล่องตัวให้ทีมหน้างาน:** ส่งมอบระบบพร้อมใช้งานจริงภายในระยะเวลาพัฒนาเพียง 6 วัน
