import { useState } from 'react';
import {
  FileText,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Terminal,
  ExternalLink,
  Copy,
  Check,
  Cpu,
  Gauge,
  Server,
  ShieldCheck,
  GitBranch,
  Award,
  Globe
} from 'lucide-react';
import ProjectsShowcase from './components/ProjectsShowcase';
import ActivityGallery from './components/ActivityGallery';
import CaseStudyModal from './components/CaseStudyModal';
import { ProjectCaseStudy, Language, PROJECTS_BY_LANG } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showDockerModal, setShowDockerModal] = useState(false);
  const [copiedDocker, setCopiedDocker] = useState(false);

  const dockerCommand = 'docker compose up -d --build';

  const handleCopyDocker = () => {
    navigator.clipboard.writeText(dockerCommand);
    setCopiedDocker(true);
    setTimeout(() => setCopiedDocker(false), 2000);
  };

  const selectedProject: ProjectCaseStudy | null = selectedProjectId
    ? PROJECTS_BY_LANG[lang].find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 text-slate-900">
      {/* Soft White-Blue Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-28 -right-28 w-[500px] h-[500px] rounded-full bg-sky-300/25 blur-[110px] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 -left-28 w-[460px] h-[460px] rounded-full bg-blue-400/15 blur-[110px] z-0"
      />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm">
              FORD • DX
            </span>
            <div className="hidden sm:block">
              <span className="font-bold text-slate-800 text-sm">
                Thamawut Dejaroenviroon
              </span>
              <span className="text-xs text-sky-600 font-medium block">
                Data Analyst & Technology • AI Solution & Automation
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher (EN Default) */}
            <div className="inline-flex items-center rounded-xl bg-slate-100 p-0.5 border border-slate-200">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('th')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'th'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                TH
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowDockerModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-sky-100 hover:text-blue-700 transition-colors border border-slate-200"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden md:inline">
                {lang === 'en' ? 'Docker Setup' : 'วิธีรัน Docker'}
              </span>
              <span className="md:hidden">Docker</span>
            </button>

            <a
              href="Resume-Thamawut-Dejaroenviroon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md shadow-sky-500/20 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Resume (PDF)' : 'เปิดดู Resume'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Profile Header Summary */}
      <section className="pt-8 pb-4 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="white-card p-6 sm:p-7 bg-white/95 border-sky-200/80 shadow-md shadow-sky-500/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-2">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  <span>
                    {lang === 'en'
                      ? 'OFFICIAL ENGINEERING & IT PORTFOLIO'
                      : 'ประวัติและผลงานจริง (Official Portfolio)'}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {lang === 'en'
                    ? 'Thamawut Dejaroenviroon (Ford)'
                    : 'ธรรมวุฒิ ดีเจริญวิรุฬห์ (ฟอร์ด)'}
                </h1>
                <p className="text-sm font-semibold text-sky-700 mt-0.5">
                  {lang === 'en'
                    ? 'Data Analyst & Technology • AI Solution & Process Automation Specialist'
                    : 'Data Analyst & Technology • AI Solution & Process Automation Specialist'}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  {lang === 'en'
                    ? 'Engineer with a strong foundation in process design, electronics, and software development. Experienced in building internal web applications (Next.js, React, FastAPI, Node.js), connecting AI tools via MCP & REST APIs, automating SAP/Power BI pipelines, and testing system reliability with Apache JMeter & Docker.'
                    : 'วิศวกรผู้ผสานทักษะการออกแบบกระบวนการ (Process Design) และพื้นฐานไฟฟ้า-อิเล็กทรอนิกส์ เข้ากับการพัฒนา Web Application (Next.js, React, FastAPI, Node.js), การเชื่อมต่อ AI ด้วย MCP API, ระบบบาร์โค้ดสต็อก และ Power BI เชื่อมต่อข้อมูลจาก SAP'}
                </p>

                {/* Education & Contacts Chips */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3.5 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-lg">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>
                      {lang === 'en'
                        ? 'B.Eng. Chemical Engineering, KMUTNB (2nd Class Honors | GPA: 3.35)'
                        : 'วศ.บ. วิศวกรรมเคมี มจพ. (เกียรตินิยมอันดับ 2 | GPA: 3.35)'}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                    <span>
                      {lang === 'en'
                        ? 'Cert. in Electrical & Electronics (Thai-German Pre-Engineering KMUTNB)'
                        : 'ปวช. ไฟฟ้าและอิเล็กทรอนิกส์ (ร.ร.เตรียมวิศวกรรมศาสตร์ ไทย-เยอรมัน มจพ.)'}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <a href="tel:0882777131" className="hover:text-blue-600 font-mono">
                      088-2777-131
                    </a>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-600" />
                    <a href="mailto:kc50jakod@gmail.com" className="hover:text-blue-600 font-mono">
                      kc50jakod@gmail.com
                    </a>
                  </span>
                </div>
              </div>

              {/* Action Buttons in Header */}
              <div className="flex sm:flex-col gap-2 shrink-0">
                <a
                  href="Resume-Thamawut-Dejaroenviroon.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue !py-2.5 !px-4 text-center justify-center"
                >
                  <FileText className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Download Resume (PDF)' : 'ดาวน์โหลด Resume PDF'}</span>
                </a>
                <a
                  href="https://github.com/Fordhandsome/Achievement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-blue !py-2.5 !px-4 text-center justify-center"
                >
                  <span>{lang === 'en' ? 'GitHub Repository' : 'ดูโค้ดบน GitHub'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Chemical Engineer + Pre-Engineering Electronics in IT? (For IT Managers) */}
      <section className="py-4 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Column: Engineering Mindset for IT */}
            <div className="lg:col-span-7 white-card p-5 sm:p-6 bg-white/95 border-sky-200/80">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700 mb-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>
                  {lang === 'en'
                    ? 'WHY AN ENGINEERING BACKGROUND IN IT?'
                    : 'ทำไมวุฒิวิศวกรรมเคมี + เตรียมวิศวะไฟฟ้า ถึงตอบโจทย์งาน IT?'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {lang === 'en'
                  ? 'Bridging Process Engineering, Electronics & Software Architecture'
                  : 'เชื่อมโยงวิธีคิดเชิงระบบวิศวกรรมและอิเล็กทรอนิกส์ เข้าสู่การพัฒนาระบบ IT'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {lang === 'en'
                  ? 'My background combines a B.Eng. in Chemical Engineering (2nd Class Honors, GPA 3.35) with a 3-year Vocational Certificate in Electrical & Electronics from the Thai-German Pre-Engineering School (KMUTNB). In an IT team, this translates into structured systems thinking:'
                  : 'พื้นฐานจาก วศ.บ. วิศวกรรมเคมี (เกียรตินิยมอันดับ 2, GPA 3.35) ร่วมกับ ปวช. ไฟฟ้าและอิเล็กทรอนิกส์ (เตรียมวิศวะ ไทย-เยอรมัน มจพ.) ช่วยให้วางโครงสร้างซอฟต์แวร์และระบบ IT อย่างเป็นระบบ:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100">
                  <div className="text-xs font-extrabold text-blue-800 mb-1">
                    {lang === 'en'
                      ? '1. Process Flow → State Machines'
                      : '1. Process Flow → Workflow ระบบ'}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {lang === 'en'
                      ? 'Chemical process flow design (PFD) and mass balance directly map to software state machines—such as SOP Create → Audit → Revision → Digital Stamp and real-time stock reservation locks.'
                      : 'นำหลักการเขียนผังกระบวนการ (Process Flow) และการควบคุมสภาวะ มาออกแบบ State Machine ของระบบอนุมัติเอกสารและระบบล็อกสต็อกเรียลไทม์'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100">
                  <div className="text-xs font-extrabold text-blue-800 mb-1">
                    {lang === 'en'
                      ? '2. SPC / Cpk → Data & QA Testing'
                      : '2. SPC / Cpk → ความแม่นยำข้อมูล'}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {lang === 'en'
                      ? 'Prior experience as a QE Engineer (Cpk & Control Charts) and VBA report automation instills strict data validation, SAP/Power BI data integrity, and JMeter load testing.'
                      : 'ประสบการณ์เป็นวิศวกร QE วิเคราะห์ Cpk / Control Charts และทำ VBA Automation ช่วยให้เน้นความถูกต้องของฐานข้อมูลและการยิงทดสอบ Load Test'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100">
                  <div className="text-xs font-extrabold text-blue-800 mb-1">
                    {lang === 'en'
                      ? '3. Electronics → Hardware & IT Ops'
                      : '3. ไฟฟ้า-อิเล็กฯ → ฮาร์ดแวร์และ IT'}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {lang === 'en'
                      ? 'Trained in Electrical & Electronics at Thai-German Pre-Engineering School—comfortable troubleshooting hardware, barcode scanners, conference room AV, and network setups.'
                      : 'มีพื้นฐานด้านไฟฟ้าและอิเล็กทรอนิกส์ เข้าใจการเชื่อมต่ออุปกรณ์ฮาร์ดแวร์ ปืนยิงบาร์โค้ด ระบบห้องประชุมออนไลน์ และการแก้ปัญหาหน้างาน IT'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Production IT Standards & DevOps */}
            <div className="lg:col-span-5 white-card p-5 sm:p-6 bg-white/95 border-sky-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-700 mb-2">
                  <Server className="w-4 h-4 text-sky-600" />
                  <span>
                    {lang === 'en'
                      ? 'IT ENGINEERING STANDARDS & DEVOPS'
                      : 'มาตรฐานทางเทคนิคและการทดสอบระบบ'}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {lang === 'en'
                    ? 'Built, Load-Tested & Containerized'
                    : 'พัฒนา ทดสอบรับโหลด และจัดทำ Container'}
                </h2>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <Gauge className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">
                        {lang === 'en'
                          ? 'Apache JMeter Load Testing (100 Concurrent Users)'
                          : 'ทดสอบรับโหลดด้วย Apache JMeter (100 Users)'}
                      </span>
                      <p className="text-slate-600 mt-0.5">
                        {lang === 'en'
                          ? 'Verified SOP web portal stability across 1,100 requests with 0% error rate before deployment.'
                          : 'ยิงทดสอบความเสถียรของเว็บแอป 1,100 Requests พร้อมกัน 100 คน ผ่าน 100% (0% Error)'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <Terminal className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">
                        {lang === 'en'
                          ? 'Docker & Nginx Production Packaging'
                          : 'รองรับ Docker & Nginx Multi-Stage Build'}
                      </span>
                      <p className="text-slate-600 mt-0.5">
                        {lang === 'en'
                          ? 'Multi-stage Dockerfile (Node 20 Alpine + Nginx) and docker-compose.yml for reproducible deployment.'
                          : 'เขียน Dockerfile และ docker-compose.yml พร้อม Nginx สำหรับรันระบบบน Server ได้ทันที'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <GitBranch className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">
                        {lang === 'en'
                          ? 'MCP API & Enterprise Integration'
                          : 'เชื่อมต่อระบบด้วย MCP API & REST APIs'}
                      </span>
                      <p className="text-slate-600 mt-0.5">
                        {lang === 'en'
                          ? 'Connected AI agents (Claude Code, Codex, Antigravity) to internal databases using Model Context Protocol (MCP) and REST APIs.'
                          : 'เชื่อมโยงเครื่องมือ AI เข้ากับฐานข้อมูลองค์กรผ่านมาตรฐาน Model Context Protocol (MCP) และ REST API'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">
                        {lang === 'en'
                          ? 'Data Governance & Role-Based Workflows'
                          : 'การควบคุมสิทธิ์และปกป้องข้อมูลความลับบริษัท'}
                      </span>
                      <p className="text-slate-600 mt-0.5">
                        {lang === 'en'
                          ? 'Implemented 3-tier approval gates, digital signatures, and strict masking of confidential company records.'
                          : 'ออกแบบลำดับการอนุมัติ 3 ขั้นตอน ลายเซ็นดิจิทัล และการปกป้องข้อมูลความลับขององค์กร'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <ProjectsShowcase
          lang={lang}
          onSelectProject={(proj) => setSelectedProjectId(proj.id)}
        />
        <ActivityGallery lang={lang} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-sky-100 bg-white/90 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Thamawut Dejaroenviroon (Ford) • AI Solution & Process Automation Engineer</p>
          <div className="flex items-center gap-3">
            <a
              href="Resume-Thamawut-Dejaroenviroon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              Resume (PDF)
            </a>
            <span>•</span>
            <a
              href="https://github.com/Fordhandsome/Achievement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              GitHub Repo
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={() => setShowDockerModal(true)}
              className="text-blue-600 hover:underline font-semibold"
            >
              Docker Setup
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
              className="inline-flex items-center gap-1 text-blue-600 hover:underline font-semibold"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'ภาษาไทย' : 'English'}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Case Study Details Modal */}
      <CaseStudyModal
        lang={lang}
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Docker Guide Modal */}
      {showDockerModal && (
        <div
          onClick={() => setShowDockerModal(false)}
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-sky-200 p-6 text-slate-900"
          >
            <div className="flex items-center justify-between pb-3 border-b border-sky-100">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Terminal className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-lg text-slate-900">
                  {lang === 'en' ? 'Run Locally with Docker' : 'วิธีรันหน้าเว็บด้วย Docker'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDockerModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              {lang === 'en'
                ? 'This portfolio includes a multi-stage Dockerfile (Node 20 Alpine build + Nginx Alpine server) and docker-compose.yml:'
                : 'โปรเจกต์นี้มาพร้อม Dockerfile แบบ Multi-stage (Node 20 Alpine + Nginx) และ docker-compose.yml สามารถรันด้วยคำสั่งเดียว:'}
            </p>

            <div className="mt-3 relative bg-slate-950 text-sky-400 font-mono text-xs sm:text-sm p-4 rounded-xl flex items-center justify-between">
              <code>{dockerCommand}</code>
              <button
                type="button"
                onClick={handleCopyDocker}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
              >
                {copiedDocker ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>
                  {copiedDocker
                    ? lang === 'en'
                      ? 'Copied'
                      : 'คัดลอกแล้ว'
                    : lang === 'en'
                    ? 'Copy'
                    : 'คัดลอก'}
                </span>
              </button>
            </div>

            <div className="mt-4 p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-900 space-y-1">
              <p className="font-bold">{lang === 'en' ? 'Quick Steps:' : 'ขั้นตอนการเปิดดู:'}</p>
              <p>
                1. Clone:{' '}
                <code className="font-mono bg-white px-1.5 py-0.5 rounded">
                  git clone https://github.com/Fordhandsome/Achievement.git
                </code>
              </p>
              <p>
                2. Open:{' '}
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 underline font-mono"
                >
                  http://localhost:3000
                </a>
              </p>
            </div>

            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={() => setShowDockerModal(false)}
                className="btn-blue !py-2 !px-5"
              >
                {lang === 'en' ? 'Done' : 'เข้าใจแล้ว'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
