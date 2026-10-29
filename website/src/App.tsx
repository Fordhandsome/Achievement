import { useState } from 'react';
import ProjectsShowcase from './components/ProjectsShowcase';
import ActivityGallery from './components/ActivityGallery';
import CaseStudyModal from './components/CaseStudyModal';
import { ProjectCaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

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

      {/* Simple Top Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm">
              FORD • DX
            </span>
            <span className="font-bold text-slate-800 text-sm sm:text-base">
              รวมผลงานที่ทำจริง (Portfolio)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="text-xs font-semibold text-slate-600 hover:text-blue-600 px-2 py-1 rounded-md"
            >
              รายการผลงาน
            </a>
            <a
              href="#gallery"
              className="text-xs font-semibold text-blue-700 bg-sky-100 border border-sky-200 hover:bg-sky-200 px-3 py-1 rounded-full"
            >
              คลังภาพผลงานจริง
            </a>
          </div>
        </div>
      </header>

      <main>
        <ProjectsShowcase onSelectProject={(proj) => setSelectedProject(proj)} />
        <ActivityGallery />
      </main>

      <footer className="relative z-10 border-t border-sky-100 bg-white/80 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© 2026 ฟอร์ด (Ford) — แผนก Digital Transformation (DX)</p>
          <p>Web App • Power BI Dashboard • Microsoft 365 Copilot & Teams</p>
        </div>
      </footer>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
