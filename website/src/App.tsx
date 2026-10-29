import { useState } from 'react';
import { Globe } from 'lucide-react';
import ProjectsShowcase from './components/ProjectsShowcase';
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
            <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shrink-0">
              FORD • DX
            </span>
            <div>
              <span className="font-bold text-slate-800 text-xs sm:text-sm block leading-tight">
                Thamawut Dejaroenviroon
              </span>
              <span className="text-[11px] sm:text-xs text-sky-600 font-medium block leading-tight">
                Data Analyst & Technology
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
          </div>
        </div>
      </header>

      <main>
        <ProjectsShowcase
          lang={lang}
          onSelectProject={(proj) => setSelectedProjectId(proj.id)}
        />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-sky-100 bg-white/90 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Thamawut Dejaroenviroon (Ford) • Data Analyst & Technology</p>
          <div className="flex items-center gap-3">
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
