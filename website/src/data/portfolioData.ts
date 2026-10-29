export type ProjectCategory = 'all' | 'webapp' | 'dashboard' | 'ai-it';

export interface GalleryItem {
  src: string;
  caption: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: Exclude<ProjectCategory, 'all'>;
  coverImage?: string;
  coverFit?: 'cover' | 'contain';
  gallery: GalleryItem[];
  shortDesc: string;
  impactSummary: string;
  metrics: { label: string; value: string }[];
  situation: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl?: string;
  liveLabel?: string;
  privacyNote?: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'sop-generator',
    title: 'เว็บสร้างเอกสาร SOP อัตโนมัติ & ประทับตราดิจิทัล',
    subtitle: 'แก้ปัญหาการเดินเอกสารกระดาษ เปลี่ยนมาทำฟอร์มและตรวจอนุมัติผ่านเว็บ 100%',
    badge: 'Web App • Paperless',
    category: 'webapp',
    coverImage: 'assets/sop-web-generator-full.png',
    gallery: [
      {
        src: 'assets/sop-web-generator-full.png',
        caption: 'หน้าเว็บกรอกข้อมูล SOP 5 ขั้นตอน มีตัวนับความครบถ้วน 100% ก่อนกดดาวน์โหลดเป็นไฟล์ Word'
      },
      {
        src: 'assets/sop-web-audit-full.png',
        caption: 'หน้าตรวจอนุมัติ: ระบบช่วยเช็กว่ามีลายเซ็นครบ 3 ช่องไหม ฟอร์มครบไหม และมีคำผิดหรือเปล่า ก่อนปั๊มตราให้'
      },
      {
        src: 'assets/sop-web-library-full.png',
        caption: 'หน้าคลังเอกสาร SOP แยกโฟลเดอร์ตามแผนก พนักงานเข้ามาค้นหาไฟล์ล่าสุดได้เอง'
      },
      {
        src: 'assets/sop-web-stamped-pdf.png',
        caption: 'ตัวอย่างไฟล์ PDF ที่ตรวจผ่านแล้ว ระบบจะฝังตราประทับ SOP APPROVED สีแดงให้อัตโนมัติ'
      },
      {
        src: 'assets/sop-jmeter-100users.png',
        caption: 'ผลยิงทดสอบระบบด้วย JMeter ลองจำลองคนเข้าใช้งานพร้อมกัน 100 คน ระบบไม่ล่ม (ผ่าน 100%)'
      }
    ],
    shortDesc:
      'ออกแบบฟอร์มและทำเว็บไซต์ให้พนักงานเข้ามาพิมพ์เอกสาร SOP ตามขั้นตอน มีระบบช่วยตรวจลายเซ็นครบ 3 ช่อง เช็กคำผิด ปั๊มตราอนุมัติลง PDF และเก็บเข้าคลังแยกตามแผนกเพื่อลดการใช้กระดาษ (Non-Paper Use)',
    impactSummary: 'เปลี่ยนขั้นตอนทำเอกสารเป็นไร้กระดาษ 100% • ตรวจลายเซ็นและปั๊มตราอัตโนมัติ • ทดสอบรองรับคนใช้พร้อมกัน 100 คน',
    metrics: [
      { label: 'รูปแบบการทำงาน', value: 'Non-Paper' },
      { label: 'ตรวจลายเซ็น', value: 'ครบ 3 ช่อง' },
      { label: 'ทดสอบรับโหลด', value: '100 คน' }
    ],
    situation:
      'ปกติเวลาทำเอกสาร SOP แต่ละแผนกจัดหน้าไม่ค่อยเหมือนกัน ต้องปริ้นท์กระดาษเดินแฟ้มให้ครบ 3 คนเซ็น ใช้เวลานานและค้นหาไฟล์ฉบับล่าสุดยาก',
    solution:
      'พัฒนาเว็บแอปแบ่งเป็น 3 หน้าหลัก: หน้ากรอกฟอร์ม SOP ทีละขั้นให้ได้มาตรฐานเดียวกัน, หน้าอัปโหลด PDF เพื่อให้ระบบตรวจลายเซ็นกับคำผิดก่อนปั๊มตรา APPROVED และหน้าคลังเอกสารแยกตามแผนก',
    keyFeatures: [
      'หน้ากรอกฟอร์ม 5 ขั้นตอน มีแถบแจ้งเตือนว่ากรอกข้อมูลครบ 100% หรือยัง',
      'ระบบตรวจไฟล์ PDF เช็กลายเซ็นครบ 3 ช่อง (ผู้จัดทำ / ผู้ตรวจ / ผู้อนุมัติ) และเช็กคำผิดก่อนปั๊มตรา',
      'คลังเก็บเอกสารแยกตามแผนก ค้นหาและเปิดดูไฟล์ PDF บนเว็บได้ทันที',
      'ทดสอบความเสถียรด้วยโปรแกรม Apache JMeter รองรับการใช้งานพร้อมกัน 100 คน'
    ],
    techStack: ['React', 'TypeScript', 'FastAPI', 'PDF Stamp', 'AI Audit', 'JMeter']
  },
  {
    id: 'hr-stock',
    title: 'เว็บสแกนบาร์โค้ดเบิกของ HR & เช็กสต็อก',
    subtitle: 'ระบบจองของออนไลน์ เซ็นชื่อบนหน้าจอ และใช้ปืนยิงบาร์โค้ดตัดสต็อกจริง',
    badge: 'Web App • Barcode Stock',
    category: 'webapp',
    coverImage: 'assets/hr-web-stock-on-hand.png',
    gallery: [
      {
        src: 'assets/hr-web-stock-on-hand.png',
        caption: 'หน้าเช็กยอดสต็อก (Stock on hand) ดูยอดคงเหลือจริง ยอดที่คนจองไว้ และยอดพร้อมเบิก'
      },
      {
        src: 'assets/hr-web-step2-items.png',
        caption: 'หน้าฝั่งพนักงานกดเลือกของที่จะเบิก มีบอกตู้เก็บของและจำนวนที่เหลืออยู่จริง'
      },
      {
        src: 'assets/hr-web-step3-signature.png',
        caption: 'หน้าสรุปรายการเบิก พร้อมช่องให้เซ็นชื่อรับของผ่านหน้าจอมือถือหรือคอมพิวเตอร์'
      },
      {
        src: 'assets/hr-web-scan-dispatch.png',
        caption: 'หน้าคิวของ HR ใช้ปืนยิงบาร์โค้ดสแกนจ่ายของ ถ้าตรงรายการจะมีเสียงติ๊ดยืนยันและตัดสต็อกทันที'
      },
      {
        src: 'assets/hr-web-print-a4.png',
        caption: 'หน้าใบเบิกพัสดุขนาด A4 ที่ระบบสร้างให้อัตโนมัติหลังสแกนจ่ายของเสร็จ'
      },
      {
        src: 'assets/hr-web-activity-logs.png',
        caption: 'หน้าดูประวัติย้อนหลังว่าใครเข้ามาเบิกหรือรับของเข้าคลังเวลาไหนบ้าง'
      }
    ],
    shortDesc:
      'ออกแบบโครงสร้างและทำเว็บเบิกอุปกรณ์ของแผนก HR ให้พนักงานกดจองของและเซ็นชื่อผ่านหน้าจอ จากนั้น HR ใช้ปืนยิงบาร์โค้ดสแกนจ่ายของ ตัดสต็อกทันที และสั่งพิมพ์ใบเบิก A4 ได้เลย',
    impactSummary: 'ตัดปัญหาเขียนใบเบิกกระดาษ • กันสต็อกทันทีไม่ให้เบิกซ้ำ • ยิงบาร์โค้ดตัดของแม่นยำ',
    metrics: [
      { label: 'การตัดสต็อก', value: 'Real-time' },
      { label: 'การรับของ', value: 'ยิงบาร์โค้ด' },
      { label: 'การเซ็นรับ', value: 'เซ็นผ่านจอ' }
    ],
    situation:
      'เดิมการเบิกของใช้การเขียนใบเบิกและตัดยอดด้วยมือ ทำให้บางครั้งคนมาขอเบิกซ้ำเกินของที่มีอยู่จริง และเช็กยอดคงเหลือลำบาก',
    solution:
      'วาง Workflow ใหม่เป็น 2 ส่วน: พนักงานกรอกรหัส เลือกของ (ระบบล็อกยอดจองไว้ให้ทันที) แล้วเซ็นชื่อส่งเข้าคิว จากนั้นเจ้าหน้าที่ HR ยิงบาร์โค้ดที่ตัวสินค้าเพื่อจ่ายของและตัดสต็อกอัตโนมัติ',
    keyFeatures: [
      'ระบบจองยอดของทันที (Reserve) ตอนพนักงานกดขอเบิก ป้องกันคนกดเบิกซ้อนกัน',
      'เซ็นชื่ออิเล็กทรอนิกส์บนหน้าจอโทรศัพท์หรือคอมพิวเตอร์ได้เลย',
      'รองรับปืนยิงบาร์โค้ดพร้อมเสียงแจ้งเตือนเวลาสแกนถูกหรือผิดชิ้น',
      'มีหน้าพิมพ์สติกเกอร์บาร์โค้ด หน้าออกใบเบิก A4 และหน้าดูประวัติการเบิกย้อนหลังครบ'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Barcode Scanner', 'E-Signature']
  },
  {
    id: 'ocr-scanner',
    title: 'แอปสแกนนามบัตร (HACO CARD)',
    subtitle: 'เว็บแอปถ่ายรูปนามบัตรลูกค้า ดึงชื่อ เบอร์โทร อีเมล เก็บลงฐานข้อมูลอัตโนมัติ',
    badge: 'Web App • AI OCR',
    category: 'webapp',
    coverImage: 'assets/haco-card-scanner.png',
    coverFit: 'contain',
    gallery: [
      {
        src: 'assets/haco-card-scanner.png',
        caption: 'หน้าล็อกอินเข้าใช้งานเว็บแอป HACO CARD สำหรับพนักงานใช้สแกนนามบัตรผ่านมือถือ'
      }
    ],
    shortDesc:
      'พัฒนาเว็บแอปให้พนักงานใช้มือถือถ่ายรูปนามบัตรที่ได้รับมาจากลูกค้า แล้วให้ AI ช่วยอ่านข้อความแยกชื่อ บริษัท ตำแหน่ง เบอร์โทร และอีเมล บันทึกลงตารางฐานข้อมูลให้เลยโดยไม่ต้องมานั่งพิมพ์ทีละใบ',
    impactSummary: 'พัฒนาเสร็จพร้อมใช้ใน 6 วัน • ลดเวลาพิมพ์ข้อมูลนามบัตรด้วยมือ • เปิดใช้ผ่านเว็บมือถือได้ทันที',
    metrics: [
      { label: 'ระยะเวลาทำระบบ', value: '6 วัน' },
      { label: 'การใช้งาน', value: 'ผ่านมือถือ' },
      { label: 'การดึงข้อมูล', value: 'AI OCR' }
    ],
    situation:
      'เวลามีงานออกบูธหรือไปพบลูกค้าจะได้นามบัตรมาเยอะมาก ถ้านั่งพิมพ์เก็บลงไฟล์ทีละใบจะเสียเวลานานและอาจพิมพ์เบอร์หรืออีเมลผิด',
    solution:
      'ทำเว็บแอปบน Google Apps Script เชื่อมต่อ AI OCR ให้พนักงานล็อกอินด้วยรหัสพนักงาน กดถ่ายรูปนามบัตร แล้วระบบแยกข้อมูลลงคอลัมน์ในฐานข้อมูลกลางอัตโนมัติ',
    keyFeatures: [
      'มีหน้าล็อกอินด้วยรหัสพนักงานก่อนเข้าใช้งาน',
      'กดถ่ายรูปนามบัตรจากกล้องมือถือหรือเลือกรูปจากอัลบั้มได้',
      'อ่านข้อความได้ทั้งนามบัตรภาษาไทยและภาษาอังกฤษ แยกชื่อ เบอร์โทร บริษัท อีเมล ให้ครบ',
      'บันทึกข้อมูลเข้า Google Sheets ฐานข้อมูลกลางทันที'
    ],
    techStack: ['Google Apps Script', 'AI OCR', 'JavaScript', 'HTML/CSS', 'Google Sheets'],
    liveUrl: 'https://script.google.com/macros/s/AKfycbxWMx3SEmyPvN6GiRFDCS2j-PuGGz66TgX9sq5bERcYhaHVfESCebi14limXNFElQML/exec',
    liveLabel: 'เปิดเว็บแอปจริง ↗'
  },
  {
    id: 'ceo-powerbi',
    title: 'Power BI Dashboard ดึงข้อมูลตรงจาก SAP',
    subtitle: 'แดชบอร์ดสรุปยอดขายเปรียบเทียบข้ามปี (2025 vs 2026) แผนก Smart Life, Project และคลังสินค้า (Inventory)',
    badge: 'Dashboard • SAP & Power BI',
    category: 'dashboard',
    coverImage: 'assets/pbi-multiyear-masked.png',
    gallery: [
      {
        src: 'assets/pbi-multiyear-masked.png',
        caption: 'หน้า Dashboard เปรียบเทียบยอดขายข้ามปี 2025 vs 2026 แยกตามเดือน ไตรมาส และกลุ่มสินค้า (เบลอตัวเลขความลับแล้ว)'
      },
      {
        src: 'assets/pbi-smart-life-masked.png',
        caption: 'หน้า Dashboard ของแผนก Smart Life ติดตามยอดขายเทียบเป้า และดูรายละเอียดรายลูกค้า (เบลอตัวเลขความลับแล้ว)'
      }
    ],
    shortDesc:
      'สร้าง Dashboard บน Power BI โดยดึงข้อมูลตรงจากระบบ SAP ไม่ต้องคอยก๊อปปี้ไฟล์ Excel มาต่อกันเอง ทำครบทั้งหน้าสรุปยอดขายเปรียบเทียบปีต่อปี, หน้าติดตามยอดแผนก Smart Life, แผนก Project และหน้าเช็กยอดคลังสินค้า (Inventory)',
    impactSummary: 'ดึงข้อมูลตรงจาก SAP อัตโนมัติ • มีครบ 3 สายงาน (Smart Life, Project, Inventory) • กดกรองดูรายเดือนและรายคนได้ทันที',
    metrics: [
      { label: 'แหล่งข้อมูล', value: 'ดึงตรง SAP' },
      { label: 'จำนวนรายงาน', value: '3+ ระบบหลัก' },
      { label: 'การอัปเดต', value: 'อัตโนมัติ' }
    ],
    situation:
      'แต่เดิมเวลาจะดูสรุปยอดขายหรือเช็กยอดคลังสินค้า ต้องดึงไฟล์ออกจาก SAP มาจัดตารางและทำกราฟเองทุกครั้ง ถ้าผู้บริหารอยากเจาะดูรายเดือนหรือรายทีมงานต้องใช้เวลาทำไฟล์ใหม่',
    solution:
      'เชื่อมฐานข้อมูล SAP เข้ากับ Power BI โดยตรง จัดความสัมพันธ์ตารางและเขียนสูตร DAX คำนวณผลต่างข้ามปี (YoY) เทียบเป้าหมาย แล้วแยกหน้า Dashboard ให้เหมาะกับแต่ละแผนก',
    keyFeatures: [
      'เชื่อมต่อข้อมูลจาก SAP โดยตรง ลดขั้นตอนการดึงไฟล์มาทำมือ',
      'หน้าเปรียบเทียบยอดขาย 2025 เทียบ 2026 ดูอัตราเติบโต (%) รายเดือนและรายไตรมาส',
      'หน้าติดตามยอดของทีม Smart Life และทีม Project เทียบกับเป้าหมายและใบเสนอราคา (SQ/PO)',
      'หน้า Dashboard สำหรับตรวจเช็กข้อมูลคลังสินค้า (Inventory)'
    ],
    techStack: ['Power BI', 'SAP Connection', 'DAX', 'Power Query', 'Data Modeling'],
    privacyNote: 'ภาพหน้าจอจริงจากระบบ แต่เบลอปิดตัวเลขยอดขาย ชื่อสินค้า และชื่อพนักงานทั้งหมดเพื่อรักษาความลับบริษัท'
  },
  {
    id: 'copilot-training',
    title: 'จัดอบรม & ทำหลักสูตร Microsoft 365 Copilot AI',
    subtitle: 'สอนพนักงานใช้ Copilot ช่วยงานเอกสาร สรุปข้อมูลทำกราฟ และวางแผนการใช้ AI ในบริษัท',
    badge: 'AI Training & Strategy',
    category: 'ai-it',
    coverImage: 'assets/copilot-speaker.jpg',
    gallery: [
      {
        src: 'assets/copilot-speaker.jpg',
        caption: 'บรรยากาศตอนเป็นวิทยากรบรรยายการใช้ Word + Copilot ต่อยอดข้อมูลสินค้าเป็นเอกสารหลายรูปแบบ'
      },
      {
        src: 'assets/copilot-group.jpg',
        caption: 'ภาพถ่ายร่วมกับผู้เข้าอบรมหลักสูตร AI for Modern Workplace with Microsoft 365 Copilot ณ ห้องประชุมใหญ่'
      },
      {
        src: 'assets/copilot-classroom.jpg',
        caption: 'บรรยากาศในห้องอบรม พนักงานแต่ละแผนกลองทำ Workshop ใช้ AI กับงานจริงของตัวเอง'
      },
      {
        src: 'assets/copilot-coaching.jpg',
        caption: 'เดินแนะนำและช่วยดูการเขียนคำสั่ง (Prompt) ให้พี่ๆ พนักงานแบบตัวต่อตัวระหว่างทำ Workshop'
      },
      {
        src: 'assets/copilot-workshop-marketing.png',
        caption: 'ผลงาน Workshop แผนกการตลาด (Marketing): ใช้ Copilot ดึงข้อมูลสินค้าขายดีมาทำโปสเตอร์โปรโมต'
      },
      {
        src: 'assets/copilot-workshop-sale.png',
        caption: 'ผลงาน Workshop แผนกขาย (Sales): ใช้ Copilot วิเคราะห์ข้อมูลสินค้าและทำใบเสนอขายพร้อมราคามาตรฐาน'
      },
      {
        src: 'assets/copilot-workshop-hr.png',
        caption: 'ผลงาน Workshop แผนกบุคคล (HR): สรุปข้อมูลระเบียบและเอกสารพนักงานด้วย Copilot'
      },
      {
        src: 'assets/copilot-workshop-new-product.png',
        caption: 'ผลงาน Workshop แผนกพัฒนาสินค้าใหม่ (New Product): สรุปคุณสมบัติทางเทคนิคและจุดขายสินค้า'
      },
      {
        src: 'assets/copilot-workshop-purchasing.png',
        caption: 'ผลงาน Workshop แผนกจัดซื้อ (Purchasing): สรุปรายชื่อซัพพลายเออร์และราคาเปรียบเทียบ'
      },
      {
        src: 'assets/image2.png',
        caption: 'เอกสารศึกษาแนวทางนำ AI (Claude / Copilot) มาช่วยลดงานซ้ำซ้อนใน 6 แผนก พร้อมวิธีป้องกันข้อมูลรั่วไหล'
      }
    ],
    shortDesc:
      'จัดทำคู่มือ หลักสูตร และเป็นวิทยากรสอนพนักงานใช้ Microsoft 365 Copilot ในงานจริง (หลักสูตร AI for Modern Workplace) สอนเทคนิคการเขียนคำสั่ง Prompt พาทำ Workshop แยกตามแผนก รวมถึงศึกษาแนวทางใช้ AI อย่างปลอดภัยไม่ให้ข้อมูลบริษัทรั่วไหล',
    impactSummary: 'พนักงานใช้ Copilot ลดเวลาทำเอกสารและสรุปข้อมูลได้จริง • มีโจทย์ Workshop เฉพาะแผนก • วางแนวทางใช้ AI อย่างปลอดภัย',
    metrics: [
      { label: 'รูปแบบงาน', value: 'สอน & Workshop' },
      { label: 'ผลประเมินผู้เรียน', value: '5 / 5 คะแนน' },
      { label: 'ครอบคลุม', value: '5+ แผนกหลัก' }
    ],
    situation:
      'บริษัทต้องการให้พนักงานนำ AI และ Microsoft 365 Copilot มาช่วยลดเวลาทำงานประจำวัน แต่หลายคนยังไม่รู้ว่าจะเริ่มต้นสั่งงาน AI อย่างไรให้ได้ผลลัพธ์ตรงกับงานของแผนกตัวเอง และข้อมูลอะไรบ้างที่ห้ามส่งให้ AI',
    solution:
      'ทำเนื้อหาหลักสูตรและคู่มือ SOP การใช้ Copilot สอนโครงสร้างการพิมพ์คำสั่ง (PREP Framework) เตรียมไฟล์โจทย์ Workshop ของแต่ละแผนก (Sales, Marketing, HR, จัดซื้อ) และเดินประกบสอนการใช้งานจริงในห้องอบรม',
    keyFeatures: [
      'สอนการใช้ Copilot ร่วมกับ Word, Excel และอีเมล เพื่อย่นเวลาสรุปข้อมูลและร่างเอกสาร',
      'สอนเทคนิคเขียนคำสั่ง Prompt ให้ได้คำตอบตรงใจ และข้อควรระวังเรื่องข้อมูลความลับบริษัท (PDPA)',
      'ออกแบบโจทย์ Workshop ให้ลองทำจริง เช่น สรุปตารางยอดขาย, ทำโปสเตอร์สินค้า และร่างอีเมลรายงาน',
      'จัดทำแผนวิเคราะห์ความคุ้มค่าและแนวทางการนำ AI มาช่วยงานอัตโนมัติเสนอผู้บริหาร'
    ],
    techStack: ['Microsoft 365 Copilot', 'Prompt Techniques', 'AI Workshop', 'Word / Excel AI', 'PDPA & AI Safety']
  },
  {
    id: 'teams-meeting-room',
    title: 'จัดทำระบบห้องประชุมออนไลน์ Microsoft Teams',
    subtitle: 'ตั้งค่าห้องประชุมออนไลน์และอุปกรณ์เชื่อมต่อสำหรับการประชุมผ่าน Microsoft Teams',
    badge: 'IT & Microsoft Teams',
    category: 'ai-it',
    gallery: [],
    shortDesc:
      'ดำเนินการจัดทำและตั้งค่าระบบห้องประชุม Microsoft Teams ของบริษัท เพื่อให้แต่ละแผนกใช้ประชุมออนไลน์และแชร์หน้าจอร่วมกันได้สะดวก โดยดำเนินการเสร็จสิ้นภายใน 4 วัน',
    impactSummary: 'ดำเนินการเสร็จพร้อมใช้งานใน 4 วัน • รองรับการประชุมออนไลน์ข้ามแผนกผ่าน Microsoft Teams',
    metrics: [
      { label: 'เวลาดำเนินการ', value: '4 วัน' },
      { label: 'สถานะงาน', value: 'Completed' },
      { label: 'ระบบหลัก', value: 'MS Teams' }
    ],
    situation:
      'บริษัทต้องการจัดทำระบบห้องประชุม Microsoft Teams เพื่อให้พนักงานและผู้บริหารใช้ประชุมออนไลน์และประสานงานข้ามแผนกได้สะดวกรวดเร็วขึ้น',
    solution:
      'ดำเนินการตั้งค่าระบบห้องประชุม Microsoft Teams เชื่อมต่อระบบภาพและเสียง พร้อมทดสอบการใช้งานจริงจนเสร็จสมบูรณ์ภายใน 4 วัน',
    keyFeatures: [
      'จัดทำและตั้งค่าระบบห้องประชุม Microsoft Teams ให้พร้อมใช้งาน',
      'เชื่อมต่อระบบแสดงผลและระบบเสียงสำหรับการประชุมออนไลน์',
      'ทดสอบการใช้งานและส่งมอบงานเสร็จภายใน 4 วัน'
    ],
    techStack: ['Microsoft Teams', 'Meeting Room Setup', 'IT Support']
  }
];
