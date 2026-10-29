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
      title: 'SOP Generator, Revision & Digital Approval Web Portal',
      subtitle: 'Web application for creating, editing (revision), reviewing, and approving SOP documents online',
      badge: 'Web App • Document Workflow',
      category: 'webapp',
      coverImage: 'assets/sop-live-create.png',
      gallery: [
        {
          src: 'assets/sop-live-create.png',
          caption: 'Create SOP Screen (Entry): 5-step guided web form with auto-draft saving, real-time PDF preview, and direct submission for approval'
        },
        {
          src: 'assets/sop-live-signature.png',
          caption: 'Approval & E-Signature Screen: Electronic signature pad modal allowing reviewers and approvers to verify and stamp SOP documents'
        }
      ],
      shortDesc:
        'Built an internal web application (Next.js, React, TypeScript, FastAPI) to standardize SOP creation, handle returned document edits (Revision / Edit SOP), and manage multi-step electronic approvals.',
      impactSummary: 'Standardizes SOP creation & revision on the web • Multi-step approval queue • Tested with JMeter (100 users)',
      metrics: [
        { label: 'Workflow', value: 'Create & Edit SOP' },
        { label: 'Sign-off', value: '3-Step Approval' },
        { label: 'Load Test', value: '100 Users (JMeter)' }
      ],
      situation:
        'Previously, formatting SOP documents and tracking revisions across departments required manual file edits and physical routing for signatures.',
      solution:
        'Developed a web portal where staff fill out a 5-step guided SOP form, preview the generated PDF in real time, submit directly into a 3-role approval queue, and edit returned documents inline when reviewers request changes.',
      keyFeatures: [
        '5-Step Create SOP Web Form with auto-save draft, real-time PDF preview, and direct submission for approval',
        'Inline Edit / Revision SOP workflow displaying reviewer comments and annotation points when a document is returned',
        'Approval Queue tracking status across Reviewer and Approver stages with electronic signature and stamp support',
        'Load-tested with Apache JMeter at 100 concurrent users (1,100 requests, 0% error rate)'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'FastAPI (Python)', 'Prisma', 'PDF-Lib', 'Apache JMeter'],
      privacyNote: 'All screenshots use test accounts (Admin 1 / Demo) and do not display internal company library files.'
    },
    {
      id: 'hr-stock',
      title: 'Haco P&C Stock & Barcode Requisition Web App',
      subtitle: 'Internal web tool for office supply requisitions, electronic signatures, and barcode stock tracking',
      badge: 'Web App • Barcode & Stock',
      category: 'webapp',
      coverImage: 'assets/hr-live-inbound.png',
      gallery: [
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'Item Entry Screen (Stock-In): Form for linking incoming items to PO numbers and recording inventory quantities'
        },
        {
          src: 'assets/hr-live-signature.png',
          caption: 'Requester Screen & E-Signature: Employees review requested items and sign directly on screen before submission'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'Approval & Dispatch Screen: HR staff review pending requisitions and scan item barcodes to approve dispatch'
        }
      ],
      shortDesc:
        'Developed an internal web application for the P&C (HR) department to manage supply requisitions, reserve requested stock quantities, capture electronic signatures, and scan barcodes for stock-in and dispatch.',
      impactSummary: 'Online requisition & stock tracking • Stock reservation on request • Barcode scanner support',
      metrics: [
        { label: 'Stock Control', value: 'Reservation Lock' },
        { label: 'Verification', value: 'Barcode Scanner' },
        { label: 'Sign-off', value: 'E-Signature Pad' }
      ],
      situation:
        'Tracking office supply requisitions on paper required manual stock checks and manual data entry to update remaining inventory.',
      solution:
        'Built a web application with two main workflows: an employee requisition screen with stock reservation and electronic signature capture, and an HR staff screen for PO-linked stock-in and barcode-verified dispatch.',
      keyFeatures: [
        'Reserves requested item quantities when a requisition is submitted to prevent overlapping requests',
        'Electronic signature pad supporting both mobile touchscreens and desktop mice',
        'PO-linked Stock-In scanning and Requisition Queue barcode dispatch',
        'Generates a printable A4 requisition slip after dispatch'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Barcode Scanner', 'E-Signature'],
      privacyNote: 'Internal warehouse stock tables and employee logs are omitted to protect company data privacy.'
    },
    {
      id: 'ocr-scanner',
      title: 'HACO Smart Scanner V30 — Enterprise Business Card AI Web App',
      subtitle: 'Mobile & desktop web application built on Google Apps Script and Gemini / Gemma Multi-Model AI for single & bulk business card extraction into Google Sheets and Drive',
      badge: 'Web App • Apps Script + Gemini AI',
      category: 'webapp',
      coverImage: 'assets/haco-card-scanner.png',
      coverFit: 'contain',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'Live Web UI: Employee authentication and smart card capture interface for mobile & desktop browsers'
        }
      ],
      shortDesc:
        'Engineered an enterprise web application using Google Apps Script and Google Gemini/Gemma Multi-Model AI to extract business card contacts into structured Google Sheets records and secure Google Drive photo vaults.',
      impactSummary: 'Multimodal AI extraction (Gemini + Gemma fallback) • Single & bulk batch scanning • Google Workspace integration',
      metrics: [
        { label: 'AI Architecture', value: 'Gemini + Gemma' },
        { label: 'Batch Mode', value: 'Single & Bulk' },
        { label: 'Data Store', value: 'Sheets + Drive' }
      ],
      situation:
        'Sales teams and management collected hundreds of physical business cards from trade fairs and client meetings; manual data entry into spreadsheets was slow and prone to typographical errors.',
      solution:
        'Architected a cloud web app on Google Apps Script featuring single and bulk camera uploads, automated bilingual OCR using Gemini 2.5 Flash with Gemma 3 fallback, structured validation, and automated storage in Google Sheets and Google Drive.',
      keyFeatures: [
        'Multi-Model AI Orchestrator: Prioritizes ultra-fast Gemini 2.5 Flash (2-3s response) with seamless automatic failover to Gemma 3 27B-IT',
        'Single & Bulk Batch Scanner: Supports live mobile camera capture and bulk batch uploads with asynchronous queue tracking',
        'Bilingual Extraction: Accurately parses Thai and English names, corporate entities, phone numbers, emails, addresses, and websites into clean JSON',
        'Google Workspace Ecosystem: Persists structured records into Google Sheets and backs up original card images into Google Drive with timestamped URLs',
        'Analytics Dashboard & Inline Editor: Includes Chart.js analytics for department scans, search history, and modal inline record editing',
        'Unit Test Suite: Built-in 7-suite automated unit tests covering authentication, database CRUD, and fallback routines'
      ],
      techStack: ['Google Apps Script', 'Gemini 2.5 Flash', 'Gemma 3', 'Google Sheets DB', 'Google Drive API', 'Chart.js', 'JavaScript'],
      liveUrl: 'https://script.google.com/macros/s/AKfycbxWMx3SEmyPvN6GiRFDCS2j-PuGGz66TgX9sq5bERcYhaHVfESCebi14limXNFElQML/exec',
      liveLabel: 'Open Live Web App ↗'
    },
    {
      id: 'ceo-powerbi',
      title: 'Sales & Inventory Power BI Dashboards (SAP Data)',
      subtitle: 'Automated sales data preparation from SAP and interactive Power BI dashboards for business reporting',
      badge: 'BI & Data • Power BI + SAP',
      category: 'dashboard',
      coverImage: 'assets/pbi-multiyear-masked.png',
      gallery: [
        {
          src: 'assets/pbi-multiyear-masked.png',
          caption: 'Multi-Year Sales Comparison Dashboard (2025 vs 2026) by month, quarter, and product category (confidential figures blurred)'
        },
        {
          src: 'assets/pbi-smart-life-masked.png',
          caption: 'Smart Life Division Dashboard tracking sales against targets and quotations (confidential figures blurred)'
        }
      ],
      shortDesc:
        'Automated sales data preparation from SAP and created Power BI dashboards for management reporting, covering Multi-Year Sales (2025 vs 2026), Smart Life division, Project division, and Inventory.',
      impactSummary: 'Automated SAP data preparation • Sales (YoY, Smart Life, Project) & Inventory views • Interactive filters',
      metrics: [
        { label: 'Data Source', value: 'SAP' },
        { label: 'Tool', value: 'Power BI & DAX' },
        { label: 'Data Prep', value: 'Automated' }
      ],
      situation:
        'Compiling periodic sales and inventory reports required exporting raw data from SAP and manually formatting spreadsheets for each meeting.',
      solution:
        'Automated the data preparation workflow from SAP and built Power BI data models and DAX measures so executives and teams can filter sales and inventory trends directly.',
      keyFeatures: [
        'Automated sales and inventory data preparation from SAP exports/pipelines',
        'Multi-Year Sales Comparison (2025 vs 2026) by month, quarter, and product group',
        'Division dashboards for Smart Life and Project sales teams tracking targets and quotations (SQ/PO)',
        'Inventory monitoring dashboard view'
      ],
      techStack: ['Power BI', 'SAP Data Preparation', 'DAX', 'Power Query', 'Data Modeling'],
      privacyNote: 'All revenue numbers, customer names, and product SKUs are blurred to protect company confidentiality.'
    },
    {
      id: 'copilot-training',
      title: 'Corporate AI Enablement — Microsoft Copilot Training',
      subtitle: 'Prepared training materials and conducted 3 internal training sessions on Microsoft Copilot and prompt engineering',
      badge: 'AI Enablement • Internal Training',
      category: 'ai-it',
      coverImage: 'assets/copilot-speaker.jpg',
      gallery: [
        {
          src: 'assets/copilot-speaker.jpg',
          caption: 'Presenting practical Microsoft Copilot workflows during an internal training session'
        },
        {
          src: 'assets/copilot-group.jpg',
          caption: 'Group photo with participants from multiple departments during the internal Copilot training'
        },
        {
          src: 'assets/copilot-classroom.jpg',
          caption: 'Hands-on classroom practice where staff tested prompt writing on daily work tasks'
        },
        {
          src: 'assets/copilot-coaching.jpg',
          caption: 'Assisting team members individually with structuring prompts for their departmental tasks'
        }
      ],
      shortDesc:
        'Prepared training materials and conducted 3 internal training sessions for company staff on using Microsoft Copilot, writing clear prompts, and following company data privacy guidelines.',
      impactSummary: 'Conducted 3 internal training sessions • Practical prompt writing exercises • Data privacy guidelines',
      metrics: [
        { label: 'Training', value: '3 Internal Sessions' },
        { label: 'Format', value: 'Hands-on Practice' },
        { label: 'Topic', value: 'Copilot & Prompts' }
      ],
      situation:
        'The company wanted staff across departments to learn how to use Microsoft Copilot effectively for daily document and summarization tasks while keeping internal data safe.',
      solution:
        'Prepared training slides, prompt examples, and hands-on exercises, and conducted 3 internal training sessions with individual Q&A and coaching.',
      keyFeatures: [
        'Practical use cases for Microsoft Copilot in Word, Excel, and daily communication',
        'Structured prompt writing templates for summarizing data and drafting documents',
        'Hands-on classroom practice and individual guidance during sessions',
        'Guidelines on protecting sensitive company data when using AI tools'
      ],
      techStack: ['Microsoft Copilot', 'Copilot Studio', 'Prompt Engineering', 'Internal Training']
    }
  ],
  th: [
    {
      id: 'sop-generator',
      title: 'เว็บสร้าง แก้ไข (Revision) และอนุมัติเอกสาร SOP',
      subtitle: 'เว็บแอปสำหรับสร้างเอกสาร SOP ตามแม่แบบ แก้ไขงานเมื่อถูกตีกลับ (Edit SOP) และส่งอนุมัติออนไลน์',
      badge: 'Web App • Document Workflow',
      category: 'webapp',
      coverImage: 'assets/sop-live-create.png',
      gallery: [
        {
          src: 'assets/sop-live-create.png',
          caption: 'หน้ากรอกข้อมูลสร้างเอกสาร (Create SOP): กรอกข้อมูล 5 ขั้นตอน พร้อมบันทึกแบบร่างอัตโนมัติ เปิดดู Preview PDF และปุ่มส่งเอกสารขออนุมัติ'
        },
        {
          src: 'assets/sop-live-signature.png',
          caption: 'หน้าอนุมัติและประทับลายเซ็นดิจิทัล: หน้าต่างสำหรับผู้ตรวจทานและผู้อนุมัติวาดลายเซ็นเพื่อประทับตราเอกสาร SOP'
        }
      ],
      shortDesc:
        'พัฒนาเว็บแอปด้วย Next.js และ FastAPI เพื่อจัดทำมาตรฐานการสร้างเอกสาร SOP บนเว็บ รองรับการแก้ไขเอกสารเมื่อถูกตีกลับ (Edit SOP) และระบบส่งอนุมัติตามลำดับขั้น',
      impactSummary: 'สร้างและแก้ไขเอกสาร SOP บนเว็บ • ส่งอนุมัติตามลำดับขั้น • ทดสอบ Load Test ด้วย JMeter (100 Users)',
      metrics: [
        { label: 'ฟังก์ชันหลัก', value: 'สร้าง & แก้ไข SOP' },
        { label: 'สายอนุมัติ', value: '3 ลำดับขั้น' },
        { label: 'Load Test', value: '100 Users (JMeter)' }
      ],
      situation:
        'เดิมการจัดทำและแก้ไขเอกสาร SOP ต้องจัดหน้าเอกสารเองและส่งตรวจทานหลายรอบ เมื่อมีการขอให้แก้ไขจึงติดตามจุดที่ต้องแก้ได้ยาก',
      solution:
        'พัฒนาเว็บแอปที่แบ่งการกรอกข้อมูลเป็น 5 ขั้นตอน ดูตัวอย่าง PDF ได้ทันที ส่งเข้าคิวผู้ตรวจสอบและผู้อนุมัติบนเว็บ และมีหน้าแก้ไขเอกสาร (Edit SOP) ที่แสดงข้อเสนอแนะจากผู้ตรวจอย่างชัดเจน',
      keyFeatures: [
        'หน้าสร้างเอกสาร SOP 5 ขั้นตอน พร้อมบันทึกแบบร่างอัตโนมัติ เปิดดู Preview PDF และกดส่งขออนุมัติจากหน้าเว็บได้ทันที',
        'หน้าแก้ไขเอกสาร SOP (Revision) แสดงเหตุผลและจุดที่ผู้ตรวจแจ้งให้แก้ไข พร้อมปุ่มส่งกลับให้ผู้ลงนามเดิม',
        'ระบบคิวพิจารณาอนุมัติ แยกสถานะ รอผู้ตรวจ รอผู้อนุมัติ และส่งกลับแก้ไข พร้อมระบบลายเซ็นดิจิทัล',
        'ทดสอบการรองรับผู้ใช้งานด้วย Apache JMeter ที่ 100 Concurrent Users (1,100 Requests)'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'FastAPI (Python)', 'Prisma', 'PDF-Lib', 'Apache JMeter'],
      privacyNote: 'ภาพหน้าจอทั้งหมดใช้บัญชีทดสอบ (Admin 1 / Demo) และไม่แสดงข้อมูลในคลังเอกสารภายในของบริษัท'
    },
    {
      id: 'hr-stock',
      title: 'ระบบเว็บเบิกพัสดุและจัดการสต็อก Haco P&C (HR)',
      subtitle: 'เว็บแอปสำหรับขอเบิกพัสดุออนไลน์ ลงลายมือชื่อบนหน้าจอ และใช้ปืนยิงบาร์โค้ดรับเข้า/จ่ายออก',
      badge: 'Web App • Barcode & Stock',
      category: 'webapp',
      coverImage: 'assets/hr-live-inbound.png',
      gallery: [
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'หน้ากรอกรับของเข้าสต็อก (Stock-In): กรอกผูกเลขที่เอกสาร PO ก่อนเริ่มยิงบาร์โค้ดรับพัสดุเข้าคลัง'
        },
        {
          src: 'assets/hr-live-signature.png',
          caption: 'หน้าผู้ร้องขอและลงลายมือชื่อ: ตรวจสอบรายการพัสดุที่ขอเบิกและเซ็นชื่ออิเล็กทรอนิกส์ยืนยันบนหน้าจอ'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'หน้าผู้อนุมัติและตัดจ่ายพัสดุ: เจ้าหน้าที่ HR ตรวจสอบคิวคำขอและใช้ปืนยิงบาร์โค้ดสแกนจ่ายของ'
        }
      ],
      shortDesc:
        'พัฒนาเว็บแอปพลิเคชันสำหรับแผนก P&C (HR) เพื่อให้พนักงานทำรายการขอเบิกพัสดุพร้อมจองยอดสต็อก เซ็นชื่ออิเล็กทรอนิกส์ และให้เจ้าหน้าที่ HR สแกนบาร์โค้ดรับของเข้า (PO) และจ่ายของ',
      impactSummary: 'ขอเบิกและติดตามสต็อกผ่านเว็บ • จองยอดสต็อกเมื่อกดขอเบิก • รองรับการสแกนบาร์โค้ดรับเข้า-จ่ายออก',
      metrics: [
        { label: 'การคุมสต็อก', value: 'จองยอดเมื่อขอเบิก' },
        { label: 'การตรวจสอบ', value: 'Barcode Scanner' },
        { label: 'การลงนาม', value: 'E-Signature Pad' }
      ],
      situation:
        'การเขียนใบเบิกกระดาษทำให้ตรวจสอบจำนวนพัสดุคงเหลือได้ช้า และเจ้าหน้าที่ต้องคอยบันทึกตัดสต็อกด้วยมือ',
      solution:
        'พัฒนาเว็บแอปสำหรับพนักงานกดขอเบิกและเซ็นชื่อบนหน้าจอ (พร้อมระบบจองยอดทันที) และหน้าสำหรับเจ้าหน้าที่ HR ผูกเลข PO รับของเข้าและสแกนบาร์โค้ดจ่ายพัสดุ',
      keyFeatures: [
        'ระบบจองยอดพัสดุเมื่อพนักงานกดส่งคำขอเบิก เพื่อลดปัญหาการขอเบิกซ้ำซ้อน',
        'รองรับการเซ็นชื่ออิเล็กทรอนิกส์ทั้งบนหน้าจอมือถือและคอมพิวเตอร์',
        'หน้ารับพัสดุเข้าคลังโดยผูกเลข PO และหน้าคิวสแกนบาร์โค้ดสำหรับตัดจ่ายพัสดุ',
        'สร้างแบบฟอร์มใบเบิกขนาด A4 สำหรับพิมพ์หรือจัดเก็บหลังจ่ายของเสร็จ'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Barcode Scanner', 'E-Signature'],
      privacyNote: 'ไม่แสดงตารางข้อมูลพัสดุในคลังและประวัติผู้ใช้งานจริง เพื่อรักษาความลับของข้อมูลภายในบริษัท'
    },
    {
      id: 'ocr-scanner',
      title: 'HACO Smart Scanner V30 — เว็บแอปสแกนนามบัตร AI ระดับองค์กร (Google Apps Script)',
      subtitle: 'เว็บแอปบนมือถือและคอมพิวเตอร์ พัฒนาด้วย Google Apps Script ผสาน Gemini 2.5 Flash / Gemma 3 Multi-Model AI สกัดข้อมูลนามบัตรบันทึกเข้า Google Sheets และ Drive',
      badge: 'Web App • Apps Script + Gemini AI',
      category: 'webapp',
      coverImage: 'assets/haco-card-scanner.png',
      coverFit: 'contain',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'หน้าจอเว็บจริง: ระบบยืนยันตัวตนพนักงานและอินเทอร์เฟซสแกนนามบัตรอัจฉริยะ รองรับทั้งเบราว์เซอร์มือถือและคอมพิวเตอร์'
        }
      ],
      shortDesc:
        'พัฒนาเว็บแอปพลิเคชันระดับองค์กรด้วย Google Apps Script ร่วมกับ Google Gemini/Gemma Multi-Model AI สกัดข้อมูลนามบัตรเป็นโครงสร้างบันทึกสู่ Google Sheets และจัดเก็บภาพต้นฉบับใน Google Drive อย่างปลอดภัย',
      impactSummary: 'สกัดข้อมูลด้วย AI Multimodal (Gemini + Gemma สำรอง) • สแกนทั้งเดี่ยวและชุด (Bulk) • บันทึกลง Google Sheets และ Drive',
      metrics: [
        { label: 'สถาปัตยกรรม AI', value: 'Gemini + Gemma' },
        { label: 'โหมดการสแกน', value: 'Single & Bulk' },
        { label: 'แหล่งจัดเก็บ', value: 'Sheets + Drive' }
      ],
      situation:
        'ทีมขายและฝ่ายบริหารได้รับนามบัตรจำนวนมากจากงานแสดงสินค้าและการพบลูกค้า การพิมพ์ข้อมูลลงตารางด้วยตนเองใช้เวลานานและมีโอกาสตกหล่น',
      solution:
        'ออกแบบสถาปัตยกรรมเว็บแอปบน Google Apps Script รองรับการถ่ายภาพสแกนแบบเดี่ยวและชุด ประมวลผลด้วยโมเดล Gemini 2.5 Flash (ความเร็ว 2-3 วิ) พร้อมระบบ Fallback ไปยัง Gemma 3 อัตโนมัติ จัดเก็บข้อมูลแยกฟิลด์ลง Google Sheets และเซฟรูปภาพลง Google Drive',
      keyFeatures: [
        'ระบบสลับโมเดล AI อัตโนมัติ (Multi-Model AI): เริ่มต้นด้วย Gemini 2.5 Flash และสลับไปใช้ Gemma 3 27B-IT ทันทีเมื่อเกิดปัญหา Quota/Rate Limit',
        'รองรับการสแกนแบบเดี่ยวและเป็นชุด (Single & Bulk): รองรับการเปิดกล้องมือถือถ่ายทันที และการอัปโหลดไฟล์เป็นชุดพร้อมคิวประมวลผล',
        'สกัดข้อมูลสองภาษา (Bilingual OCR): สกัดชื่อ, บริษัท, ตำแหน่ง, เบอร์โทร, อีเมล, ที่อยู่ และเว็บไซต์ทั้งไทย-อังกฤษ เป็นโครงสร้าง JSON สะอาด',
        'ผสานระบบ Google Workspace: บันทึกข้อมูลลง Google Sheets และอัปโหลดไฟล์ภาพต้นฉบับเข้า Google Drive พร้อมสร้าง URL พรีวิวเฉพาะ',
        'แดชบอร์ดสถิติและระบบแก้ไข: หน้า Dashboard สรุปข้อมูลด้วย Chart.js พร้อมระบบค้นหาย้อนหลังและหน้าต่างแก้ไขข้อมูล (Inline Edit)',
        'ชุดทดสอบระบบอัตโนมัติ (Unit Tests): เขียนฟังก์ชันทดสอบ 7 ระบบหลัก (Auth, CRUD, Dashboard, Sheet) มั่นใจก่อนปล่อยใช้งานจริง'
      ],
      techStack: ['Google Apps Script', 'Gemini 2.5 Flash', 'Gemma 3', 'Google Sheets DB', 'Google Drive API', 'Chart.js', 'JavaScript'],
      liveUrl: 'https://script.google.com/macros/s/AKfycbxWMx3SEmyPvN6GiRFDCS2j-PuGGz66TgX9sq5bERcYhaHVfESCebi14limXNFElQML/exec',
      liveLabel: 'เปิดเว็บแอปจริง ↗'
    },
    {
      id: 'ceo-powerbi',
      title: 'Power BI Dashboard สรุปข้อมูลยอดขายและคลังสินค้า (เชื่อมข้อมูล SAP)',
      subtitle: 'เตรียมข้อมูลการขายอัตโนมัติจาก SAP และสร้างแดชบอร์ด Power BI สำหรับรายงานทางธุรกิจ',
      badge: 'BI & Data • Power BI + SAP',
      category: 'dashboard',
      coverImage: 'assets/pbi-multiyear-masked.png',
      gallery: [
        {
          src: 'assets/pbi-multiyear-masked.png',
          caption: 'แดชบอร์ดเปรียบเทียบยอดขายข้ามปี 2025 vs 2026 แยกตามเดือน ไตรมาส และกลุ่มสินค้า (เบลอตัวเลขความลับแล้ว)'
        },
        {
          src: 'assets/pbi-smart-life-masked.png',
          caption: 'แดชบอร์ดแผนก Smart Life ติดตามยอดขายเทียบเป้าหมายและใบเสนอราคา (เบลอตัวเลขความลับแล้ว)'
        }
      ],
      shortDesc:
        'ทำระบบเตรียมข้อมูลยอดขายจาก SAP อัตโนมัติ และสร้างแดชบอร์ด Power BI สำหรับรายงานธุรกิจ ครอบคลุมหน้าเปรียบเทียบยอดขายข้ามปี (2025 vs 2026), แผนก Smart Life, แผนก Project และ Inventory',
      impactSummary: 'เตรียมข้อมูลจาก SAP อัตโนมัติ • รายงานยอดขาย (YoY, Smart Life, Project) และ Inventory • กรองดูข้อมูลย่อยได้ทันที',
      metrics: [
        { label: 'แหล่งข้อมูล', value: 'SAP' },
        { label: 'เครื่องมือ', value: 'Power BI & DAX' },
        { label: 'การเตรียมข้อมูล', value: 'Automated' }
      ],
      situation:
        'การทำรายงานสรุปยอดขายและคลังสินค้าในแต่ละรอบต้องดึงข้อมูลจาก SAP มาจัดตารางด้วยมือ ทำให้ใช้เวลาในการเตรียมรายงาน',
      solution:
        'จัดทำขั้นตอนเตรียมข้อมูลจาก SAP อัตโนมัติ และผูกความสัมพันธ์ข้อมูลใน Power BI พร้อมเขียนสูตร DAX เพื่อให้เลือกดูข้อมูลตามปี เดือน และทีมขายได้สะดวก',
      keyFeatures: [
        'ระบบเตรียมข้อมูลยอดขายและคลังสินค้าจาก SAP อัตโนมัติ',
        'หน้าเปรียบเทียบยอดขายปี 2025 เทียบ 2026 แยกตามเดือน ไตรมาส และหมวดหมู่สินค้า',
        'หน้าติดตามยอดขายเทียบเป้าหมายและใบเสนอราคา (SQ/PO) ของทีม Smart Life และ Project',
        'หน้ารายงานข้อมูลคลังสินค้า (Inventory)'
      ],
      techStack: ['Power BI', 'SAP Data Preparation', 'DAX', 'Power Query', 'Data Modeling'],
      privacyNote: 'เบลอตัวเลขยอดขาย ชื่อลูกค้า และรหัสสินค้าทั้งหมดเพื่อรักษาความลับของบริษัทอย่างเคร่งครัด'
    },
    {
      id: 'copilot-training',
      title: 'การจัดอบรม Microsoft Copilot & Prompt Engineering ภายในองค์กร',
      subtitle: 'จัดทำเอกสารการสอนและจัดการอบรมภายใน 3 รอบ เกี่ยวกับการใช้งาน Microsoft Copilot และการเขียน Prompt',
      badge: 'AI Enablement • Internal Training',
      category: 'ai-it',
      coverImage: 'assets/copilot-speaker.jpg',
      gallery: [
        {
          src: 'assets/copilot-speaker.jpg',
          caption: 'บรรยากาศการบรรยายแนวทางใช้งาน Microsoft Copilot ในห้องอบรมของบริษัท'
        },
        {
          src: 'assets/copilot-group.jpg',
          caption: 'ภาพถ่ายร่วมกับพนักงานที่เข้าร่วมการอบรมการใช้ AI ในการทำงาน'
        },
        {
          src: 'assets/copilot-classroom.jpg',
          caption: 'การฝึกปฏิบัติในห้องอบรมให้พนักงานทดลองเขียนคำสั่ง Prompt กับงานเอกสาร'
        },
        {
          src: 'assets/copilot-coaching.jpg',
          caption: 'ให้คำแนะนำการเขียนและปรับแก้ Prompt รายบุคคลระหว่างการฝึกอบรม'
        }
      ],
      shortDesc:
        'จัดทำสื่อการสอนและดำเนินการอบรมภายในจำนวน 3 รอบ ให้กับพนักงานในบริษัท ในหัวข้อการใช้งาน Microsoft Copilot เบื้องต้น เทคนิคการเขียนคำสั่ง (Prompt Engineering) และข้อควรระวังด้านข้อมูลความลับ',
      impactSummary: 'จัดการอบรมภายใน 3 รอบ • ฝึกเขียน Prompt จากโจทย์งานจริง • แนะนำแนวทางป้องกันข้อมูลรั่วไหล',
      metrics: [
        { label: 'จำนวนรอบ', value: '3 รอบการอบรม' },
        { label: 'รูปแบบ', value: 'บรรยายและฝึกปฏิบัติ' },
        { label: 'เนื้อหา', value: 'Copilot & Prompts' }
      ],
      situation:
        'บริษัทต้องการให้พนักงานในแผนกต่างๆ เรียนรู้วิธีใช้งาน Microsoft Copilot เพื่อช่วยสรุปข้อมูลและร่างเอกสารได้อย่างถูกต้องและปลอดภัย',
      solution:
        'เตรียมเนื้อหาการสอน ตัวอย่างโครงสร้างการเขียนคำสั่ง Prompt และจัดอบรมเชิงปฏิบัติการภายใน 3 รอบ พร้อมเดินแนะแนวทางรายบุคคล',
      keyFeatures: [
        'แนะนำการใช้งาน Microsoft Copilot ร่วมกับงานเอกสารและการสรุปข้อมูล',
        'สอนโครงสร้างการเขียนคำสั่ง (Prompt Engineering) ให้ได้ผลลัพธ์ตรงตามความต้องการ',
        'ให้ผู้เข้าอบรมทดลองเขียน Prompt และช่วยแนะนำการปรับแก้แบบตัวต่อตัว',
        'ชี้แจงข้อควรระวังในการไม่นำข้อมูลความลับของบริษัทไปกรอกในระบบ AI สาธารณะ'
      ],
      techStack: ['Microsoft Copilot', 'Copilot Studio', 'Prompt Engineering', 'Internal Training']
    }
  ]
};
