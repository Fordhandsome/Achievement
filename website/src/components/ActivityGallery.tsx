import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Language } from '../data/portfolioData';

export interface GalleryPhoto {
  id: string;
  category: 'webapp' | 'training' | 'dashboard';
  title: string;
  subtitle: string;
  src: string;
  tag: string;
}

const PHOTOS_BY_LANG: Record<Language, GalleryPhoto[]> = {
  en: [
    {
      id: 'p-web-sop-create',
      category: 'webapp',
      title: 'SOP Portal: 5-Step Create SOP Web Form',
      subtitle: 'Web form for entering SOP document details with auto-draft saving, PDF preview, and direct approval submission',
      src: 'assets/sop-live-create.png',
      tag: 'Create SOP Web UI'
    },
    {
      id: 'p-web-sop-edit',
      category: 'webapp',
      title: 'SOP Portal: Edit / Revision Workflow (Returned SOP)',
      subtitle: 'Displays reviewer comments, annotation points, revision number, and a button to re-submit to the reviewer',
      src: 'assets/sop-live-edit.png',
      tag: 'Edit SOP Web UI'
    },
    {
      id: 'p-web-sop-audit',
      category: 'webapp',
      title: 'SOP Portal: Multi-Tier Audit & E-Approval Queue (Data Masked)',
      subtitle: 'Reviewer verification checklist, digital approval queue, and stamp workflow (confidential document data masked)',
      src: 'assets/sop-web-audit-censored.png',
      tag: 'Audit Queue UI'
    },
    {
      id: 'p-web-sop-library',
      category: 'webapp',
      title: 'SOP Portal: Central Document Library (Data Masked)',
      subtitle: 'Departmental folder navigation and document search archive (all warehouse/document records censored for privacy)',
      src: 'assets/sop-web-library-censored.png',
      tag: 'Library Archive UI'
    },
    {
      id: 'p-web-sop-jmeter',
      category: 'webapp',
      title: 'Apache JMeter Load Test: 100 Concurrent Users',
      subtitle: 'Load-tested with 100 concurrent users and 1,100 requests (0% error rate)',
      src: 'assets/sop-jmeter-100users.png',
      tag: 'JMeter Load Test'
    },
    {
      id: 'p-web-hr-sig',
      category: 'webapp',
      title: 'Haco P&C Stock: Requisition Summary & E-Signature Pad',
      subtitle: 'Employees review requested items and sign electronically via mobile touchscreen or desktop mouse',
      src: 'assets/hr-live-signature.png',
      tag: 'Requisition Web UI'
    },
    {
      id: 'p-web-hr-success',
      category: 'webapp',
      title: 'Haco P&C Stock: Instant Requisition Number (REQ)',
      subtitle: 'Confirmation screen after submitting a signed request into the HR barcode dispatch queue',
      src: 'assets/hr-live-success.png',
      tag: 'Confirmation Web UI'
    },
    {
      id: 'p-web-hr-inbound',
      category: 'webapp',
      title: 'Haco P&C Stock: PO-Linked Stock-In Barcode Screen',
      subtitle: 'Binds incoming supplies to a Purchase Order (PO) number before barcode scanning',
      src: 'assets/hr-live-inbound.png',
      tag: 'Stock-In Web UI'
    },
    {
      id: 'p-web-hr-queue',
      category: 'webapp',
      title: 'Haco P&C Stock: HR Requisition Dispatch Queue',
      subtitle: 'Web interface for HR staff to verify and auto-approve outbound requisitions via barcode scanner',
      src: 'assets/hr-live-queue.png',
      tag: 'Dispatch Queue UI'
    },
    {
      id: 'p-web-hr-stock-dashboard',
      category: 'webapp',
      title: 'Haco P&C Stock: Real-Time Inventory & Reservation Dashboard',
      subtitle: 'Real-time overview of current warehouse stock, reserved items, and automated reorder alerts',
      src: 'assets/hr-web-stock-on-hand.png',
      tag: 'Stock Dashboard UI'
    },
    {
      id: 'p-web-card-scanner',
      category: 'webapp',
      title: 'HACO Smart Scanner: Business Card AI Capture UI',
      subtitle: 'Mobile web interface powered by Google Apps Script & Gemini AI to extract contact details from card photos into Google Sheets & Drive',
      src: 'assets/haco-card-scanner.png',
      tag: 'AI Card Scanner UI'
    },
    {
      id: 'p-speaker',
      category: 'training',
      title: 'Speaker: Internal Microsoft 365 Copilot Training',
      subtitle: 'Conducting a training session on using Microsoft Copilot for document workflows in the main conference room',
      src: 'assets/copilot-speaker.jpg',
      tag: 'Live Training'
    },
    {
      id: 'p-group',
      category: 'training',
      title: 'Participants: AI for Modern Workplace Training Session',
      subtitle: 'Group photo with employees from multiple departments after completing the Copilot training session',
      src: 'assets/copilot-group.jpg',
      tag: 'Training Session'
    },
    {
      id: 'p-coaching',
      category: 'training',
      title: '1-on-1 Prompt Engineering Coaching',
      subtitle: 'Helping team members craft effective prompts tailored to their specific departmental tasks',
      src: 'assets/copilot-coaching.jpg',
      tag: 'Hands-on Coaching'
    },
    {
      id: 'p-classroom',
      category: 'training',
      title: 'Hands-On Classroom Practice',
      subtitle: 'Employees practicing Microsoft Copilot workflows on their laptops during the training session',
      src: 'assets/copilot-classroom.jpg',
      tag: 'Classroom Session'
    },
    {
      id: 'p-dash-yoy',
      category: 'dashboard',
      title: 'Power BI: Multi-Year Sales Comparison (2025 vs 2026)',
      subtitle: 'Connected to SAP data pipeline to compare monthly, quarterly, and category sales (confidential numbers blurred)',
      src: 'assets/pbi-multiyear-masked.png',
      tag: 'Power BI & SAP'
    },
    {
      id: 'p-dash-sml',
      category: 'dashboard',
      title: 'Power BI: Smart Life Division Performance Dashboard',
      subtitle: 'Tracks sales against targets, quotations, and customer breakdown (confidential numbers blurred)',
      src: 'assets/pbi-smart-life-masked.png',
      tag: 'Power BI & SAP'
    }
  ],
  th: [
    {
      id: 'p-web-sop-create',
      category: 'webapp',
      title: 'หน้าเว็บจริง: สร้างเอกสารวิธีการปฏิบัติงาน (SOP Generator)',
      subtitle: 'หน้ากรอกข้อมูล SOP 5 ขั้นตอน พร้อมบันทึกแบบร่างอัตโนมัติ เปิดดู Preview PDF และปุ่มส่งเอกสารขออนุมัติ',
      src: 'assets/sop-live-create.png',
      tag: 'Create SOP Web UI'
    },
    {
      id: 'p-web-sop-edit',
      category: 'webapp',
      title: 'หน้าเว็บจริง: แก้ไขเอกสาร SOP เมื่อถูกตีกลับ (Revision)',
      subtitle: 'แสดงข้อความคอมเมนต์จากผู้ตรวจ จุดที่ต้องแก้ไข เลขครั้งที่แก้ไข และปุ่มส่งกลับผู้ลงนามเดิม',
      src: 'assets/sop-live-edit.png',
      tag: 'Edit SOP Web UI'
    },
    {
      id: 'p-web-sop-audit',
      category: 'webapp',
      title: 'หน้าเว็บจริง: ระบบตรวจสอบเอกสารและอนุมัติตามลำดับขั้น (เซ็นเซอร์ข้อมูล)',
      subtitle: 'คิวตรวจทานเอกสาร ตรวจสอบความถูกต้องของเนื้อหา พร้อมปุ่มประทับตราดิจิทัล (เซ็นเซอร์ข้อมูลเพื่อความปลอดภัย)',
      src: 'assets/sop-web-audit-censored.png',
      tag: 'Audit Queue UI'
    },
    {
      id: 'p-web-sop-library',
      category: 'webapp',
      title: 'หน้าเว็บจริง: คลังเอกสาร SOP กลางของบริษัท (เซ็นเซอร์ข้อมูลคลังทั้งหมด)',
      subtitle: 'ระบบจัดเก็บเอกสาร SOP แยกตามแผนกสำหรับพนักงานค้นหา (เซ็นเซอร์ข้อมูลเอกสารและคลังทั้งหมด 100% เพื่อความปลอดภัย)',
      src: 'assets/sop-web-library-censored.png',
      tag: 'Library Archive UI'
    },
    {
      id: 'p-web-sop-jmeter',
      category: 'webapp',
      title: 'ผลทดสอบ Apache JMeter: ทดสอบผู้ใช้งานพร้อมกัน 100 Users',
      subtitle: 'จำลองการเข้าใช้งานพร้อมกัน 100 คน ยิงทดสอบ 1,100 Requests (0% Error)',
      src: 'assets/sop-jmeter-100users.png',
      tag: 'JMeter Load Test'
    },
    {
      id: 'p-web-hr-sig',
      category: 'webapp',
      title: 'หน้าเว็บจริง: สรุปรายการขอเบิกพัสดุและเซ็นชื่ออิเล็กทรอนิกส์',
      subtitle: 'หน้าตรวจสอบรายการเบิกและลงลายมือชื่อดิจิทัลผ่านหน้าจอมือถือหรือคอมพิวเตอร์',
      src: 'assets/hr-live-signature.png',
      tag: 'Requisition Web UI'
    },
    {
      id: 'p-web-hr-success',
      category: 'webapp',
      title: 'หน้าเว็บจริง: ยืนยันคำขอเบิกและออกเลขใบเบิก (REQ) อัตโนมัติ',
      subtitle: 'หน้าแจ้งผลส่งคำขอเข้าคิวเบิกจ่ายของเจ้าหน้าที่ HR พร้อมบันทึกลายเซ็นเรียบร้อย',
      src: 'assets/hr-live-success.png',
      tag: 'Confirmation Web UI'
    },
    {
      id: 'p-web-hr-inbound',
      category: 'webapp',
      title: 'หน้าเว็บจริง: รับพัสดุเข้าสต็อกด้วยการผูกเลขที่เอกสาร PO',
      subtitle: 'หน้าสำหรับกรอกเลข PO ก่อนเริ่มยิงบาร์โค้ดรับสินค้าเข้าคลัง',
      src: 'assets/hr-live-inbound.png',
      tag: 'Stock-In Web UI'
    },
    {
      id: 'p-web-hr-queue',
      category: 'webapp',
      title: 'หน้าเว็บจริง: คิวรอจ่ายพัสดุและสแกนบาร์โค้ด (Requisition Queue)',
      subtitle: 'หน้าจัดการคิวคำขอเบิกสำหรับเจ้าหน้าที่ HR สแกนบาร์โค้ดจ่ายของ',
      src: 'assets/hr-live-queue.png',
      tag: 'Dispatch Queue UI'
    },
    {
      id: 'p-web-hr-stock-dashboard',
      category: 'webapp',
      title: 'หน้าเว็บจริง: แดชบอร์ดตรวจสอบสต็อกพัสดุ (Stock On Hand Dashboard)',
      subtitle: 'แดชบอร์ดสรุปยอดพัสดุคงเหลือในคลัง ยอดที่ถูกจองไว้ และระบบแจ้งเตือนสต็อกขั้นต่ำแบบเรียลไทม์',
      src: 'assets/hr-web-stock-on-hand.png',
      tag: 'Stock Dashboard UI'
    },
    {
      id: 'p-web-card-scanner',
      category: 'webapp',
      title: 'หน้าเว็บจริง: สแกนนามบัตรอัจฉริยะ (HACO Smart Scanner)',
      subtitle: 'เว็บแอปพลิเคชันบนมือถือพัฒนาด้วย Google Apps Script และ Gemini AI ถ่ายภาพนามบัตรเพื่อสกัดข้อมูลติดต่อลง Google Sheets และ Drive อัตโนมัติ',
      src: 'assets/haco-card-scanner.png',
      tag: 'AI Card Scanner UI'
    },
    {
      id: 'p-speaker',
      category: 'training',
      title: 'วิทยากรอบรมการใช้งาน Microsoft 365 Copilot ภายในบริษัท',
      subtitle: 'บรรยายการนำ Copilot มาช่วยงานเอกสารและสรุปข้อมูล ณ ห้องประชุมใหญ่',
      src: 'assets/copilot-speaker.jpg',
      tag: 'Live Training'
    },
    {
      id: 'p-group',
      category: 'training',
      title: 'ภาพถ่ายร่วมกับผู้เข้าอบรมหลักสูตร AI for Modern Workplace',
      subtitle: 'ตัวแทนพนักงานจากหลากหลายแผนกที่เข้าร่วมอบรมการใช้ AI ในการทำงาน',
      src: 'assets/copilot-group.jpg',
      tag: 'Training Session'
    },
    {
      id: 'p-coaching',
      category: 'training',
      title: 'แนะนำการเขียนคำสั่ง Prompt แบบตัวต่อตัว',
      subtitle: 'เดินประกบให้คำแนะนำการปรับแต่ง Prompt ให้เหมาะกับงานจริงของแต่ละแผนก',
      src: 'assets/copilot-coaching.jpg',
      tag: 'Hands-on Coaching'
    },
    {
      id: 'p-classroom',
      category: 'training',
      title: 'บรรยากาศการฝึกปฏิบัติจริงในห้องอบรม',
      subtitle: 'พนักงานทดลองใช้งาน Microsoft Copilot บนคอมพิวเตอร์ไปพร้อมกับการบรรยาย',
      src: 'assets/copilot-classroom.jpg',
      tag: 'Classroom Session'
    },
    {
      id: 'p-dash-yoy',
      category: 'dashboard',
      title: 'Power BI: เปรียบเทียบยอดขายข้ามปี 2025 vs 2026 (ดึงจาก SAP)',
      subtitle: 'วิเคราะห์แนวโน้มยอดขายรายเดือน ไตรมาส และหมวดหมู่สินค้า (เบลอข้อมูลความลับแล้ว)',
      src: 'assets/pbi-multiyear-masked.png',
      tag: 'Power BI & SAP'
    },
    {
      id: 'p-dash-sml',
      category: 'dashboard',
      title: 'Power BI: แดชบอร์ดติดตามยอดขายเทียบเป้าหมายแผนก Smart Life',
      subtitle: 'ติดตามยอดขายและใบเสนอราคาจากฐานข้อมูล SAP (เบลอข้อมูลความลับแล้ว)',
      src: 'assets/pbi-smart-life-masked.png',
      tag: 'Power BI & SAP'
    }
  ]
};

