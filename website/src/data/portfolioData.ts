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
      title: 'SOP Generator, Revision & Digital Approval Web Portal (Gemini & Gemma AI)',
      subtitle: 'AI-powered web application using Google Gemini Flash & Gemma Multi-Model AI for creating, auditing, revising, and approving SOP documents online',
      badge: 'Web App • Gemini & Gemma AI',
      category: 'webapp',
      coverImage: 'assets/sop-home.png',
      gallery: [
        {
          src: 'assets/sop-home.png',
          caption: 'SOP Web Portal Home: Unified document center with 3-tier workflow tracking and automated AI pre-check integration'
        },
        {
          src: 'assets/sop-live-create.png',
          caption: 'Step 1 — Document Info: Guided web form with auto-draft saving and real-time readiness score'
        },
        {
          src: 'assets/sop-step2-responsibility.png',
          caption: 'Step 2 — 3-Tier Responsibility: Assigning Issuer, Reviewer, and Approver roles with Issuer Lock'
        },
        {
          src: 'assets/sop-step3-content.png',
          caption: 'Step 3 — SOP Main Content: Structured inputs for Objectives, Tools/Equipment, and Operators'
        },
        {
          src: 'assets/sop-step4-procedure.png',
          caption: 'Step 4 — Work Procedure & AI Copilot: Step-by-step work instructions assisted by Gemini / Gemma AI'
        },
        {
          src: 'assets/sop-step5-export.png',
          caption: 'Step 5 — References & 100% Readiness: Completeness verification before Word/PDF generation'
        },
        {
          src: 'assets/sop-live-pdf-preview.png',
          caption: 'Real-Time PDF Preview: Instant preview rendered directly from the company ISO Word template'
        },
        {
          src: 'assets/sop-live-queue.png',
          caption: 'Approval & Stamp Queue: Tracking documents across Pending Review, Pending Approval, and Returned states'
        },
        {
          src: 'assets/sop-live-pin-comment.png',
          caption: 'Reviewer Pin Annotation Workstation: Interactive PDF viewer where reviewers drop pin comments on specific lines (test strings & personal names masked)'
        },
        {
          src: 'assets/sop-live-returned-view.png',
          caption: 'Returned Document Feedback View: Displays reviewer pin locations, rejection reasons, and re-submission controls (test strings & personal names masked)'
        },
        {
          src: 'assets/sop-live-edit.png',
          caption: 'Inline Edit / Revision SOP Screen: Editing returned SOP content alongside reviewer comments before re-submitting (form inputs masked)'
        },
        {
          src: 'assets/sop-web-library-censored.png',
          caption: 'Central SOP Document Library: Departmental folder archive for approved SOPs (department names masked for privacy)'
        },
        {
          src: 'assets/sop-jmeter-100users.png',
          caption: 'Apache JMeter Load & Stress Test Report: 100 concurrent users benchmark with 1,100 transactions, 0.00% error rate, and 4.70ms latency (signatures masked)'
        }
      ],
      shortDesc:
        'Built an internal web application (Next.js, React, TypeScript, FastAPI) powered by Google Gemini AI (Gemini 3.5 / 2.5 Flash) and Gemma Multi-Model AI (Gemma 4 31B-IT) to assist in drafting SOP procedures, run automated pre-submission document & signature audits, handle returned document edits (Revision / Edit SOP), and manage 3-tier electronic approvals.',
      impactSummary: 'Gemini & Gemma AI Copilot + Pre-Submission Audit • 5-Step Create & Revision Workflow • JMeter Tested (100 Users)',
      metrics: [
        { label: 'AI Engine', value: 'Gemini + Gemma AI' },
        { label: 'Workflow', value: 'Create, Audit & Edit' },
        { label: 'Load Test', value: '100 Users (JMeter)' }
      ],
      situation:
        'Previously, drafting SOP documents, checking formatting completeness, and routing revisions across departments required manual Word edits and physical paper sign-offs.',
      solution:
        'Developed a full-stack web portal integrating Google Gemini Flash (with automatic multi-model fallback to Gemma 4 31B-IT) to help draft standardized SOP content and audit documents prior to submission, combined with a 5-step guided builder, real-time PDF preview, interactive pin-comment review workstation, inline revision editor, and departmental library.',
      keyFeatures: [
        'Multi-Model AI Copilot & Pre-Submission Audit: Uses Google Gemini Flash (3.5 / 2.5 Flash) and Gemma 4 31B-IT to assist SOP drafting, check typos/completeness, and verify 3-tier signatures',
        '5-Step Guided SOP Builder (Document Info, 3-Tier Responsibility, Content, Procedure, References) with live readiness percentage and real-time PDF preview',
        'Interactive Pin-Comment Review & Inline Revision Workflow: Reviewers pin comments directly onto PDF pages; issuers edit and re-submit online',
        'Central Departmental Document Library and Apache JMeter verification at 100 concurrent users (1,100 requests, 0% error rate)'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'FastAPI (Python)', 'Gemini Flash AI', 'Gemma Multi-Model AI', 'Prisma', 'PDF-Lib', 'Apache JMeter'],
      privacyNote: 'All internal company document details, personal names, and department folder names are strictly censored to ensure data privacy.'
    },
    {
      id: 'hr-stock',
      title: 'Haco P&C Stock & Barcode Requisition Web App',
      subtitle: 'Internal web tool for office supply requisitions, electronic signatures, and barcode stock tracking',
      badge: 'Web App • Barcode & Stock',
      category: 'webapp',
      coverImage: 'assets/hr-web-stock-on-hand.png',
      gallery: [
        {
          src: 'assets/hr-web-stock-on-hand.png',
          caption: 'Inventory Dashboard (Stock On Hand): Real-time inventory overview showing available quantities, reservation locks, and minimum threshold alerts (stock items masked)'
        },
        {
          src: 'assets/hr-live-signature.png',
          caption: 'Requester Screen & E-Signature: Employees review requested items and sign directly on screen before submission (item names masked)'
        },
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'Approved & Dispatched Requisition Queue: HR dispatch log tracking approved requisitions and auto-approval status (employee names & IDs masked)'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'Pending Barcode Dispatch Queue: HR staff interface for scanning item barcodes to verify and approve pending outbound requests'
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
        'Built a web application with two main workflows: an employee requisition screen with stock reservation and electronic signature capture, and an HR staff screen for PO-linked stock-in, barcode-verified dispatch, and real-time Stock On Hand monitoring.',
      keyFeatures: [
        'Real-time Stock On Hand dashboard displaying actual stock, reserved quantities, available balance, and minimum stock alerts',
        'Reserves requested item quantities when a requisition is submitted to prevent overlapping requests',
        'Electronic signature pad supporting both mobile touchscreens and desktop mice',
        'PO-linked Stock-In scanning, Requisition Queue barcode dispatch, and printable A4 requisition slips'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Barcode Scanner', 'E-Signature'],
      privacyNote: 'All internal warehouse stock records, item codes, and employee names are strictly censored to protect company data privacy.'
    },
    {
      id: 'ocr-scanner',
      title: 'HACO Smart Scanner — Enterprise Business Card AI Web App',
      subtitle: 'Mobile & desktop web application built on Google Apps Script and Gemini / Gemma Multi-Model AI for single & bulk business card extraction into Google Sheets and Drive',
      badge: 'Web App • Apps Script + Gemini AI',
      category: 'webapp',
      coverImage: 'assets/haco-scanner-home.png',
      coverFit: 'cover',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'Employee Authentication Screen: Secure staff ID and 4-digit verification login portal'
        },
        {
          src: 'assets/haco-scanner-home.png',
          caption: 'Home Menu & Mode Selection: Hub for Single AI Scan, Bulk Batch Upload, and History navigation'
        },
        {
          src: 'assets/haco-scanner-single.png',
          caption: 'Single AI Scan & Extracted Result View: Full capture form with Gemini 2.5 Flash / Gemma 3 OCR parser and structured output fields'
        },
        {
          src: 'assets/haco-scanner-bulk.png',
          caption: 'Bulk Batch Card Upload Queue: Multi-card processing pipeline (up to 15 cards/batch) with automated Google Sheets sync'
        },
        {
          src: 'assets/haco-scanner-dashboard.png',
          caption: 'Analytics Dashboard: 7-day scan frequency charts, active user rankings, and total scan volume metrics'
        },
        {
          src: 'assets/haco-scanner-history.png',
          caption: 'Search & Historical Card Records: Searchable table of archived contacts with privacy-masked records'
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
        'Analytics Dashboard & Inline Editor: Includes Chart.js analytics for department scans, search history, and modal inline record editing'
      ],
      techStack: ['Google Apps Script', 'Gemini 2.5 Flash', 'Gemma 3', 'Google Sheets DB', 'Google Drive API', 'Chart.js', 'JavaScript'],
      privacyNote: 'All scanned business card contact details are blurred to protect client and partner privacy.'
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
      coverImage: 'assets/copilot-group.jpg',
      gallery: [
        {
          src: 'assets/copilot-group.jpg',
          caption: 'Group photo with participants from multiple departments during the internal AI for Modern Workplace with Microsoft Copilot training'
        },
        {
          src: 'assets/copilot-speaker.jpg',
          caption: 'Presenting practical Microsoft Copilot workflows during an internal training session'
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
      title: 'เว็บสร้าง แก้ไข (Revision) และอนุมัติเอกสาร SOP ออนไลน์ (ขับเคลื่อนด้วย Gemini & Gemma AI)',
      subtitle: 'เว็บแอปพลิเคชันผสาน Google Gemini Flash & Gemma Multi-Model AI สำหรับร่างเนื้อหา ตรวจสอบความถูกต้อง แก้ไขงานตีกลับ และอนุมัติเอกสาร SOP',
      badge: 'Web App • Gemini & Gemma AI',
      category: 'webapp',
      coverImage: 'assets/sop-home.png',
      gallery: [
        {
          src: 'assets/sop-home.png',
          caption: 'หน้าหลักพอร์ทัล SOP: ศูนย์รวมเอกสาร ตรวจสอบสถานะการอนุมัติ 3 ฝ่าย และผสานขั้นตอน AI Pre-Check ตรวจสอบเนื้อหา'
        },
        {
          src: 'assets/sop-live-create.png',
          caption: 'ขั้นตอนที่ 1 — ข้อมูลเอกสาร: ฟอร์มกรอกข้อมูลควบคุมเอกสารพร้อมบันทึกฉบับร่างอัตโนมัติ'
        },
        {
          src: 'assets/sop-step2-responsibility.png',
          caption: 'ขั้นตอนที่ 2 — ผู้รับผิดชอบเอกสาร 3 ฝ่าย: กำหนดผู้จัดทำ (Issuer Lock), ผู้ตรวจสอบ และผู้อนุมัติ'
        },
        {
          src: 'assets/sop-step3-content.png',
          caption: 'ขั้นตอนที่ 3 — เนื้อหา SOP: กรอกวัตถุประสงค์ เครื่องมือ/อุปกรณ์ และผู้ปฏิบัติงานตามมาตรฐาน ISO'
        },
        {
          src: 'assets/sop-step4-procedure.png',
          caption: 'ขั้นตอนที่ 4 — วิธีการปฏิบัติงาน (AI Copilot): เขียนขั้นตอนการทำงานพร้อมระบบ AI ช่วยจัดระเบียบเนื้อหา'
        },
        {
          src: 'assets/sop-step5-export.png',
          caption: 'ขั้นตอนที่ 5 — เอกสารและรูปภาพประกอบ: ตรวจสอบความครบถ้วน 100% ก่อนดาวน์โหลดหรือส่งอนุมัติ'
        },
        {
          src: 'assets/sop-live-pdf-preview.png',
          caption: 'พรีวิว PDF แบบ Real-time: แสดงตัวอย่างเอกสารจริงจาก Template มาตรฐานทันทีบนหน้าเว็บ'
        },
        {
          src: 'assets/sop-live-queue.png',
          caption: 'หน้าคิวพิจารณาอนุมัติเอกสาร SOP: ติดตามสถานะรอผู้ตรวจ รอผู้อนุมัติ และรายการที่ถูกส่งกลับแก้ไข'
        },
        {
          src: 'assets/sop-live-pin-comment.png',
          caption: 'หน้าตรวจทานและปักหมุดใส่ Comment บน PDF: ผู้ตรวจคลิกปักหมุดชี้จุดที่ต้องแก้บนหน้าเอกสารได้โดยตรง (เซ็นเซอร์ข้อมูลทดสอบและชื่อบุคคลแล้ว)'
        },
        {
          src: 'assets/sop-live-returned-view.png',
          caption: 'หน้าแสดงจุดที่ถูกตีกลับแก้ไข (Pin Feedback): แสดงตำแหน่งหมุดและเหตุผลที่ผู้ตรวจชี้แนะพร้อมปุ่มส่งไฟล์แก้ไขใหม่ (เซ็นเซอร์ข้อมูลทดสอบและชื่อบุคคลแล้ว)'
        },
        {
          src: 'assets/sop-live-edit.png',
          caption: 'หน้าแก้ไขเอกสาร SOP (Edit / Revision SOP): แก้ไขเนื้อหาตามจุดที่ผู้ตรวจคอมเมนต์และกดส่งอนุมัติซ้ำบนเว็บ (เซ็นเซอร์ช่องข้อมูลแล้ว)'
        },
        {
          src: 'assets/sop-web-library-censored.png',
          caption: 'หน้าคลังเอกสาร SOP (Document Library): จัดเก็บเอกสารแยกโฟลเดอร์ตามแผนก (เซ็นเซอร์ชื่อแผนกแล้ว)'
        },
        {
          src: 'assets/sop-jmeter-100users.png',
          caption: 'ผลการทดสอบประสิทธิภาพ Apache JMeter: ทดสอบโหลดผู้ใช้งานพร้อมกัน 100 คน (1,100 รายการ, Error 0.00%, ความเร็วเฉลี่ย 4.70ms) (เซ็นเซอร์ชื่อผู้ตรวจรับรองแล้ว)'
        }
      ],
      shortDesc:
        'พัฒนาเว็บแอปพลิเคชันภายในองค์กร (Next.js, React, TypeScript, FastAPI) ผสานโมเดล Google Gemini AI (Gemini 3.5 / 2.5 Flash) และ Gemma Multi-Model AI (Gemma 4 31B-IT) เพื่อช่วยร่างเนื้อหาขั้นตอนปฏิบัติงาน ตรวจสอบความสมบูรณ์และลายเซ็นทั้ง 3 ช่องอัตโนมัติ รองรับการปักหมุดแก้ไขเอกสารที่ถูกตีกลับ (Revision) และอนุมัติออนไลน์ครบวงจร',
      impactSummary: 'ใช้ Gemini & Gemma AI ช่วยร่างและตรวจเอกสาร • ฟอร์มสร้างและแก้ไข SOP 5 ขั้นตอน • ทดสอบ JMeter (100 Users)',
      metrics: [
        { label: 'โมเดล AI', value: 'Gemini + Gemma AI' },
        { label: 'ระบบงาน', value: 'สร้าง, ตรวจ & แก้ไข SOP' },
        { label: 'ทดสอบระบบ', value: '100 Users (JMeter)' }
      ],
      situation:
        'เดิมการจัดทำและแก้ไขเอกสาร SOP ต้องจัดหน้าในไฟล์แยกกันเอง ตรวจสอบคำผิด/ลายเซ็นด้วยตาเปล่า และเดินเอกสารเพื่อเซ็นอนุมัติ',
      solution:
        'พัฒนาเว็บพอร์ทัลที่เชื่อมต่อ Google Gemini Flash (พร้อมระบบสลับโมเดลอัตโนมัติไปยัง Gemma 4 31B-IT) เพื่อช่วยร่างเนื้อหาและตรวจสอบความครบถ้วนก่อนส่งอนุมัติ มีฟอร์มกรอก 5 ขั้นตอน พรีวิว PDF เรียลไทม์ ระบบปักหมุดคอมเมนต์บนเอกสาร หน้าแก้ไขงานตีกลับ และคลังเอกสารแยกตามแผนก',
      keyFeatures: [
        'ระบบ AI Copilot & Pre-Submission Audit: ใช้ Google Gemini Flash (3.5 / 2.5 Flash) และ Gemma 4 31B-IT ช่วยร่างเนื้อหา SOP ตรวจคำผิด และตรวจสอบลายเซ็นทั้ง 3 ช่อง',
        'ฟอร์มสร้างเอกสาร SOP 5 ขั้นตอน พร้อมคำนวณความครบถ้วน 100% และเปิดดูพรีวิว PDF แบบเรียลไทม์',
        'ระบบปักหมุดชี้จุดแก้ไขบน PDF (Pin Annotation) และหน้าแก้ไขเอกสาร (Edit / Revision SOP) เมื่อถูกตีกลับ',
        'คลังเอกสารแยกตามแผนก พร้อมผลทดสอบความเสถียรด้วย Apache JMeter ที่ผู้ใช้งานพร้อมกัน 100 คน (1,100 requests, Error 0%)'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'FastAPI (Python)', 'Gemini Flash AI', 'Gemma Multi-Model AI', 'Prisma', 'PDF-Lib', 'Apache JMeter'],
      privacyNote: 'เซ็นเซอร์ข้อมูลเนื้อหาเอกสาร ชื่อบุคคล และชื่อแผนกทั้งหมดเพื่อรักษาความลับของข้อมูลภายในบริษัท'
    },
    {
      id: 'hr-stock',
      title: 'เว็บแอปเบิกพัสดุและตัดสต็อกด้วยบาร์โค้ด (Haco P&C Stock)',
      subtitle: 'ระบบภายในสำหรับขอเบิกพัสดุสำนักงาน เซ็นชื่ออิเล็กทรอนิกส์ และสแกนบาร์โค้ดรับเข้า-จ่ายออก',
      badge: 'Web App • Barcode & Stock',
      category: 'webapp',
      coverImage: 'assets/hr-web-stock-on-hand.png',
      gallery: [
        {
          src: 'assets/hr-web-stock-on-hand.png',
          caption: 'แดชบอร์ดจัดการสต็อก (Stock On Hand): แสดงรายการสต็อกคงเหลือจริง ยอดจองรอจ่าย และเกณฑ์ขั้นต่ำ (เบลอข้อมูลสินค้าแล้ว)'
        },
        {
          src: 'assets/hr-live-signature.png',
          caption: 'หน้าสรุปรายการและลงลายมือชื่อ: ตรวจสอบรายการพัสดุที่ขอเบิกและเซ็นชื่ออิเล็กทรอนิกส์บนหน้าจอ (เบลอรายการสินค้าแล้ว)'
        },
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'หน้ารายการคำขอที่อนุมัติและจ่ายแล้ว (Requisition Queue): ประวัติรายการเบิกจ่ายและสถานะ Auto-Approve (เบลอชื่อและรหัสพนักงานทั้งหมด)'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'หน้าคิวรอดำเนินการสแกนจ่ายพัสดุ: หน้าสำหรับเจ้าหน้าที่ HR ใช้ปืนยิงบาร์โค้ดสแกนจ่ายของออก'
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
        'พัฒนาเว็บแอปสำหรับพนักงานกดขอเบิกและเซ็นชื่อบนหน้าจอ (พร้อมระบบจองยอดทันที) และหน้าสำหรับเจ้าหน้าที่ HR ผูกเลข PO รับของเข้า สแกนบาร์โค้ดจ่ายพัสดุ และดูแดชบอร์ด Stock On Hand แบบเรียลไทม์',
      keyFeatures: [
        'แดชบอร์ด Stock On Hand แสดงยอดคงเหลือจริง ยอดจองรอจ่าย ยอดพร้อมเบิก และเกณฑ์สต็อกขั้นต่ำ',
        'ระบบจองยอดพัสดุเมื่อพนักงานกดส่งคำขอเบิก เพื่อลดปัญหาการขอเบิกซ้ำซ้อน',
        'รองรับการเซ็นชื่ออิเล็กทรอนิกส์ทั้งบนหน้าจอมือถือและคอมพิวเตอร์',
        'หน้ารับพัสดุเข้าคลังโดยผูกเลข PO และหน้าคิวสแกนบาร์โค้ดสำหรับตัดจ่ายพัสดุพร้อมพิมพ์ใบเบิก A4'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Barcode Scanner', 'E-Signature'],
      privacyNote: 'เซ็นเซอร์ข้อมูลพัสดุในคลัง รหัสสินค้า และรายชื่อพนักงานทั้งหมดเพื่อรักษาความลับของข้อมูลภายในบริษัท'
    },
    {
      id: 'ocr-scanner',
      title: 'HACO Smart Scanner — เว็บแอปสแกนนามบัตร AI ระดับองค์กร (Google Apps Script)',
      subtitle: 'เว็บแอปบนมือถือและคอมพิวเตอร์ พัฒนาด้วย Google Apps Script ผสาน Gemini 2.5 Flash / Gemma 3 Multi-Model AI สกัดข้อมูลนามบัตรบันทึกเข้า Google Sheets และ Drive',
      badge: 'Web App • Apps Script + Gemini AI',
      category: 'webapp',
      coverImage: 'assets/haco-scanner-home.png',
      coverFit: 'cover',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'หน้าจอเข้าสู่ระบบ (Staff Authentication): ระบบยืนยันตัวตนพนักงานด้วยรหัสประจำตัวและรหัสผ่าน 4 หลัก'
        },
        {
          src: 'assets/haco-scanner-home.png',
          caption: 'เมนูหลักและเลือกโหมดการใช้งาน: หน้าเลือกระหว่างสแกนเดี่ยว (Single Scan), สแกนชุด (Bulk) และดูประวัติ'
        },
        {
          src: 'assets/haco-scanner-single.png',
          caption: 'หน้าสแกนเดี่ยวและผลลัพธ์ AI แบบเต็มจอ: ฟอร์มถ่ายภาพนามบัตรพร้อมตัวประมวลผล Gemini 2.5 Flash / Gemma 3 และฟอร์มข้อมูลที่สกัดได้'
        },
        {
          src: 'assets/haco-scanner-bulk.png',
          caption: 'ระบบสแกนนามบัตรเป็นชุด (Bulk Batch Queue): อัปโหลดนามบัตรสูงสุด 15 ใบต่อครั้งพร้อมคิวประมวลผล AI อัตโนมัติ'
        },
        {
          src: 'assets/haco-scanner-dashboard.png',
          caption: 'แดชบอร์ดสถิติการใช้งาน (Analytics Dashboard): กราฟแสดงจำนวนการสแกน 7 วันล่าสุดและจัดอันดับผู้ใช้งานสูงสุด'
        },
        {
          src: 'assets/haco-scanner-history.png',
          caption: 'ประวัติและระบบค้นหานามบัตรย้อนหลัง: ตารางค้นหาข้อมูลผู้ติดต่อที่สแกนแล้ว (เบลอข้อมูลส่วนบุคคล)'
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
        'แดชบอร์ดสถิติและระบบแก้ไข: หน้า Dashboard สรุปข้อมูลด้วย Chart.js พร้อมระบบค้นหาย้อนหลังและหน้าต่างแก้ไขข้อมูล'
      ],
      techStack: ['Google Apps Script', 'Gemini 2.5 Flash', 'Gemma 3', 'Google Sheets DB', 'Google Drive API', 'Chart.js', 'JavaScript'],
      privacyNote: 'เบลอข้อมูลชื่อ เบอร์โทรศัพท์ และอีเมลบนนามบัตรทั้งหมดเพื่อปกป้องข้อมูลส่วนบุคคล'
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
        'เตรียมข้อมูลการขายจากระบบ SAP แบบอัตโนมัติ และสร้างแดชบอร์ด Power BI สำหรับรายงานผลธุรกิจ ครอบคลุมยอดขายข้ามปี (2025 vs 2026), แผนก Smart Life, แผนก Project และข้อมูลคลังสินค้า (Inventory)',
      impactSummary: 'เตรียมข้อมูลจาก SAP อัตโนมัติ • แดชบอร์ดยอดขาย (YoY, Smart Life, Project) และคลังสินค้า • กดกรองข้อมูลได้',
      metrics: [
        { label: 'แหล่งข้อมูล', value: 'SAP' },
        { label: 'เครื่องมือ', value: 'Power BI & DAX' },
        { label: 'การเตรียมข้อมูล', value: 'Automated' }
      ],
      situation:
        'การทำรายงานยอดขายและคลังสินค้าในแต่ละรอบ ต้องดึงข้อมูลดิบจาก SAP มาจัดตารางและผูกสูตรใหม่ด้วยมือ',
      solution:
        'ทำระบบเตรียมข้อมูลจาก SAP อัตโนมัติ และผูก Data Model กับสูตร DAX ใน Power BI เพื่อให้กดดูแนวโน้มยอดขายและสต็อกสินค้าผ่านแดชบอร์ดได้ทันที',
      keyFeatures: [
        'เตรียมข้อมูลการขายและคลังสินค้าอัตโนมัติจากข้อมูล SAP',
        'แดชบอร์ดเปรียบเทียบยอดขายข้ามปี (2025 vs 2026) รายเดือน รายไตรมาส และรายหมวดสินค้า',
        'แดชบอร์ดติดตามยอดขายเทียบเป้าหมายและสถานะใบเสนอราคา (SQ/PO) สำหรับทีม Smart Life และ Project',
        'แดชบอร์ดติดตามข้อมูลคลังสินค้า (Inventory)'
      ],
      techStack: ['Power BI', 'SAP Data Preparation', 'DAX', 'Power Query', 'Data Modeling'],
      privacyNote: 'เบลอตัวเลขยอดขาย ชื่อลูกค้า และรหัสสินค้าทั้งหมดเพื่อรักษาความลับทางธุรกิจของบริษัท'
    },
    {
      id: 'copilot-training',
      title: 'จัดอบรมภายในองค์กร — การใช้งาน Microsoft Copilot & Prompt Engineering',
      subtitle: 'จัดทำเอกสารประกอบการสอนและเป็นวิทยากรอบรมพนักงานภายในบริษัทจำนวน 3 รอบ',
      badge: 'AI Enablement • Internal Training',
      category: 'ai-it',
      coverImage: 'assets/copilot-group.jpg',
      gallery: [
        {
          src: 'assets/copilot-group.jpg',
          caption: 'ภาพถ่ายรวมผู้เข้าอบรมจากหลายแผนกในหลักสูตร AI for Modern Workplace with Microsoft Copilot'
        },
        {
          src: 'assets/copilot-speaker.jpg',
          caption: 'บรรยายแนะนำแนวทางการใช้ Microsoft Copilot ช่วยงานเอกสารและสรุปข้อมูลในห้องอบรม'
        },
        {
          src: 'assets/copilot-classroom.jpg',
          caption: 'บรรยากาศการฝึกปฏิบัติ (Hands-on) ให้พนักงานทดลองพิมพ์คำสั่ง Prompt กับโจทย์งานจริง'
        },
        {
          src: 'assets/copilot-coaching.jpg',
          caption: 'เดินแนะนำการปรับโครงสร้างคำสั่ง Prompt รายบุคคลให้ตรงกับงานของแต่ละแผนก'
        }
      ],
      shortDesc:
        'จัดทำสื่อการสอนและเป็นวิทยากรอบรมภายในบริษัทจำนวน 3 รอบ เพื่อแนะนำการใช้งาน Microsoft Copilot การเขียนคำสั่ง Prompt และข้อควรระวังในการปกป้องข้อมูลภายในบริษัท',
      impactSummary: 'จัดอบรมภายใน 3 รอบ • ฝึกเขียน Prompt จากโจทย์งานจริง • แนะนำแนวทางป้องกันข้อมูลรั่วไหล',
      metrics: [
        { label: 'การอบรม', value: '3 รอบภายในบริษัท' },
        { label: 'รูปแบบ', value: 'บรรยาย & ฝึกปฏิบัติ' },
        { label: 'เนื้อหา', value: 'Copilot & Prompts' }
      ],
      situation:
        'บริษัทต้องการให้พนักงานในแผนกต่างๆ นำ Microsoft Copilot มาช่วยลดเวลาทำงานเอกสารและสรุปข้อมูล โดยยังต้องระมัดระวังไม่ให้ข้อมูลสำคัญรั่วไหล',
      solution:
        'เตรียมสไลด์เนื้อหา ตัวอย่างคำสั่ง Prompt และโจทย์ฝึกปฏิบัติ แล้วจัดอบรมให้พนักงานจำนวน 3 รอบ พร้อมเดินให้คำแนะนำรายบุคคลในห้องเรียน',
      keyFeatures: [
        'แนะนำการใช้ Microsoft Copilot ร่วมกับ Word, Excel และงานสื่อสารประจำวัน',
        'โครงสร้างการเขียนคำสั่ง Prompt เพื่อให้ AI สรุปข้อมูลและร่างเอกสารได้ตรงตามต้องการ',
        'ช่วงฝึกปฏิบัติในห้องอบรมพร้อมเดินตอบคำถามและช่วยปรับ Prompt รายบุคคล',
        'แนวทางคัดกรองข้อมูลความลับของบริษัทก่อนนำไปใช้กับเครื่องมือ AI'
      ],
      techStack: ['Microsoft Copilot', 'Copilot Studio', 'Prompt Engineering', 'Internal Training']
    }
  ]
};
