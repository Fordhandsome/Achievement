import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ProjectCaseStudy, Language } from '../data/portfolioData';

interface Props {
  lang: Language;
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ lang, project, onClose }: Props) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    setSlideIdx(0);
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project.gallery.length > 0) {
        setSlideIdx((prev) => (prev + 1) % project.gallery.length);
      }
      if (e.key === 'ArrowLeft' && project.gallery.length > 0) {
        setSlideIdx((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const hasGallery = project.gallery.length > 0;
  const currentSlide = hasGallery ? project.gallery[slideIdx] || project.gallery[0] : null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-sky-200 rounded-2xl shadow-2xl text-slate-900"
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl px-6 py-4 border-b border-sky-100 flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">
                {project.badge}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mt-0.5">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-sky-100 transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-7 space-y-5">
            {/* Gallery Carousel */}
            {hasGallery && currentSlide && (
              <div className="rounded-2xl bg-slate-50 border border-sky-100 overflow-hidden">
                <div className="relative flex items-center justify-center bg-slate-100/80 min-h-[260px] sm:min-h-[380px] max-h-[480px]">
                  <img
                    src={currentSlide.src}
                    alt={currentSlide.caption}
                    className="max-h-[460px] w-full object-contain"
                  />

                  {project.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setSlideIdx(
                            (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
                          )
                        }
                        aria-label="Previous"
                        className="absolute left-3 p-2.5 rounded-full bg-white/95 border border-sky-200 text-slate-800 shadow-md hover:bg-sky-500 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSlideIdx((prev) => (prev + 1) % project.gallery.length)
                        }
                        aria-label="Next"
                        className="absolute right-3 p-2.5 rounded-full bg-white/95 border border-sky-200 text-slate-800 shadow-md hover:bg-sky-500 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="px-4 py-3 bg-white border-t border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-xs sm:text-sm font-medium text-slate-700">
                    {currentSlide.caption}
                  </p>
                  <span className="text-xs font-bold text-blue-600 shrink-0">
                    {lang === 'en' ? 'Screen' : 'รูปที่'} {slideIdx + 1} / {project.gallery.length}
                  </span>
                </div>

                {project.gallery.length > 1 && (
                  <div className="px-4 py-3 bg-sky-50/50 border-t border-sky-100 flex items-center gap-2 overflow-x-auto">
                    {project.gallery.map((img, i) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setSlideIdx(i)}
                        className={`relative h-14 w-24 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                          i === slideIdx
                            ? 'border-blue-600 scale-105 shadow-sm'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {project.privacyNote && (
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{project.privacyNote}</span>
              </div>
            )}

            {/* Summary Banner */}
            <div className="p-4 rounded-xl bg-sky-50 border-l-4 border-blue-600">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                {lang === 'en' ? 'Operational Outcome' : 'ผลลัพธ์จากการใช้งานจริง'}
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                {project.impactSummary}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-bold text-blue-700 mb-1.5">
                  {lang === 'en' ? '1. Operational Challenge' : '1. ปัญหาหน้างานเดิม'}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{project.situation}</p>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-bold text-blue-700 mb-1.5">
                  {lang === 'en' ? '2. Engineering Solution' : '2. สิ่งที่พัฒนาและแก้ไข'}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-bold text-blue-700 mb-2.5">
                {lang === 'en' ? '3. Key System Capabilities' : '3. รายละเอียดฟีเจอร์ในระบบ'}
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 border border-sky-200 text-blue-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue"
                >
                  <span>{project.liveLabel || (lang === 'en' ? 'Open Live App' : 'เปิดเว็บจริง')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
