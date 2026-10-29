import { useState } from 'react';
import {
  FileText,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Cpu,
  Globe
} from 'lucide-react';
import ProjectsShowcase from './components/ProjectsShowcase';
import ActivityGallery from './components/ActivityGallery';
import CaseStudyModal from './components/CaseStudyModal';
import { ProjectCaseStudy, Language, PROJECTS_BY_LANG } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

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
                    ? 'Engineer with a strong foundation in process design, electronics, and software development. Experienced in building internal web applications (Next.js, React, FastAPI, Node.js), connecting AI tools via MCP & REST APIs, automating SAP/Power BI pipelines, and testing system reliability with Apache JMeter.'
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
    </div>
  );
}
