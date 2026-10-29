export type Language = 'en' | 'th';
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

export const PROJECTS_BY_LANG: Record<Language, ProjectCaseStudy[]> = {
  en: [
    {
      id: 'sop-generator',
      title: 'SOP Generator, Revision & Digital Stamp Web Portal',
      subtitle: 'Standardized web workflow for creating, editing (revision), auditing, and stamping SOP documents',
      badge: 'Web App • Paperless Workflow',
      category: 'webapp',
      coverImage: 'assets/sop-live-create.png',
      gallery: [
        {
          src: 'assets/sop-live-create.png',
          caption: 'Create SOP Screen: 5-step guided web form with real-time 100% Document Readiness check and Word export'
        },
        {
          src: 'assets/sop-live-edit.png',
          caption: 'Edit / Revision SOP Screen: Returned documents show reviewer annotations, revision number, and one-click re-submission'
        },
        {
          src: 'assets/sop-live-audit.png',
          caption: 'Approval & Audit Screen: Automated 3-signature verification, form completeness check, and typo detection before stamping'
        },
        {
          src: 'assets/sop-live-signature.png',
          caption: 'Digital Signature Settings: Draw or upload an electronic signature for official SOP approval stamping'
        },
        {
          src: 'assets/sop-jmeter-100users.png',
          caption: 'Apache JMeter Load Test Report: Verified with 100 concurrent users (1,100 requests, 0% error rate)'
        }
      ],
      shortDesc:
        'Built an internal Next.js + FastAPI web portal that standardizes SOP creation, revision handling (Edit SOP), automated 3-signature verification, and digital PDF stamping to support a paperless workflow.',
      impactSummary: 'Paperless SOP creation & revision workflow • Automated 3-signature & form check • Load-tested for 100 concurrent users',
      metrics: [
        { label: 'Workflow Mode', value: 'Paperless Web' },
        { label: 'Audit Checks', value: '3 Signatures + Form' },
        { label: 'Load Tested', value: '100 Users (0% Error)' }
      ],
      situation:
        'Previously, SOP documents were formatted manually across departments and printed on paper to collect three physical signatures. When revisions were needed, tracking feedback and re-submitting documents took significant manual effort.',
      solution:
        'Developed a centralized web application covering the full document lifecycle: a 5-step SOP generator with readiness validation, an inline Revision / Edit SOP workflow when reviewers request changes, automated PDF signature/completeness checks, and digital approval stamping.',
      keyFeatures: [
        '5-Step Create SOP Web Form with real-time 100% completeness indicator and automated Word (.docx) formatting',
        'Edit / Revision SOP Workflow displaying reviewer annotations, revision history, and direct re-submission to approvers',
        'Automated PDF Audit Checklist verifying 3 required signatures (Issuer, Reviewer, Approver) and form completeness',
        'Digital Signature Pad and automated red HACO APPROVED stamp embedding, stress-tested with Apache JMeter (100 concurrent users)'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'FastAPI (Python)', 'Prisma', 'PDF-Lib', 'Apache JMeter'],
      privacyNote: 'All screenshots shown above use anonymized demo/test accounts (Demo User / Admin 1) with no internal company library files displayed.'
    },
    {
      id: 'hr-stock',
      title: 'Haco P&C Barcode Requisition & Stock Control System',
      subtitle: 'Online requisition workflow with digital signature pad, real-time stock reservation, and barcode scanner dispatch',
      badge: 'Web App • Barcode & Inventory',
      category: 'webapp',
      coverImage: 'assets/hr-live-signature.png',
      gallery: [
        {
          src: 'assets/hr-live-signature.png',
          caption: 'Requisition Summary & E-Signature Screen: Employees review requested items and sign directly on mobile or desktop'
        },
        {
          src: 'assets/hr-live-success.png',
          caption: 'Requisition Confirmation Screen: Generates an instant tracking number (REQ) and routes the request to the HR dispatch queue'
        },
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'Stock-In (PO) Screen: Bind incoming items to a Purchase Order (PO) number before scanning barcodes into inventory'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'HR Requisition Queue & Barcode Dispatch Screen: Scan item barcodes to verify and auto-approve dispatches'
        }
      ],
      shortDesc:
        'Developed a full-stack inventory requisition web application for the P&C (HR) department featuring real-time stock reservation locks, touchscreen e-signatures, PO inbound scanning, and USB barcode scanner dispatch.',
      impactSummary: 'Replaces paper requisition slips • Real-time stock reservation prevents double-booking • Barcode-verified dispatch',
      metrics: [
        { label: 'Concurrency Control', value: 'Real-Time Lock' },
        { label: 'Verification', value: 'Barcode Scanner' },
        { label: 'Sign-off', value: 'Touch E-Signature' }
      ],
      situation:
        'Manual paper requisition slips made it difficult to track available supplies in real time, occasionally leading to overlapping requests for out-of-stock items and manual data entry overhead.',
      solution:
        'Designed a 2-role web workflow: employees submit requisitions with real-time stock reservation and an electronic signature, while HR staff process inbound POs and outbound dispatches using a barcode scanner.',
      keyFeatures: [
        'Real-time stock reservation when a request is submitted to prevent race conditions and over-requesting',
        'Responsive electronic signature pad supporting both smartphone touchscreens and desktop mice',
        'PO-linked Stock-In scanning and Requisition Queue barcode dispatch with audio feedback',
        'Automated A4 requisition slip generation upon dispatch completion'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Barcode Scanner Integration', 'E-Signature'],
      privacyNote: 'Internal warehouse stock tables and employee logs are omitted to protect company data privacy.'
    },
    {
      id: 'ocr-scanner',
      title: 'HACO CARD — AI Business Card Scanner Web App',
      subtitle: 'Mobile web app that extracts contact details from business card photos into a centralized database',
      badge: 'Web App • AI OCR',
      category: 'webapp',
      coverImage: 'assets/haco-card-scanner.png',
      coverFit: 'contain',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'HACO CARD login portal for employee access on mobile devices'
        }
      ],
      shortDesc:
        'Built a mobile-friendly web application using Google Apps Script and AI OCR that lets sales and staff photograph business cards and automatically extract structured contact fields into Google Sheets.',
      impactSummary: 'Delivered in 6 days • Eliminates manual typing of business cards • Accessible directly via mobile browser',
      metrics: [
        { label: 'Delivery Time', value: '6 Days' },
        { label: 'Platform', value: 'Mobile Web' },
        { label: 'Extraction', value: 'AI Vision OCR' }
      ],
      situation:
        'After trade shows and client visits, sales teams collected large batches of physical business cards. Typing contact details into spreadsheets manually was slow and prone to typos.',
      solution:
        'Created a lightweight web app on Google Apps Script integrated with AI OCR so employees can log in with their employee ID, snap a photo of a business card, and save structured fields directly to the database.',
      keyFeatures: [
        'Employee ID authentication before accessing the scanner',
        'Direct mobile camera capture or photo library upload',
        'Bilingual OCR extraction (Thai & English) for Name, Company, Title, Phone, and Email',
        'Instant synchronization to centralized Google Sheets database'
      ],
      techStack: ['Google Apps Script', 'AI OCR API', 'JavaScript', 'HTML/CSS', 'Google Sheets'],
      liveUrl: 'https://script.google.com/macros/s/AKfycbxWMx3SEmyPvN6GiRFDCS2j-PuGGz66TgX9sq5bERcYhaHVfESCebi14limXNFElQML/exec',
      liveLabel: 'Open Live Web App ↗'
    },
    {
      id: 'ceo-powerbi',
      title: 'Executive Sales & Inventory Power BI Dashboards (SAP Integration)',
      subtitle: 'Automated data preparation and interactive dashboards for Multi-Year Sales (2025 vs 2026), Smart Life, Project, and Inventory',
      badge: 'BI & Data • SAP + Power BI',
      category: 'dashboard',
      coverImage: 'assets/pbi-multiyear-masked.png',
      gallery: [
        {
          src: 'assets/pbi-multiyear-masked.png',
          caption: 'Multi-Year Sales Comparison Dashboard (2025 vs 2026) by month, quarter, and product group (confidential figures masked)'
        },
        {
          src: 'assets/pbi-smart-life-masked.png',
          caption: 'Smart Life Division Dashboard tracking revenue vs. target, quotation conversion, and salesperson performance (confidential figures masked)'
        }
      ],
      shortDesc:
        'Automated sales data preparation from SAP and built interactive Power BI dashboards for executive decision-making, covering Year-over-Year sales comparison, Smart Life division, Project division, and Inventory monitoring.',
      impactSummary: 'Automated SAP data pipeline • Covers Sales (YoY, Smart Life, Project) & Inventory • Interactive drill-down filters',
      metrics: [
        { label: 'Data Source', value: 'SAP Direct' },
        { label: 'Dashboards', value: '3+ Core Views' },
        { label: 'Data Prep', value: 'Automated' }
      ],
      situation:
        'Preparing periodic sales and inventory reports previously required exporting multiple raw files from SAP and manually consolidating spreadsheets whenever management needed drill-down views.',
      solution:
        'Connected SAP data pipelines to Power BI, modeled relational tables, and wrote DAX measures for YoY growth, target achievement, and quotation (SQ/PO) tracking across business units.',
      keyFeatures: [
        'Automated data preparation pipeline connected to SAP data sources',
        'Multi-Year Sales Comparison (2025 vs 2026) with monthly, quarterly, and category drill-downs',
        'Dedicated performance dashboards for Smart Life and Project sales teams against targets',
        'Inventory monitoring view for stock visibility'
      ],
      techStack: ['Power BI', 'SAP Data Pipeline', 'DAX', 'Power Query', 'Data Modeling'],
      privacyNote: 'All revenue numbers, customer names, and product SKUs are blurred to strictly protect company confidentiality.'
    },
    {
      id: 'copilot-training',
      title: 'Corporate AI Enablement & Microsoft 365 Copilot Training',
      subtitle: 'Prepared training curriculum and conducted 3 internal sessions on practical AI tools and prompt engineering',
      badge: 'AI Enablement • Training',
      category: 'ai-it',
      coverImage: 'assets/copilot-speaker.jpg',
      gallery: [
        {
          src: 'assets/copilot-speaker.jpg',
          caption: 'Conducting an internal training session on Microsoft 365 Copilot and document automation workflows'
        },
        {
          src: 'assets/copilot-group.jpg',
          caption: 'Group photo with participants from multiple departments during the AI for Modern Workplace training session'
        },
        {
          src: 'assets/copilot-classroom.jpg',
          caption: 'Hands-on classroom session where employees practiced prompt engineering on their daily tasks'
        },
        {
          src: 'assets/copilot-coaching.jpg',
          caption: 'One-on-one coaching to help team members structure effective prompts for their specific departmental workflows'
        }
      ],
      shortDesc:
        'Prepared training materials and conducted 3 internal training sessions for company staff on practical usage of Microsoft Copilot, prompt engineering techniques, and safe enterprise AI guidelines.',
      impactSummary: 'Conducted 3 internal training sessions • Hands-on prompt engineering coaching • Enterprise AI data safety guidelines',
      metrics: [
        { label: 'Sessions Conducted', value: '3 Sessions' },
        { label: 'Training Format', value: 'Hands-on Coaching' },
        { label: 'Focus', value: 'Copilot & Prompts' }
      ],
      situation:
        'The company wanted employees across departments to adopt Microsoft Copilot effectively for document drafting and data summarization while maintaining strict awareness of internal data privacy.',
      solution:
        'Designed structured training materials, prompt templates, and department-relevant exercises, and delivered 3 interactive training sessions with 1-on-1 coaching.',
      keyFeatures: [
        'Practical workflows for Microsoft Copilot in Word, Excel, and daily business communication',
        'Structured prompt engineering framework tailored for operational tasks',
        'Hands-on classroom exercises and individual coaching during sessions',
        'Data privacy guidelines to prevent sensitive company data leakage when using AI tools'
      ],
      techStack: ['Microsoft 365 Copilot', 'Copilot Studio', 'Prompt Engineering', 'AI Governance & PDPA']
    },
    {
      id: 'teams-meeting-room',
      title: 'Microsoft Teams Room Setup & Automated Booking Workflow',
      subtitle: 'Configured Microsoft Teams meeting room hardware/AV and implemented automated room booking in Teams',
      badge: 'IT Infrastructure & Teams',
      category: 'ai-it',
      gallery: [],
      shortDesc:
        'Set up the company Microsoft Teams conference room system (display, camera, audio integration) within 4 days and implemented automated meeting room booking workflows in Microsoft Teams.',
      impactSummary: 'Completed setup in 4 days • Integrated AV & display hardware • Automated room booking in Microsoft Teams',
      metrics: [
        { label: 'Setup Time', value: '4 Days' },
        { label: 'Platform', value: 'Microsoft Teams' },
        { label: 'Status', value: 'Completed' }
      ],
      situation:
        'The organization needed a reliable Microsoft Teams conference room setup and a streamlined room booking process to support cross-departmental online meetings.',
      solution:
        'Configured the Microsoft Teams meeting room display, camera, and microphone array, tested end-to-end audio/video stability, and set up automated room booking via Microsoft Teams.',
      keyFeatures: [
        'Configured Microsoft Teams meeting room hardware, smart display, and audio/video peripherals',
        'Implemented automated room booking integration within Microsoft Teams',
        'Tested and delivered the ready-to-use conference room system within 4 days'
      ],
      techStack: ['Microsoft Teams', 'Power Automate', 'AV & Conference Hardware', 'IT Support']
    }
  ],
  th: [
    {
      id: 'sop-generator',
      title: 'เว็บสร้าง แก้ไข (Revision) และตรวจอนุมัติเอกสาร SOP อัตโนมัติ',
      subtitle: 'ระบบเว็บแบบไร้กระดาษ ครอบคลุมตั้งแต่สร้างฟอร์ม SOP, ตีกลับแก้ไข (Edit SOP), ตรวจลายเซ็น 3 ช่อง และประทับตรา',
      badge: 'Web App • Paperless Workflow',
      category: 'webapp',
      coverImage: 'assets/sop-live-create.png',
      gallery: [
        {
          src: 'assets/sop-live-create.png',
          caption: 'หน้าเว็บสร้างเอกสาร SOP (Create SOP): กรอกข้อมูล 5 ขั้นตอน พร้อมตัวนับความครบถ้วน 100% ก่อนดาวน์โหลดไฟล์ Word'
        },
        {
          src: 'assets/sop-live-edit.png',
          caption: 'หน้าเว็บแก้ไขเอกสาร SOP (Edit / Revision SOP): แสดงจุดที่ผู้ตรวจคอมเมนต์ให้แก้ไข เลขครั้งที่แก้ไข และปุ่มส่งอนุมัติใหม่'
        },
        {
          src: 'assets/sop-live-audit.png',
          caption: 'หน้าเว็บตรวจอนุมัติ (Approval & Audit): ตรวจสอบลายเซ็นครบ 3 ช่อง ความครบถ้วนของฟอร์ม และคำผิดอัตโนมัติ'
        },
        {
          src: 'assets/sop-live-signature.png',
          caption: 'หน้าตั้งค่าลายเซ็นดิจิทัล (Digital Signature): วาดลายเซ็นบนหน้าจอหรืออัปโหลดไฟล์เพื่อใช้ประทับลงเอกสาร'
        },
        {
          src: 'assets/sop-jmeter-100users.png',
          caption: 'ผลทดสอบ Load Test ด้วย Apache JMeter: จำลองผู้ใช้งานพร้อมกัน 100 คน (1,100 Requests) ผ่าน 100% ไม่ล่ม'
        }
      ],
      shortDesc:
        'พัฒนาเว็บแอปด้วย Next.js และ FastAPI เพื่อจัดทำมาตรฐานการสร้างเอกสาร SOP, ระบบตีกลับและแก้ไขเอกสาร (Edit SOP), การตรวจลายเซ็นครบ 3 ช่อง และการประทับตราอนุมัติดิจิทัล',
      impactSummary: 'ครอบคลุมทั้งสร้าง แก้ไข และอนุมัติ SOP บนเว็บ • ตรวจลายเซ็น 3 ช่องอัตโนมัติ • ทดสอบรับโหลด 100 Users ด้วย JMeter',
      metrics: [
        { label: 'รูปแบบระบบ', value: 'Paperless Web' },
        { label: 'การตรวจสอบ', value: '3 ลายเซ็น + ฟอร์ม' },
        { label: 'Load Test', value: '100 Users (0% Error)' }
      ],
      situation:
        'เดิมการจัดทำและแก้ไขเอกสาร SOP ต้องพิมพ์และเดินแฟ้มกระดาษเพื่อเก็บลายเซ็น 3 ลำดับ เมื่อมีการตีกลับแก้ไขทำให้ติดตามจุดแก้ไขและเวอร์ชันเอกสารได้ยาก',
      solution:
        'พัฒนาเว็บพอร์ทัลที่รวมขั้นตอนสร้าง SOP 5 ขั้นตอน, หน้าแก้ไข SOP (Revision) เมื่อผู้ตรวจตีกลับพร้อมแสดงจุดที่ต้องแก้, ระบบตรวจเช็กลายเซ็น 3 ช่อง และประทับตราอนุมัติอัตโนมัติ',
      keyFeatures: [
        'หน้าสร้างเอกสาร SOP 5 ขั้นตอน พร้อมแถบตรวจความครบถ้วน 100% และส่งออกไฟล์ Word มาตรฐานเดียวกัน',
        'หน้าแก้ไข SOP (Revision Workflow) แสดงคอมเมนต์จากผู้ตรวจ จุดที่ต้องแก้ไข และส่งกลับให้ผู้ลงนามเดิมได้ทันที',
        'ระบบตรวจไฟล์ PDF เช็กลายเซ็นครบ 3 ช่อง (ผู้ออกเอกสาร / ผู้ตรวจสอบ / ผู้อนุมัติ) และเช็กความสมบูรณ์ของแบบฟอร์ม',
        'ระบบลายเซ็นดิจิทัลและประทับตราอนุมัติ พร้อมทดสอบความเสถียรด้วย Apache JMeter รองรับผู้ใช้พร้อมกัน 100 คน'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'FastAPI (Python)', 'Prisma', 'PDF-Lib', 'Apache JMeter'],
      privacyNote: 'ภาพหน้าจอทั้งหมดใช้บัญชีทดสอบ (Demo User / Admin 1) และไม่แสดงข้อมูลในคลังเอกสารภายในของบริษัท'
    },
    {
      id: 'hr-stock',
      title: 'ระบบเว็บเบิกพัสดุ HR ยิงบาร์โค้ด & จองสต็อกเรียลไทม์',
      subtitle: 'ระบบจองพัสดุออนไลน์ เซ็นชื่อรับของบนหน้าจอ และสแกนบาร์โค้ดรับเข้า/จ่ายออก',
      badge: 'Web App • Barcode & Inventory',
      category: 'webapp',
      coverImage: 'assets/hr-live-signature.png',
      gallery: [
        {
          src: 'assets/hr-live-signature.png',
          caption: 'หน้าสรุปรายการเบิกและลงลายมือชื่ออิเล็กทรอนิกส์: เซ็นชื่อผ่านหน้าจอมือถือหรือเมาส์คอมพิวเตอร์เพื่อยืนยันการขอเบิก'
        },
        {
          src: 'assets/hr-live-success.png',
          caption: 'หน้ายืนยันส่งคำขอเบิกสำเร็จ: ระบบสร้างเลขใบเบิก (REQ) อัตโนมัติและส่งเข้าคิวของเจ้าหน้าที่ HR ทันที'
        },
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'หน้ารับของเข้าสต็อก (Stock-In): ผูกเลขที่เอกสาร PO ก่อนเริ่มยิงบาร์โค้ดรับพัสดุเข้าคลัง'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'หน้าคิวรอจ่ายและสแกนบาร์โค้ดของเจ้าหน้าที่ HR: รองรับปืนยิงบาร์โค้ดเพื่อตรวจสอบและตัดจ่ายพัสดุ'
        }
      ],
      shortDesc:
        'พัฒนาเว็บแอปพลิเคชันสำหรับแผนก P&C (HR) เพื่อให้พนักงานยื่นขอเบิกอุปกรณ์พร้อมล็อกยอดจองทันที เซ็นชื่ออิเล็กทรอนิกส์บนหน้าจอ และให้เจ้าหน้าที่ HR ใช้ปืนยิงบาร์โค้ดรับของเข้า (PO) และสแกนจ่ายของ',
      impactSummary: 'ลดการใช้ใบเบิกกระดาษ • ระบบจองยอดป้องกันการกดเบิกซ้อน • สแกนบาร์โค้ดรับเข้า-จ่ายออกแม่นยำ',
      metrics: [
        { label: 'การจัดการคิว', value: 'Real-Time Lock' },
        { label: 'การจ่ายพัสดุ', value: 'Barcode Scanner' },
        { label: 'การยืนยันตัวตน', value: 'Touch E-Signature' }
      ],
      situation:
        'เดิมการเบิกอุปกรณ์สำนักงานใช้การเขียนใบเบิกกระดาษและตัดยอดด้วยมือ ทำให้เช็กยอดคงเหลือจริงได้ช้าและอาจเกิดการขอเบิกซ้ำซ้อนกัน',
      solution:
        'พัฒนาเว็บแอปแยก 2 ฝั่ง คือฝั่งพนักงานสำหรับเลือกเบิกและเซ็นชื่อดิจิทัล (ระบบจองยอดทันที) และฝั่งเจ้าหน้าที่ HR สำหรับผูกเลข PO รับของเข้าและยิงบาร์โค้ดจ่ายของ',
      keyFeatures: [
        'ระบบล็อกยอดจองทันทีเมื่อพนักงานกดขอเบิก ป้องกันปัญหาการเบิกซ้อน (Race Condition)',
        'ช่องลงลายมือชื่ออิเล็กทรอนิกส์ รองรับทั้งการใช้นิ้ววาดบนมือถือและเมาส์บนคอมพิวเตอร์',
        'หน้ารับพัสดุเข้าคลังด้วยการผูกเลขที่ PO และหน้าคิวสแกนบาร์โค้ดจ่ายของพร้อมเสียงแจ้งเตือน',
        'สร้างฟอร์มใบเบิกพัสดุขนาด A4 อัตโนมัติหลังสแกนจ่ายเสร็จ'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Barcode Scanner Integration', 'E-Signature'],
      privacyNote: 'ไม่แสดงตารางข้อมูลพัสดุในคลังและประวัติผู้ใช้งานจริง เพื่อรักษาความลับของข้อมูลภายในบริษัท'
    },
    {
      id: 'ocr-scanner',
      title: 'HACO CARD — เว็บแอปสแกนนามบัตรด้วย AI OCR',
      subtitle: 'เว็บแอปบนมือถือสำหรับถ่ายรูปนามบัตรและแยกข้อมูลชื่อ เบอร์โทร อีเมล ลงฐานข้อมูลอัตโนมัติ',
      badge: 'Web App • AI OCR',
      category: 'webapp',
      coverImage: 'assets/haco-card-scanner.png',
      coverFit: 'contain',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'หน้าล็อกอินด้วยรหัสพนักงานสำหรับเข้าใช้งานเว็บแอป HACO CARD บนสมาร์ตโฟน'
        }
      ],
      shortDesc:
        'พัฒนาเว็บแอปด้วย Google Apps Script เชื่อมต่อ AI OCR ให้พนักงานใช้มือถือถ่ายภาพนามบัตรลูกค้า แล้วสกัดข้อมูลชื่อ บริษัท ตำแหน่ง เบอร์โทรศัพท์ และอีเมล บันทึกลง Google Sheets อัตโนมัติ',
      impactSummary: 'พัฒนาเสร็จภายใน 6 วัน • ลดเวลาพิมพ์ข้อมูลนามบัตรด้วยมือ • ใช้งานผ่านเบราว์เซอร์มือถือได้ทันที',
      metrics: [
        { label: 'เวลาพัฒนา', value: '6 วัน' },
        { label: 'แพลตฟอร์ม', value: 'Mobile Web' },
        { label: 'ระบบสกัดข้อมูล', value: 'AI Vision OCR' }
      ],
      situation:
        'หลังออกบูธหรือพบลูกค้า พนักงานได้รับนามบัตรจำนวนมาก การนำมาพิมพ์ลงตารางทีละใบใช้เวลานานและเสี่ยงต่อการพิมพ์เบอร์โทรหรืออีเมลผิดพลาด',
      solution:
        'สร้างเว็บแอปบน Google Apps Script เชื่อมต่อ AI OCR ให้ล็อกอินด้วยรหัสพนักงาน กดถ่ายรูปนามบัตร และจัดเก็บข้อมูลแยกตามคอลัมน์ลงฐานข้อมูลกลางทันที',
      keyFeatures: [
        'ระบบยืนยันตัวตนด้วยรหัสพนักงานก่อนเข้าใช้งาน',
        'รองรับการถ่ายรูปนามบัตรจากกล้องมือถือโดยตรงหรือเลือกจากคลังภาพ',
        'อ่านข้อความได้ทั้งภาษาไทยและภาษาอังกฤษ แยกชื่อ บริษัท ตำแหน่ง เบอร์โทร และอีเมล',
        'บันทึกข้อมูลลงตารางฐานข้อมูล Google Sheets อัตโนมัติ'
      ],
      techStack: ['Google Apps Script', 'AI OCR API', 'JavaScript', 'HTML/CSS', 'Google Sheets'],
      liveUrl: 'https://script.google.com/macros/s/AKfycbxWMx3SEmyPvN6GiRFDCS2j-PuGGz66TgX9sq5bERcYhaHVfESCebi14limXNFElQML/exec',
      liveLabel: 'เปิดเว็บแอปจริง ↗'
    },
    {
      id: 'ceo-powerbi',
      title: 'Power BI Dashboard เชื่อมต่อข้อมูลจาก SAP',
      subtitle: 'ระบบเตรียมข้อมูลอัตโนมัติและแดชบอร์ดเปรียบเทียบยอดขายข้ามปี (2025 vs 2026), แผนก Smart Life, Project และ Inventory',
      badge: 'BI & Data • SAP + Power BI',
      category: 'dashboard',
      coverImage: 'assets/pbi-multiyear-masked.png',
      gallery: [
        {
          src: 'assets/pbi-multiyear-masked.png',
          caption: 'แดชบอร์ดเปรียบเทียบยอดขายข้ามปี 2025 vs 2026 แยกตามเดือน ไตรมาส และหมวดหมู่สินค้า (เบลอตัวเลขความลับแล้ว)'
        },
        {
          src: 'assets/pbi-smart-life-masked.png',
          caption: 'แดชบอร์ดแผนก Smart Life ติดตามยอดขายเทียบเป้าหมายและใบเสนอราคา (เบลอตัวเลขความลับแล้ว)'
        }
      ],
      shortDesc:
        'ทำระบบเตรียมข้อมูลจาก SAP อัตโนมัติและสร้างแดชบอร์ด Power BI สำหรับผู้บริหาร ครอบคลุมหน้าสรุปยอดขายเปรียบเทียบปีต่อปี (YoY), แผนก Smart Life, แผนก Project และข้อมูลคลังสินค้า (Inventory)',
      impactSummary: 'เตรียมข้อมูลจาก SAP อัตโนมัติ • ครบทั้งยอดขาย (YoY, Smart Life, Project) และ Inventory • กดกรองดูข้อมูลย่อยได้ทันที',
      metrics: [
        { label: 'แหล่งข้อมูล', value: 'SAP Direct' },
        { label: 'จำนวนรายงาน', value: '3+ แดชบอร์ดหลัก' },
        { label: 'การเตรียมข้อมูล', value: 'Automated' }
      ],
      situation:
        'เดิมการทำรายงานสรุปยอดขายและคลังสินค้าต้องดึงไฟล์จาก SAP มาจัดตารางและทำกราฟด้วยมือทุกครั้ง ทำให้ใช้เวลานานเมื่อต้องการเจาะดูข้อมูลรายเดือนหรือรายทีม',
      solution:
        'เชื่อมข้อมูลจาก SAP เข้าสู่ Power BI จัดทำ Data Model และเขียนสูตร DAX คำนวณการเติบโตข้ามปี (YoY) และอัตราการบรรลุเป้าหมายของแต่ละแผนก',
      keyFeatures: [
        'ลดขั้นตอนการทำไฟล์ Excel ด้วยมือโดยเชื่อมและเตรียมข้อมูลจาก SAP อัตโนมัติ',
        'หน้าเปรียบเทียบยอดขายปี 2025 เทียบ 2026 รายเดือน รายไตรมาส และกลุ่มสินค้า',
        'หน้าติดตามผลงานทีมขาย Smart Life และ Project เทียบเป้าหมายและใบเสนอราคา (SQ/PO)',
        'หน้าแดชบอร์ดติดตามสถานะคลังสินค้า (Inventory)'
      ],
      techStack: ['Power BI', 'SAP Data Pipeline', 'DAX', 'Power Query', 'Data Modeling'],
      privacyNote: 'เบลอตัวเลขยอดขาย ชื่อลูกค้า และรหัสสินค้าทั้งหมดเพื่อรักษาความลับของบริษัทอย่างเคร่งครัด'
    },
    {
      id: 'copilot-training',
      title: 'วิทยากรอบรมการใช้ Microsoft Copilot & Prompt Engineering ภายในองค์กร',
      subtitle: 'จัดทำเนื้อหาหลักสูตรและจัดการอบรมภายใน 3 รอบ เกี่ยวกับการใช้ AI ช่วยงานเอกสารและสรุปข้อมูลอย่างปลอดภัย',
      badge: 'AI Enablement • Training',
      category: 'ai-it',
      coverImage: 'assets/copilot-speaker.jpg',
      gallery: [
        {
          src: 'assets/copilot-speaker.jpg',
          caption: 'บรรยากาศการบรรยายแนวทางใช้ Microsoft Copilot ร่วมกับงานเอกสารในห้องประชุมใหญ่'
        },
        {
          src: 'assets/copilot-group.jpg',
          caption: 'ภาพถ่ายร่วมกับผู้เข้าอบรมจากหลากหลายแผนกในหลักสูตร AI for Modern Workplace'
        },
        {
          src: 'assets/copilot-classroom.jpg',
          caption: 'บรรยากาศการฝึกปฏิบัติจริง (Hands-on) ให้พนักงานทดลองเขียนคำสั่ง Prompt กับโจทย์งานประจำวัน'
        },
        {
          src: 'assets/copilot-coaching.jpg',
          caption: 'เดินแนะนำและปรับแก้การเขียน Prompt ให้เหมาะกับงานของแต่ละบุคคลระหว่างการอบรม'
        }
      ],
      shortDesc:
        'จัดทำสื่อการสอน คู่มือ และการอบรมภายในจำนวน 3 รอบ ให้แก่พนักงานเกี่ยวกับการใช้งาน Microsoft Copilot และเทคนิคการเขียนคำสั่ง (Prompt Engineering) พร้อมแนวทางป้องกันข้อมูลรั่วไหล',
      impactSummary: 'จัดอบรมภายใน 3 รอบ • โค้ชการเขียน Prompt แบบตัวต่อตัว • วางแนวทางใช้งาน AI อย่างปลอดภัย',
      metrics: [
        { label: 'จำนวนรอบอบรม', value: '3 รอบ' },
        { label: 'รูปแบบการสอน', value: 'Hands-on Coaching' },
        { label: 'หัวข้อหลัก', value: 'Copilot & Prompts' }
      ],
      situation:
        'บริษัทต้องการส่งเสริมให้พนักงานนำ Microsoft Copilot มาช่วยลดเวลาทำงานเอกสารและสรุปข้อมูล แต่ต้องมีโครงสร้างการเขียนคำสั่งที่ชัดเจนและปลอดภัยต่อข้อมูลบริษัท',
      solution:
        'ออกแบบหลักสูตรและโครงสร้างการเขียนคำสั่ง Prompt จัดอบรมเชิงปฏิบัติการ 3 รอบ พร้อมเดินให้คำแนะนำแบบตัวต่อตัวในห้องอบรม',
      keyFeatures: [
        'สอนการประยุกต์ใช้ Microsoft Copilot ร่วมกับ Word, Excel และการร่างอีเมลธุรกิจ',
        'ปูพื้นฐานโครงสร้างการเขียนคำสั่ง (Prompt Engineering) ให้ได้ผลลัพธ์ตรงตามงาน',
        'ฝึกปฏิบัติจริงในห้องอบรมพร้อมให้คำแนะนำรายบุคคล',
        'เน้นย้ำข้อควรระวังเรื่องข้อมูลส่วนบุคคลและข้อมูลความลับบริษัท (PDPA & Data Privacy)'
      ],
      techStack: ['Microsoft 365 Copilot', 'Copilot Studio', 'Prompt Engineering', 'AI Governance & PDPA']
    },
    {
      id: 'teams-meeting-room',
      title: 'ติดตั้งระบบห้องประชุม Microsoft Teams & ระบบจองห้องประชุมอัตโนมัติ',
      subtitle: 'เซ็ตอัปอุปกรณ์ห้องประชุมออนไลน์และทำระบบจองห้องประชุมอัตโนมัติผ่าน Microsoft Teams',
      badge: 'IT Infrastructure & Teams',
      category: 'ai-it',
      gallery: [],
      shortDesc:
        'ดำเนินการติดตั้งและตั้งค่าระบบห้องประชุมออนไลน์ Microsoft Teams (จอแสดงผล กล้อง และระบบเสียง) เสร็จสมบูรณ์ภายใน 4 วัน พร้อมทำระบบจองห้องประชุมอัตโนมัติใน Microsoft Teams',
      impactSummary: 'ตั้งค่าระบบห้องประชุมเสร็จใน 4 วัน • เชื่อมต่อระบบภาพและเสียงครบวงจร • มีระบบจองห้องประชุมอัตโนมัติใน Teams',
      metrics: [
        { label: 'เวลาดำเนินการ', value: '4 วัน' },
        { label: 'แพลตฟอร์ม', value: 'Microsoft Teams' },
        { label: 'สถานะ', value: 'Completed' }
      ],
      situation:
        'บริษัทต้องการยกระดับห้องประชุมให้รองรับการประชุมออนไลน์ผ่าน Microsoft Teams ได้อย่างราบรื่น พร้อมมีระบบจองคิวห้องประชุมที่สะดวก',
      solution:
        'ตั้งค่าอุปกรณ์แสดงผล กล้อง ไมโครโฟน และระบบเสียงเชื่อมต่อกับ Microsoft Teams และจัดทำระบบจองห้องประชุมอัตโนมัติ',
      keyFeatures: [
        'ติดตั้งและตั้งค่าระบบห้องประชุม Microsoft Teams พร้อมเชื่อมต่ออุปกรณ์ภาพและเสียง',
        'จัดทำระบบจองห้องประชุมอัตโนมัติผ่าน Microsoft Teams',
        'ทดสอบความเสถียรและส่งมอบงานพร้อมใช้งานภายใน 4 วัน'
      ],
      techStack: ['Microsoft Teams', 'Power Automate', 'AV & Conference Hardware', 'IT Support']
    }
  ]
};
