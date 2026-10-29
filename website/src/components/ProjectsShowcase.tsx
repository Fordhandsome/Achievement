import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Images, ShieldCheck, Eye, FolderKanban, Video } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectCaseStudy } from '../data/portfolioData';

interface Props {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: `ทั้งหมด (${PROJECTS.length})` },
  {
    id: 'webapp',
    label: `เว็บแอป (Web App) (${PROJECTS.filter((p) => p.category === 'webapp').length})`
  },
  {
    id: 'dashboard',
    label: `แดชบอร์ด (Dashboard) (${PROJECTS.filter((p) => p.category === 'dashboard').length})`
  },
  {
    id: 'ai-it',
    label: `สอน Copilot & ห้องประชุม Teams (${PROJECTS.filter((p) => p.category === 'ai-it').length})`
  }
];

const BADGE_STYLES: Record<Exclude<ProjectCategory, 'all'>, string> = {
  webapp: 'bg-sky-600 text-white border-sky-400',
  dashboard: 'bg-blue-700 text-white border-blue-500',
  'ai-it': 'bg-indigo-600 text-white border-indigo-400'
};

export default function ProjectsShowcase({ onSelectProject }: Props) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  // Store which photo is previewed on each card (cardId -> photoSrc)
  const [activeCardPhotos, setActiveCardPhotos] = useState<Record<string, string>>({});

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((proj) => proj.category === activeFilter);

  const handleThumbClick = (projectId: string, src: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardPhotos((prev) => ({ ...prev, [projectId]: src }));
  };

  return (
    <section id="projects" className="py-10 sm:py-14 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold mb-3">
            <FolderKanban className="w-3.5 h-3.5 text-sky-600" />
            <span>PORTFOLIO • ผลงานจริงของฟอร์ด (แผนก DX)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            สรุปผลงานที่ทำจริง <span className="gradient-text-blue">Web App • Dashboard • AI & IT</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            รวมโปรเจกต์ที่ลงมือทำเองทั้งหมด พร้อมรูปภาพหน้าจอและภาพกิจกรรมจริง กดที่รูปเพื่อดูรูปขยายได้เลยครับ
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-9">
          {FILTER_TABS.map((tab) => {
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
                          Microsoft Teams Meeting Room
                        </span>
                        <span className="text-xs text-sky-700 mt-0.5">
                          ดำเนินการติดตั้งและเซ็ตอัประบบเสร็จใน 4 วัน
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
                          {project.gallery.length} รูป
                        </span>
                      )}
                    </div>

                    {project.privacyNote && (
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 border border-emerald-300 text-emerald-700 text-[11px] font-semibold shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>เบลอข้อมูลความลับแล้ว</span>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Bar on Card (Show multiple photos right on the card!) */}
                  {project.gallery.length > 1 && (
                    <div className="px-4 py-2 bg-sky-50/70 border-b border-sky-100 flex items-center gap-2 overflow-x-auto">
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 shrink-0">
                        เลือกดูรูป:
                      </span>
                      {project.gallery.slice(0, 5).map((img) => {
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
                      {project.gallery.length > 5 && (
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="text-[11px] font-bold text-blue-700 bg-white border border-sky-200 px-2 py-1 rounded-lg shrink-0 hover:bg-sky-100"
                        >
                          +{project.gallery.length - 5} รูป
                        </button>
                      )}
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>
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
                            ? `ดูรายละเอียด & รูปทั้งหมด (${project.gallery.length})`
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
                          <span>{project.liveLabel || 'เปิดเว็บจริง'}</span>
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
