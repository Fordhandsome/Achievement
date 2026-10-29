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
          caption: 'Create SOP Screen: 5-step web form with auto-draft saving, real-time PDF preview, and direct submission to the approval workflow'
        },
        {
          src: 'assets/sop-live-edit.png',
          caption: 'Edit / Revision SOP Screen: Returned documents show reviewer comments, annotation points, and a button to re-submit to the reviewer'
        },
        {
          src: 'assets/sop-live-audit.png',
          caption: 'SOP Approval & Revision Queue: Tracks documents pending review, pending approval, or returned for edits with a direct Edit SOP button'
        },
        {
          src: 'assets/sop-live-signature.png',
          caption: 'Digital Signature Settings: Draw on screen or upload an electronic signature image for SOP approval stamping'
        },
        {
          src: 'assets/sop-jmeter-100users.png',
          caption: 'Apache JMeter Load Test Report: Tested with 100 concurrent users (1,100 requests, 0% error rate)'
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
      coverImage: 'assets/hr-live-signature.png',
      gallery: [
        {
          src: 'assets/hr-live-signature.png',
          caption: 'Requisition Summary & E-Signature Screen: Employees review requested items and sign on screen before submitting'
        },
        {
          src: 'assets/hr-live-success.png',
          caption: 'Requisition Confirmation Screen: Generates a requisition tracking number (REQ) and sends the request to the HR queue'
        },
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'Stock-In (PO) Screen: Links incoming items to a Purchase Order (PO) number before scanning barcodes into stock'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'HR Requisition Queue & Barcode Dispatch Screen: HR staff scan item barcodes to verify and record dispatches'
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
      title: 'HACO CARD — Business Card Scanner Web App',
      subtitle: 'Mobile web tool built with Google Apps Script and AI OCR to save business card contacts to Google Sheets',
      badge: 'Web App • Google Apps Script',
      category: 'webapp',
      coverImage: 'assets/haco-card-scanner.png',
      coverFit: 'contain',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'HACO CARD employee login screen for mobile web access'
        }
      ],
      shortDesc:
        'Built a mobile web application using Google Apps Script and AI OCR so employees can take photos of business cards and save extracted contact details into Google Sheets.',
      impactSummary: 'Extracts contact details from card photos • Saves directly to Google Sheets • Mobile browser accessible',
      metrics: [
        { label: 'Platform', value: 'Google Apps Script' },
        { label: 'Function', value: 'AI OCR Extraction' },
        { label: 'Database', value: 'Google Sheets' }
      ],
      situation:
        'Sales and staff collected physical business cards from events and client visits, and typing contact information into spreadsheets manually took time.',
      solution:
        'Created a web app on Google Apps Script connected to an OCR API so staff can log in with their employee ID, photograph a business card on their phone, and store the contact fields in Google Sheets.',
      keyFeatures: [
        'Employee ID login before accessing the web app',
        'Supports mobile camera capture or uploading existing card photos',
        'Extracts Thai and English text fields (Name, Company, Title, Phone, Email)',
        'Saves structured records directly to Google Sheets'
      ],
      techStack: ['Google Apps Script', 'OCR API', 'JavaScript', 'HTML/CSS', 'Google Sheets'],
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
    },
    {
      id: 'teams-meeting-room',
      title: 'Microsoft Teams Room Setup & Automated Booking',
      subtitle: 'Set up conference room AV equipment and implemented automated room booking in Microsoft Teams',
      badge: 'IT Support & Automation',
      category: 'ai-it',
      gallery: [],
      shortDesc:
        'Configured the Microsoft Teams meeting room hardware (display, camera, and audio) and set up automated room booking in Microsoft Teams.',
      impactSummary: 'Conference room AV & display setup • Automated room booking in Microsoft Teams',
      metrics: [
        { label: 'Platform', value: 'Microsoft Teams' },
        { label: 'Workflow', value: 'Auto Room Booking' },
        { label: 'Hardware', value: 'AV & Display Setup' }
      ],
      situation:
        'The office needed a ready-to-use Microsoft Teams conference room setup and a convenient way for employees to book meeting rooms without scheduling conflicts.',
      solution:
        'Connected and tested the conference room display, camera, and audio peripherals with Microsoft Teams, and configured automated room booking within Microsoft Teams.',
      keyFeatures: [
        'Configured conference room display, camera, and microphone equipment for Microsoft Teams meetings',
        'Implemented automated meeting room booking in Microsoft Teams',
        'Tested audio/video readiness and supported staff usage'
      ],
      techStack: ['Microsoft Teams', 'Power Automate', 'AV Equipment Setup', 'IT Support']
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
          caption: 'หน้าเว็บสร้างเอกสาร SOP (Create SOP): กรอกข้อมูล 5 ขั้นตอน พร้อมบันทึกแบบร่างอัตโนมัติ เปิดดู Preview PDF และปุ่มส่งเอกสารขออนุมัติ'
        },
        {
          src: 'assets/sop-live-edit.png',
          caption: 'หน้าเว็บแก้ไขเอกสาร SOP (Edit / Revision SOP): แสดงคอมเมนต์และจุดที่ผู้ตรวจชี้แนะให้แก้ไข พร้อมปุ่มส่งกลับผู้ลงนามเดิม'
        },
        {
          src: 'assets/sop-live-audit.png',
          caption: 'หน้าคิวพิจารณาอนุมัติและส่งกลับแก้ไข: ติดตามสถานะเอกสาร รอผู้ตรวจ รอผู้อนุมัติ และรายการที่ถูกส่งกลับให้กดแก้ไขเอกสาร'
        },
        {
          src: 'assets/sop-live-signature.png',
          caption: 'หน้าตั้งค่าลายเซ็นดิจิทัล (Digital Signature): วาดลายเซ็นบนหน้าจอหรืออัปโหลดไฟล์ลายเซ็นสำหรับใช้ประทับในเอกสาร SOP'
        },
        {
          src: 'assets/sop-jmeter-100users.png',
          caption: 'ผลทดสอบ Load Test ด้วย Apache JMeter: จำลองผู้ใช้งานพร้อมกัน 100 คน (1,100 Requests, 0% Error)'
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
      coverImage: 'assets/hr-live-signature.png',
      gallery: [
        {
          src: 'assets/hr-live-signature.png',
          caption: 'หน้าสรุปรายการเบิกและลงลายมือชื่ออิเล็กทรอนิกส์: ตรวจสอบรายการและเซ็นชื่อบนหน้าจอก่อนยืนยันการเบิก'
        },
        {
          src: 'assets/hr-live-success.png',
          caption: 'หน้ายืนยันส่งคำขอเบิกสำเร็จ: ออกเลขใบเบิก (REQ) อัตโนมัติและส่งรายการเข้าคิวของเจ้าหน้าที่ HR'
        },
        {
          src: 'assets/hr-live-inbound.png',
          caption: 'หน้ารับของเข้าสต็อก (Stock-In): ผูกเลขที่เอกสาร PO ก่อนเริ่มยิงบาร์โค้ดรับพัสดุเข้าคลัง'
        },
        {
          src: 'assets/hr-live-queue.png',
          caption: 'หน้าคิวรอจ่ายพัสดุของเจ้าหน้าที่ HR: ใช้ปืนยิงบาร์โค้ดสแกนตรวจสอบรายการและตัดจ่ายพัสดุ'
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
      title: 'HACO CARD — เว็บแอปสแกนนามบัตรด้วย Google Apps Script',
      subtitle: 'เว็บแอปบนมือถือสำหรับถ่ายภาพนามบัตรและดึงข้อมูลติดต่อบันทึกลง Google Sheets',
      badge: 'Web App • Google Apps Script',
      category: 'webapp',
      coverImage: 'assets/haco-card-scanner.png',
      coverFit: 'contain',
      gallery: [
        {
          src: 'assets/haco-card-scanner.png',
          caption: 'หน้าล็อกอินด้วยรหัสพนักงานสำหรับเข้าใช้งานเว็บแอป HACO CARD บนมือถือ'
        }
      ],
      shortDesc:
        'สร้างเว็บแอปพลิเคชันด้วย Google Apps Script ร่วมกับ AI OCR เพื่อช่วยดึงข้อมูลชื่อ บริษัท เบอร์โทรศัพท์ และอีเมลจากรูปถ่ายนามบัตรลงตาราง Google Sheets',
      impactSummary: 'ดึงข้อมูลติดต่อจากรูปถ่ายนามบัตร • บันทึกลง Google Sheets อัตโนมัติ • เปิดใช้งานผ่านเบราว์เซอร์มือถือ',
      metrics: [
        { label: 'แพลตฟอร์ม', value: 'Google Apps Script' },
        { label: 'การทำงาน', value: 'AI OCR' },
        { label: 'ฐานข้อมูล', value: 'Google Sheets' }
      ],
      situation:
        'เมื่อพนักงานได้รับนามบัตรจากการพบลูกค้าหรือออกงาน การนำข้อมูลมาพิมพ์ลงตารางทีละใบใช้เวลาและอาจเกิดการพิมพ์ผิดพลาด',
      solution:
        'พัฒนาเว็บแอปบน Google Apps Script เชื่อมต่อกับ OCR เพื่อให้พนักงานล็อกอินด้วยรหัสพนักงาน ถ่ายรูปนามบัตร และบันทึกข้อมูลลง Google Sheets',
      keyFeatures: [
        'ระบบล็อกอินด้วยรหัสพนักงานก่อนเข้าใช้งาน',
        'รองรับการถ่ายภาพจากกล้องมือถือหรืออัปโหลดรูปภาพนามบัตร',
        'ดึงข้อความภาษาไทยและอังกฤษ แยกตามช่อง ชื่อ บริษัท ตำแหน่ง เบอร์โทร และอีเมล',
        'บันทึกข้อมูลลงตาราง Google Sheets อัตโนมัติ'
      ],
      techStack: ['Google Apps Script', 'OCR API', 'JavaScript', 'HTML/CSS', 'Google Sheets'],
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
    },
    {
      id: 'teams-meeting-room',
      title: 'ติดตั้งอุปกรณ์ห้องประชุมและระบบจองห้องประชุมใน Microsoft Teams',
      subtitle: 'ตั้งค่าอุปกรณ์ภาพและเสียงของห้องประชุม และทำระบบจองห้องประชุมอัตโนมัติผ่าน Microsoft Teams',
      badge: 'IT Support & Automation',
      category: 'ai-it',
      gallery: [],
      shortDesc:
        'ติดตั้งและตั้งค่าอุปกรณ์ห้องประชุมออนไลน์ (จอแสดงผล กล้อง และระบบเสียง) ให้พร้อมใช้งานกับ Microsoft Teams และจัดทำระบบจองห้องประชุมอัตโนมัติใน Microsoft Teams',
      impactSummary: 'ตั้งค่าอุปกรณ์ภาพและเสียงห้องประชุม • ระบบจองห้องประชุมอัตโนมัติใน Microsoft Teams',
      metrics: [
        { label: 'แพลตฟอร์ม', value: 'Microsoft Teams' },
        { label: 'ระบบจองห้อง', value: 'Auto Booking' },
        { label: 'อุปกรณ์', value: 'AV & Display Setup' }
      ],
      situation:
        'บริษัทต้องการเตรียมระบบห้องประชุมให้รองรับการประชุมผ่าน Microsoft Teams ได้สะดวก และมีระบบจองคิวห้องประชุมที่ลดปัญหาการจองชนกัน',
      solution:
        'ดำเนินการเชื่อมต่อจอภาพ กล้อง และไมโครโฟนเข้ากับระบบ Microsoft Teams และตั้งค่าระบบจองห้องประชุมอัตโนมัติใน Microsoft Teams',
      keyFeatures: [
        'ตั้งค่าการเชื่อมต่อจอแสดงผล กล้อง และไมโครโฟนสำหรับห้องประชุม Microsoft Teams',
        'จัดทำระบบจองห้องประชุมอัตโนมัติผ่าน Microsoft Teams',
        'ทดสอบความพร้อมของระบบภาพและเสียงเพื่อรองรับการประชุมของแผนกต่างๆ'
      ],
      techStack: ['Microsoft Teams', 'Power Automate', 'AV Equipment Setup', 'IT Support']
    }
  ]
};
