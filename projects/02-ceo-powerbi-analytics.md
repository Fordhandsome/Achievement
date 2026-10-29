# Case Study: Executive Multi-Year Sales & Operations Analytics Dashboard

> **Category:** Executive Business Intelligence (BI) & Financial Analytics  
> **Role:** AI & Technology / BI Solutions Developer  
> **Tools & Tech:** Microsoft Power BI, DAX (Data Analysis Expressions), Star Schema Modeling, Power Query, Automated Refresh  
> **Status:** Production / Implemented for Executive Leadership  

---

## 📌 Executive Summary
โครงการพัฒนาแดชบอร์ดสรุปผลการดำเนินงานและยอดขายระดับผู้บริหารสูงสุด (**CEO & Executive Leadership Dashboard**) โดยเชื่อมโยงฐานข้อมูลการขายและรายการสินค้าข้ามปี (2024, 2025 และ 2026) เข้าสู่โมเดล **Power BI Star Schema** พร้อมสูตรคำนวณ **Advanced DAX** เพื่อวิเคราะห์การเติบโตแบบเทียบปีต่อปี (**Year-over-Year: YoY % / YoY Δ**), จำแนกผลงานตามฝ่าย/แผนก (Department Performance), และวิเคราะห์โครงสร้างกลุ่มสินค้า (Item Main & Sub Groups) แบบเจาะลึกได้ในคลิกเดียว

---

## 🎯 1. Situation & Problem (ปัญหาเดิมและสถานการณ์)
* **ข้อมูลกระจัดกระจายหลายปีบัญชี:** ยอดขายและข้อมูลธุรกรรมแยกเก็บคนละก้อน ทำให้การเปรียบเทียบผลการดำเนินงานข้ามปี (2024 vs 2025 vs 2026) ต้องใช้เวลาตัดต่อข้อมูลลง Spreadsheet เป็นเวลานาน
* **ขาดมุมมองสรุปภาพรวมสำหรับผู้บริหาร (Executive Overview):** CEO และผู้บริหารระดับสูงต้องการทราบทันทีว่า "แผนกใดทำผลงานเติบโตหรือชะลอตัว", "กลุ่มสินค้าใดเป็นตัวขับเคลื่อนยอดขายหลัก", และ "ตัวเลขเทียบกับเป้าหมายเป็นอย่างไร" แต่รายงานแบบเดิมเป็นตารางตัวเลขละเอียดเกินไป ไม่ตอบโจทย์การตัดสินใจเชิงกลยุทธ์
* **ความล่าช้าในการออกรายงานประจำเดือน:** ต้องรอรอบบัญชีปิดสิ้นเดือน ทำให้ผู้บริหารมองไม่เห็นแนวโน้มความเสี่ยงของยอดขายระหว่างทาง

---

## 🛠️ 2. Task & Solution Architecture (เป้าหมายและการออกแบบระบบ)
ออกแบบและสร้างโมเดลข้อมูลระดับองค์กรบน Power BI ที่รวมข้อมูลทุกปีเข้าสู่โมเดลกลาง:
1. **Unified Enterprise Data Model:** ผสานตารางข้อมูลยอดขาย (Sales Fact Tables: 2024, 2025, 2026) เข้ากับตารางมิติเวลาส่วนกลาง (**DimDate**) เพื่อให้สามารถสไลซ์ดูแนวโน้มรายเดือนและรายไตรมาสได้อย่างต่อเนื่อง
2. **Advanced DAX Comparative Engine:** พัฒนาตัวชี้วัดอัตราเติบโตและส่วนต่าง:
   - `Total Sales = SUM(Sale[NetLineTotal])`
   - `Value Difference = [Value 2026] - [Value 2025]`
   - `Percentage Difference = DIVIDE([Value Difference], [Value 2025], 0)`
   - `YoY % (context)` และ `YoY Δ (context)`
   - Dynamic Status Icons & Conditional Formatting Color Measures
