import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface GalleryPhoto {
  id: string;
  category: 'training' | 'workshop' | 'webapp' | 'dashboard';
  title: string;
  subtitle: string;
  src: string;
  tag: string;
}

export const ALL_PHOTOS: GalleryPhoto[] = [
  {
    id: 'p-speaker',
    category: 'training',
    title: 'วิทยากรบรรยายการประยุกต์ใช้ Copilot AI',
    subtitle: 'บรรยายการนำ Word + Copilot ต่อยอดข้อมูลสินค้าเป็นเอกสารและสื่อหลายรูปแบบ ณ ห้องประชุมใหญ่',
    src: 'assets/copilot-speaker.jpg',
    tag: 'การบรรยายจริง'
  },
  {
    id: 'p-group',
    category: 'training',
    title: 'ภาพรวมผู้เข้าอบรมหลักสูตร AI for Modern Workplace',
    subtitle: 'ถ่ายภาพร่วมกับตัวแทนพนักงานจากหลากหลายแผนก (Marketing, Warehouse, Account, Graphic, Sales)',
    src: 'assets/copilot-group.jpg',
    tag: 'ผู้เข้าร่วมอบรม'
  },
  {
    id: 'p-coaching',
    category: 'training',
    title: 'การโค้ชชิ่งและแนะนำ Prompt แบบตัวต่อตัว',
    subtitle: 'เดินประกบสอนเทคนิคการเขียนคำสั่ง Prompt ให้ตรงกับงานของแต่ละฝ่ายระหว่างทำ Workshop',
    src: 'assets/copilot-coaching.jpg',
    tag: 'Hands-on Coaching'
  },
  {
    id: 'p-classroom',
    category: 'training',
    title: 'บรรยากาศในห้องอบรมเชิงปฏิบัติการ',
    subtitle: 'พนักงานทุกคนเปิดคอมพิวเตอร์และทดลองสั่งงาน AI Copilot ร่วมกับงานจริงของบริษัท',
    src: 'assets/copilot-classroom.jpg',
    tag: 'บรรยากาศห้องอบรม'
  },
  {
    id: 'p-ws-sale',
    category: 'workshop',
    title: 'ผลงาน Workshop: แผนกขาย (Sales)',
    subtitle: 'ใช้ Copilot วิเคราะห์ข้อมูลสินค้าและแปลงเป็นใบนำเสนอขายพร้อมราคาและจุดเด่นสำหรับลูกค้า',
    src: 'assets/copilot-workshop-sale.png',
    tag: 'ผลงานฝ่ายขาย'
  },
  {
    id: 'p-ws-mkt',
    category: 'workshop',
    title: 'ผลงาน Workshop: แผนกการตลาด (Marketing)',
    subtitle: 'ใช้ Copilot คัดเลือกสินค้าขายดีอันดับ 1 มาทำโปสเตอร์ Key Selling Point และช่องทางสั่งซื้อ',
    src: 'assets/copilot-workshop-marketing.png',
    tag: 'ผลงานฝ่ายการตลาด'
  },
  {
    id: 'p-ws-np',
    category: 'workshop',
    title: 'ผลงาน Workshop: แผนกสินค้าใหม่ (New Product)',
    subtitle: 'สรุปคุณลักษณะทางเทคนิคและทำเอกสารแนะนำอุปกรณ์ข้อต่อรางเดินสายไฟมาตรฐาน',
    src: 'assets/copilot-workshop-new-product.png',
    tag: 'ผลงานฝ่ายพัฒนาสินค้า'
  },
  {
    id: 'p-ws-hr',
    category: 'workshop',
    title: 'ผลงาน Workshop: แผนกทรัพยากรบุคคล (HR)',
    subtitle: 'สรุปข้อมูลสวัสดิการและเอกสารแจ้งพนักงานด้วยการเขียนคำสั่งผ่าน Copilot Chat',
    src: 'assets/copilot-workshop-hr.png',
    tag: 'ผลงานฝ่าย HR'
  },
  {
    id: 'p-ws-purchase',
    category: 'workshop',
    title: 'ผลงาน Workshop: แผนกจัดซื้อ (Purchasing)',
    subtitle: 'จัดตารางเปรียบเทียบ Supplier และเงื่อนไขการส่งมอบสินค้าด้วยระบบ AI ผู้ช่วย',
    src: 'assets/copilot-workshop-purchasing.png',
    tag: 'ผลงานฝ่ายจัดซื้อ'
  },
  {
    id: 'p-web-sop-build',
    category: 'webapp',
    title: 'หน้าจอจริง: ระบบ SOP Generator (ความครบถ้วน 100%)',
    subtitle: 'กรอกข้อมูลควบคุมเอกสาร 5 ขั้นตอน มีระบบเช็กความสมบูรณ์แบบเรียลไทม์ก่อนดาวน์โหลด Word',
    src: 'assets/sop-web-generator-full.png',
    tag: 'หน้าจอเว็บจริง'
  },
  {
    id: 'p-web-sop-audit',
    category: 'webapp',
    title: 'หน้าจอจริง: AI ตรวจสอบลายเซ็น 3 ช่องและคำผิด',
    subtitle: 'ระบบสแกนตรวจสอบความถูกต้องของแบบฟอร์ม ลายเซ็น 3 ฝ่าย และตรวจคำผิดก่อนปลดล็อกตราประทับ',
    src: 'assets/sop-web-audit-full.png',
    tag: 'AI Audit'
  },
  {
    id: 'p-web-sop-stamp',
    category: 'webapp',
    title: 'หน้าจอจริง: เอกสาร PDF ที่ประทับตรา SOP APPROVED',
    subtitle: 'ตัวอย่างไฟล์ที่ผ่านเกณฑ์ ระบบฝังตราประทับดิจิทัลสีแดงลงบนหน้าเอกสารทันทีแบบ Non-Paper',
    src: 'assets/sop-web-stamped-pdf.png',
    tag: 'Digital Stamp'
  },
  {
    id: 'p-web-sop-jmeter',
    category: 'webapp',
    title: 'รายงาน Apache JMeter: ทดสอบรับโหลด 100 Users',
    subtitle: 'จำลองการเข้าใช้งานพร้อมกัน 100 คน กดทดสอบ 1,100 ครั้ง ผ่าน 100% ไม่พัง ไม่ล่ม',
    src: 'assets/sop-jmeter-100users.png',
    tag: 'Load Test 100 Users'
  },
  {
    id: 'p-web-hr-stock',
    category: 'webapp',
    title: 'หน้าจอจริง: เมนู Stock on hand จัดการพัสดุเรียลไทม์',
    subtitle: 'ตารางบริหารสต็อกอุปกรณ์สำนักงาน แสดงยอดคงเหลือ ยอดจองรอจ่าย ยอดพร้อมเบิก และเกณฑ์ขั้นต่ำ',
    src: 'assets/hr-web-stock-on-hand.png',
    tag: 'หน้าจอเว็บจริง'
  },
  {
    id: 'p-web-hr-items',
    category: 'webapp',
    title: 'หน้าจอจริง: ฝั่งพนักงานเลือกพัสดุและดูตำแหน่งตู้เก็บ',
    subtitle: 'หน้าค้นหาพัสดุ แสดงรหัส บาร์โค้ด ตู้จัดเก็บ และสต็อกคงเหลือจริงแบบ Real-time',
    src: 'assets/hr-web-step2-items.png',
    tag: 'ฝั่งพนักงาน'
  },
  {
    id: 'p-web-hr-sig',
    category: 'webapp',
    title: 'หน้าจอจริง: เซ็นชื่ออิเล็กทรอนิกส์ยืนยันการเบิก',
    subtitle: 'ช่องลงลายมือชื่อดิจิทัลผ่านหน้าจอสัมผัสสมาร์ตโฟนหรือคอมพิวเตอร์ ป้องกันการสวมสิทธิ์',
    src: 'assets/hr-web-step3-signature.png',
    tag: 'Digital Signature'
  },
  {
    id: 'p-web-hr-a4',
    category: 'webapp',
    title: 'หน้าจอจริง: ใบเบิกพัสดุมาตรฐานขนาด A4 อัตโนมัติ',
    subtitle: 'หลังสแกนจ่ายของเสร็จ ระบบสร้างใบเบิก A4 พร้อมเลข REQ และสถานะ APPROVED ให้ทันที',
    src: 'assets/hr-web-print-a4.png',
    tag: 'ใบเบิกอัตโนมัติ'
  },
  {
    id: 'p-dash-yoy',
    category: 'dashboard',
    title: 'Power BI: สรุปยอดขายข้ามปี 2025 vs 2026 (ดึงตรงจาก SAP)',
    subtitle: 'เปรียบเทียบแนวโน้มยอดขายรายเดือน ไตรมาส และกลุ่มสินค้า (เบลอข้อมูลความลับแล้ว)',
    src: 'assets/pbi-multiyear-masked.png',
    tag: 'Power BI & SAP'
  },
  {
    id: 'p-dash-sml',
    category: 'dashboard',
    title: 'Power BI: แดชบอร์ดติดตามยอดขายเทียบเป้า Smart Life',
    subtitle: 'เจาะลึกยอดขายรายพนักงาน รายลูกค้า และเทียบยอดคำสั่งซื้อแบบ On-Demand (เบลอความลับแล้ว)',
    src: 'assets/pbi-smart-life-masked.png',
    tag: 'Power BI & SAP'
  }
];

