import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Images, ShieldCheck, Eye, FolderKanban, Video } from 'lucide-react';
import { PROJECTS_BY_LANG, ProjectCategory, ProjectCaseStudy, Language } from '../data/portfolioData';

interface Props {
  lang: Language;
  onSelectProject: (project: ProjectCaseStudy) => void;
}

const BADGE_STYLES: Record<Exclude<ProjectCategory, 'all'>, string> = {
  webapp: 'bg-sky-600 text-white border-sky-400',
  dashboard: 'bg-blue-700 text-white border-blue-500',
  'ai-it': 'bg-indigo-600 text-white border-indigo-400'
};

export default function ProjectsShowcase({ lang, onSelectProject }: Props) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [activeCardPhotos, setActiveCardPhotos] = useState<Record<string, string>>({});

  const projects = PROJECTS_BY_LANG[lang];

  const filterTabs: { id: ProjectCategory; label: string }[] =
    lang === 'en'
      ? [
          { id: 'all', label: `All Projects (${projects.length})` },
          {
            id: 'webapp',
            label: `Web Applications (${projects.filter((p) => p.category === 'webapp').length})`
          },
          {
            id: 'dashboard',
            label: `BI & SAP Dashboards (${projects.filter((p) => p.category === 'dashboard').length})`
          },
          {
            id: 'ai-it',
            label: `AI Enablement & IT (${projects.filter((p) => p.category === 'ai-it').length})`
          }
        ]
      : [
          { id: 'all', label: `ทั้งหมด (${projects.length})` },
          {
            id: 'webapp',
            label: `เว็บแอป (Web App) (${projects.filter((p) => p.category === 'webapp').length})`
          },
          {
            id: 'dashboard',
            label: `แดชบอร์ด (Dashboard) (${projects.filter((p) => p.category === 'dashboard').length})`
          },
          {
            id: 'ai-it',
            label: `อบรม AI & ระบบ IT (${projects.filter((p) => p.category === 'ai-it').length})`
          }
        ];

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((proj) => proj.category === activeFilter);

  const handleThumbClick = (projectId: string, src: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardPhotos((prev) => ({ ...prev, [projectId]: src }));
  };

  return (
    <section id="projects" className="py-8 sm:py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner with Real Copilot Workshop Background */}
        <div className="relative rounded-3xl overflow-hidden mb-9 border border-sky-200/80 shadow-xl">
          <img
            src="assets/copilot-group.jpg"
            alt="AI for Modern Workplace Workshop"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-blue-950/70 backdrop-blur-[2px]" />

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-300/40 text-sky-200 text-xs font-bold mb-3 backdrop-blur-md">
              <FolderKanban className="w-3.5 h-3.5 text-sky-300" />
              <span>
                {lang === 'en'
                  ? 'PORTFOLIO • DELIVERED ENTERPRISE PROJECTS'
                  : 'PORTFOLIO • ผลงานที่พัฒนาและใช้งานจริง'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {lang === 'en' ? 'Delivered Systems ' : 'สรุปผลงานที่ทำจริง '}
              <span className="text-sky-300">Web App • SAP BI • AI & IT</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base mt-2.5 leading-relaxed">
              {lang === 'en'
                ? 'Production web applications powered by Gemini & Gemma AI, automated SAP/Power BI dashboards, and corporate Microsoft Copilot training. Click any card or thumbnail below to inspect real system screens.'
                : 'รวมโปรเจกต์เว็บแอปพลิเคชันที่ขับเคลื่อนด้วย Gemini & Gemma AI แดชบอร์ดเชื่อมต่อ SAP และงานฝึกอบรม Microsoft Copilot พร้อมภาพหน้าจอจากระบบจริง'}
            </p>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-9">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 border-sky-400 text-white shadow-md shadow-sky-500/25'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-blue-700 hover:border-sky-300 hover:bg-sky-50/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const currentPreview =
                activeCardPhotos[project.id] || project.coverImage || '';

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                  className="white-card white-card-hover flex flex-col overflow-hidden group"
                >
                  {/* Cover Preview */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative h-56 sm:h-64 w-full bg-slate-100 border-b border-sky-100 overflow-hidden cursor-pointer"
                  >
                    {currentPreview ? (
                      <img
                        src={currentPreview}
                        alt={project.title}
                        loading="lazy"
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                          project.coverFit === 'contain'
                            ? 'object-contain p-3 bg-white'
                            : 'object-cover object-top'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 mb-3">
                          <Video className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-bold text-blue-900">
                          Microsoft Teams Meeting Room & Auto-Booking
                        </span>
                        <span className="text-xs text-sky-700 mt-0.5">
                          {lang === 'en'
                            ? 'Conference room AV hardware setup & automated room booking in Microsoft Teams'
                            : 'ตั้งค่าอุปกรณ์ห้องประชุมและทำระบบจองห้องประชุมอัตโนมัติผ่าน Microsoft Teams'}
                        </span>
                      </div>
                    )}

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span
                        className={`px-3 py-1 rounded-lg text-[11px] font-bold tracking-wide border shadow-sm ${
                          BADGE_STYLES[project.category]
                        }`}
                      >
                        {project.badge}
                      </span>

                      {project.gallery.length > 0 && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/95 text-slate-800 border border-slate-200 shadow-sm">
                          <Images className="w-3.5 h-3.5 text-sky-600" />
                          {project.gallery.length} {lang === 'en' ? 'Screens' : 'รูป'}
                        </span>
                      )}
                    </div>

                    {project.privacyNote && (
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 border border-emerald-300 text-emerald-700 text-[11px] font-semibold shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>
                          {lang === 'en' ? 'Data Privacy Protected' : 'ปกป้องข้อมูลความลับบริษัท'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Bar on Card */}
                  {project.gallery.length > 1 && (
                    <div className="px-4 py-2 bg-sky-50/70 border-b border-sky-100 flex items-center gap-2 overflow-x-auto">
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 shrink-0">
                        {lang === 'en' ? 'Preview:' : 'เลือกดูรูป:'}
                      </span>
                      {project.gallery.map((img) => {
                        const isSelected =
                          (activeCardPhotos[project.id] || project.coverImage) === img.src;

                        return (
                          <button
                            key={img.src}
                            type="button"
                            onClick={(e) => handleThumbClick(project.id, img.src, e)}
                            title={img.caption}
                            className={`relative h-10 w-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                              isSelected
                                ? 'border-blue-600 scale-105 shadow-sm'
                                : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-sky-400'
                            }`}
                          >
                            <img src={img.src} alt="" className="w-full h-full object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-700 mb-2.5">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>

                    {/* Mini Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-sky-50/80 border border-sky-100 px-2.5 py-2 text-center"
                        >
                          <div className="text-xs sm:text-sm font-extrabold text-blue-700">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="btn-blue"
                      >
                        <Eye className="w-4 h-4" />
                        <span>
                          {project.gallery.length > 0
                            ? lang === 'en'
                              ? `View Details & Screens (${project.gallery.length})`
                              : `ดูรายละเอียด & รูปทั้งหมด (${project.gallery.length})`
                            : lang === 'en'
                            ? 'View Case Study'
                            : 'ดูรายละเอียดงาน'}
                        </span>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-blue"
                        >
                          <span>
                            {project.liveLabel || (lang === 'en' ? 'Open Live App' : 'เปิดเว็บจริง')}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
