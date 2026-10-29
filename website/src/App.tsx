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
  Check
} from 'lucide-react';
import ProjectsShowcase from './components/ProjectsShowcase';
import ActivityGallery from './components/ActivityGallery';
import CaseStudyModal from './components/CaseStudyModal';
import { ProjectCaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [showDockerModal, setShowDockerModal] = useState(false);
  const [copiedDocker, setCopiedDocker] = useState(false);

  const dockerCommand = 'docker compose up -d';

  const handleCopyDocker = () => {
    navigator.clipboard.writeText(dockerCommand);
    setCopiedDocker(true);
    setTimeout(() => setCopiedDocker(false), 2000);
  };

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
                AI Solution & Process Automation Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowDockerModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-sky-100 hover:text-blue-700 transition-colors border border-slate-200"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>วิธีรัน Docker</span>
            </button>

            <a
              href="Resume-Thamawut-Dejaroenviroon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md shadow-sky-500/20 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>เปิดดู Resume (PDF)</span>
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
                  <span>ประวัติและผลงานจริง (Official Portfolio)</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  ธรรมวุฒิ ดีเจริญวิรุฬห์ (ฟอร์ด)
                </h1>
                <p className="text-sm font-semibold text-sky-700 mt-0.5">
                  Thamawut Dejaroenviroon • AI Solution & Process Automation Specialist
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  เชี่ยวชาญการพัฒนาระบบ AI Workflow, เว็บแอปพลิเคชันลดงานกระดาษ (Non-Paper Use), 
                  ระบบเชื่อมต่อ MCP API, สแกนบาร์โค้ดตัดสต็อกจริง และ Power BI Dashboard ดึงข้อมูลตรงจาก SAP
                </p>

                {/* Education & Contacts Chips */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>วศ.บ. วิศวกรรมเคมี มจพ. (เกียรตินิยมอันดับ 2 | GPA: 3.35)</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <a href="tel:0882777131" className="hover:text-blue-600 font-mono">088-2777-131</a>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-600" />
                    <a href="mailto:kc50jakod@gmail.com" className="hover:text-blue-600 font-mono">kc50jakod@gmail.com</a>
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
                  <span>ดาวน์โหลด Resume PDF</span>
                </a>
                <a
                  href="https://github.com/Fordhandsome/Achievement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-blue !py-2.5 !px-4 text-center justify-center"
                >
                  <span>ดูโค้ดบน GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <ProjectsShowcase onSelectProject={(proj) => setSelectedProject(proj)} />
        <ActivityGallery />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-sky-100 bg-white/90 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Thamawut Dejaroenviroon (Ford) • AI Solution & Process Automation Engineer</p>
          <div className="flex items-center gap-3">
            <a href="Resume-Thamawut-Dejaroenviroon.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
              Resume (PDF)
            </a>
            <span>•</span>
            <a href="https://github.com/Fordhandsome/Achievement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
              GitHub Repo
            </a>
            <span>•</span>
            <button type="button" onClick={() => setShowDockerModal(true)} className="text-blue-600 hover:underline font-semibold">
              Docker Instructions
            </button>
          </div>
        </div>
      </footer>

      {/* Case Study Details Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
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
                  วิธีรันหน้าเว็บด้วย Docker
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
              สำหรับผู้ว่าจ้างหรือผู้สนใจที่ต้องการรันหน้าเว็บแบบ Local บนเครื่องตัวเอง สามารถใช้คำสั่ง Docker Compose เพียงคำสั่งเดียว:
            </p>

            <div className="mt-3 relative bg-slate-950 text-sky-400 font-mono text-xs sm:text-sm p-4 rounded-xl flex items-center justify-between">
              <code>docker compose up -d</code>
              <button
                type="button"
                onClick={handleCopyDocker}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
              >
                {copiedDocker ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDocker ? 'คัดลอกแล้ว' : 'คัดลอก'}</span>
              </button>
            </div>

            <div className="mt-4 p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-900 space-y-1">
              <p className="font-bold">ขั้นตอนการเปิดดู:</p>
              <p>1. โคลน Repo: <code className="font-mono bg-white px-1.5 py-0.5 rounded">git clone https://github.com/Fordhandsome/Achievement.git</code></p>
              <p>2. รันคำสั่งด้านบน แล้วเปิดเบราว์เซอร์ไปที่: <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline font-mono">http://localhost:3000</a></p>
            </div>

            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={() => setShowDockerModal(false)}
                className="btn-blue !py-2 !px-5"
              >
                เข้าใจแล้ว
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