const PHOTO_TABS = [
  { id: 'all', label: `รูปทั้งหมด (${ALL_PHOTOS.length})` },
  { id: 'training', label: 'บรรยากาศการสอน Copilot (4)' },
  { id: 'workshop', label: 'ผลงาน Workshop 5 แผนก (5)' },
  { id: 'webapp', label: 'หน้าจอระบบเว็บจริง (8)' },
  { id: 'dashboard', label: 'Power BI & SAP (2)' }
];

export default function ActivityGallery() {
  const [filter, setFilter] = useState<string>('all');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const filteredPhotos =
    filter === 'all' ? ALL_PHOTOS : ALL_PHOTOS.filter((p) => p.category === filter);

  const currentPhoto = activePhotoIdx !== null ? filteredPhotos[activePhotoIdx] : null;

  return (
    <section id="gallery" className="py-12 sm:py-16 relative z-10 border-t border-sky-100 bg-sky-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>REAL EVIDENCE • คลังภาพกิจกรรมและหลักฐานผลงานจริง</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            รวมภาพการทำงานจริง <span className="gradient-text-blue">จัดเต็มทุกขั้นตอน</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            ภาพบรรยากาศการจัดอบรม Copilot ในห้องประชุมใหญ่, ชิ้นงานจริงจาก Workshop 5 แผนก และภาพหน้าจอระบบจริง
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PHOTO_TABS.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
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
                      คลิกเพื่อดูรูปขนาดเต็ม
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
                    ภาพที่ {activePhotoIdx + 1} จาก {filteredPhotos.length}
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