interface Props {
  lang: Language;
}

export default function ActivityGallery({ lang }: Props) {
  const [filter, setFilter] = useState<string>('all');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const photos = PHOTOS_BY_LANG[lang];

  const photoTabs =
    lang === 'en'
      ? [
          { id: 'all', label: `All Screens & Photos (${photos.length})` },
          { id: 'webapp', label: `Live Web UI & Load Test (${photos.filter((p) => p.category === 'webapp').length})` },
          { id: 'training', label: `Copilot Training Photos (${photos.filter((p) => p.category === 'training').length})` },
          { id: 'dashboard', label: `Power BI & SAP (${photos.filter((p) => p.category === 'dashboard').length})` }
        ]
      : [
          { id: 'all', label: `ทั้งหมด (${photos.length})` },
          { id: 'webapp', label: `หน้าจอเว็บจริง & JMeter (${photos.filter((p) => p.category === 'webapp').length})` },
          { id: 'training', label: `ภาพถ่ายการสอน Copilot (${photos.filter((p) => p.category === 'training').length})` },
          { id: 'dashboard', label: `Power BI & SAP (${photos.filter((p) => p.category === 'dashboard').length})` }
        ];

  const filteredPhotos =
    filter === 'all' ? photos : photos.filter((p) => p.category === filter);

  const currentPhoto = activePhotoIdx !== null ? filteredPhotos[activePhotoIdx] : null;

  return (
    <section id="gallery" className="py-12 sm:py-16 relative z-10 border-t border-sky-100 bg-sky-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>
              {lang === 'en'
                ? 'SYSTEM SCREENS & TRAINING GALLERY'
                : 'คลังภาพหน้าจอเว็บจริงและภาพถ่ายการอบรม'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Live Web UI Screens & ' : 'ภาพหน้าจอระบบเว็บจริงและ '}
            <span className="gradient-text-blue">
              {lang === 'en' ? 'Real Training Photos' : 'บรรยากาศการสอนจริง'}
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            {lang === 'en'
              ? 'Only real web application screens (using anonymized demo accounts), JMeter load test results, and real event photographs are shown.'
              : 'แสดงเฉพาะหน้าจอ Web Application จริง (ด้วยข้อมูลจำลอง), ผลทดสอบ JMeter และภาพถ่ายการจัดอบรมจริง'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {photoTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setFilter(tab.id);
                  setActivePhotoIdx(null);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-blue-700 hover:bg-sky-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActivePhotoIdx(idx)}
                className="white-card white-card-hover overflow-hidden cursor-pointer group flex flex-col"
              >
                <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-blue-600 text-white shadow-sm">
                      {photo.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/90 text-blue-700 shadow-md">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {photo.subtitle}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-sky-700">
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-500" />
                      {lang === 'en' ? 'Click to view full screen' : 'คลิกเพื่อดูรูปขนาดเต็ม'}
                    </span>
                    <span className="text-slate-400 font-mono text-[10px]">
                      #{idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal View for Gallery */}
        <AnimatePresence>
          {currentPhoto && activePhotoIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIdx(null)}
              className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[92vh] overflow-hidden bg-white rounded-2xl shadow-2xl flex flex-col"
              >
                {/* Modal Top Bar */}
                <div className="px-5 py-3 border-b border-sky-100 flex items-center justify-between bg-white">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                      {currentPhoto.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">
                      {currentPhoto.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivePhotoIdx(null)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-slate-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Large Image */}
                <div className="relative flex-1 bg-slate-100 min-h-[300px] sm:min-h-[460px] max-h-[65vh] flex items-center justify-center p-2">
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.title}
                    className="max-h-full max-w-full object-contain"
                  />

                  {filteredPhotos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActivePhotoIdx(
                            (activePhotoIdx - 1 + filteredPhotos.length) % filteredPhotos.length
                          )
                        }
                        className="absolute left-3 p-2.5 rounded-full bg-white/90 hover:bg-sky-500 hover:text-white text-slate-800 shadow-md transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActivePhotoIdx((activePhotoIdx + 1) % filteredPhotos.length)
                        }
                        className="absolute right-3 p-2.5 rounded-full bg-white/90 hover:bg-sky-500 hover:text-white text-slate-800 shadow-md transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Modal Footer Description */}
                <div className="p-4 bg-sky-50/50 border-t border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-xs sm:text-sm text-slate-700">
                    {currentPhoto.subtitle}
                  </p>
                  <span className="text-xs font-bold text-blue-700 shrink-0 font-mono">
                    {lang === 'en'
                      ? `${activePhotoIdx + 1} of ${filteredPhotos.length}`
                      : `ภาพที่ ${activePhotoIdx + 1} จาก ${filteredPhotos.length}`}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