3. **Executive Multi-Level Drill-Down UI:**
   - **Level 1 (Company Wide):** ยอดขายรวมทั้งบริษัท, % การเติบโตเทียบปีก่อน, และสถานะ KPI รวม
   - **Level 2 (Department Breakdown):** ประสิทธิภาพรายแผนก และสัดส่วนส่วนแบ่งยอดขาย
   - **Level 3 (Product Hierarchy):** เจาะลึกตาม Main Group $\rightarrow$ Sub Group $\rightarrow$ Individual Item SKU
4. **Automated Last-Refresh Timestamp:** แสดงเวลาที่ข้อมูลได้รับการอัปเดตล่าสุด สร้างความมั่นใจแก่ผู้บริหารว่าตัวเลขเป็นปัจจุบันเสมอ

```
[ Multi-Year Sales Datasets (2024 / 2025 / 2026) ]
                         ↓
  [ Star Schema Modeling + Central DimDate Hierarchy ]
                         ↓
  [ Advanced DAX Measures: YoY %, YoY Δ, Variance ]
                         ↓
[ Executive Power BI Dashboard: Interactive Web & Mobile ]
```

---

## 🚀 3. Action & Implementation (ขั้นตอนการลงมือปฏิบัติ)
* **การออกแบบ Data Model แบบ Star Schema:** เชื่อมตาราง Fact เข้ากับ Date Dimension และ Product Dimension เพื่อรักษาความเร็วในการ Query และรองรับชุดข้อมูลขนาดใหญ่
* **การสร้าง Dynamic Context Measures ใน DAX:** ใช้ฟังก์ชัน `CALCULATE()`, `FILTER()`, `DIVIDE()`, และฟังก์ชัน Time Intelligence เพื่อให้กราฟและการ์ดตัวเลขเปลี่ยนค่าอย่างแม่นยำตาม Slicer ที่ผู้บริหารคลิกเลือก
* **การออกแบบ Data Storytelling สำหรับ C-Level:** ใช้โทนสีมินิมอล อ่านง่าย ใช้สีเขียว-แดง สำหรับแสดงสถานะการเติบโตหรือติดลบอย่างชัดเจน ช่วยให้ทราบจุดที่ต้องโฟกัสได้ภายใน 5 วินาที
* **การกำหนด Bookmark & Navigation:** สร้างปุ่มสลับมุมมองเปรียบเทียบปี 2025 vs 2026 และระบบกรองเฉพาะแผนกที่สนใจได้อย่างสะดวก

---

## 📈 4. Result & Business Impact (ผลลัพธ์เชิงธุรกิจที่วัดผลได้)
* ⚡ **ลดเวลาสรุปรายงานผู้บริหารจาก 1-2 สัปดาห์ เหลือเพียงแบบเรียลไทม์ (On-Demand)**
* 🎯 **การตัดสินใจของผู้บริหารรวดเร็วขึ้น:** CEO สามารถคลิกดูสาเหตุที่ยอดขายบางกลุ่มสินค้าตก หรือแผนกที่ทำผลงานโดดเด่นได้ทันทีในระหว่างการประชุม
* 📊 **เห็นแนวโน้ม YoY ได้ชัดเจน:** ตรวจพบและแก้ปัญหาในสายผลิตภัณฑ์ที่เติบโตช้าได้ล่วงหน้าก่อนสิ้นไตรมาส
* 📱 **รองรับการเข้าถึงผ่าน Power BI Service & Mobile:** ผู้บริหารสามารถเปิดดูตัวเลขสำคัญผ่านแท็บเล็ตได้ทุกที่ทุกเวลา

---

## 💡 Key Takeaway & Skills Demonstrated
> "Dashboard ที่ดีสำหรับผู้บริหารระดับสูง ไม่ใช่การนำข้อมูลทั้งหมดมากองไว้บนหน้าจอ แต่คือการคัดกรองสัญญาณสำคัญ (Signal) ออกจากสัญญาณรบกวน (Noise) ผ่านสูตรคำนวณ YoY ที่แม่นยำ เพื่อให้ผู้บริหารมองเห็นปัญหาและโอกาสได้ในพริบตา"
