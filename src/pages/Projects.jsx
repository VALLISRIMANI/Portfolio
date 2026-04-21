import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { acnePilot, hunarInternTasks, projects } from '../data/projects'

// ── Shared helpers ───────────────────────────────────────────

function TechBadge({ label }) {
  return (
    <span className="inline-block text-xs font-mono px-2 py-0.5 rounded border border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 bg-subtle dark:bg-subtle-dark">
      {label}
    </span>
  )
}

function LinkButton({ href, label, icon }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border dark:border-border-dark text-slate-700 dark:text-teal-300 hover:bg-slate-100 dark:hover:bg-teal-900 hover:border-teal-500 dark:hover:border-teal-500 transition-all"
    >
      {icon}
      {label}
    </a>
  )
}

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
)

// ── AcnePilot Featured Section ───────────────────────────────

function AcnePilotSection({ project }) {
  const tagStyles = {
    'Team lead': 'bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 border-amber-200 dark:border-amber-700',
    'ML / AI':   'bg-violet-50 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 border-violet-200 dark:border-violet-700',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card dark:bg-card-dark border-2 border-violet-200 dark:border-violet-800 rounded-2xl overflow-hidden"
    >
      {/* Top banner */}
      <div className="bg-linear-to-r from-violet-50 to-teal-50 dark:from-violet-900/30 dark:to-teal-900/30 border-b border-violet-200 dark:border-violet-800 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Pulsing icon */}
          <div className="relative w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-800/60 border border-violet-300 dark:border-violet-700 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-violet-600 dark:text-violet-300">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white dark:border-card-dark animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-bold text-violet-700 dark:text-violet-300 leading-tight">
              AcnePilot
            </p>
            <p className="text-xs text-violet-500 dark:text-violet-400">
              Live · <a href={project.demo} target="_blank" rel="noopener noreferrer" className="underline hover:text-violet-700 dark:hover:text-violet-200 transition-colors">acnepilot.onrender.com</a> 
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${tagStyles[tag] || ''}`}
            >
              {tag}
            </span>
          ))}
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700">
            ✦ Featured
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left — description + role disclaimer */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-teal-200 mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-violet-500 dark:text-violet-400 font-medium mb-3">
              {project.subtitle}
            </p>
            <p className="text-sm text-slate-600 dark:text-teal-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Demo coming soon badge */}
          <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 dark:text-teal-500 italic">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            Demo video coming soon
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => <TechBadge key={t} label={t} />)}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-border dark:border-border-dark">
            <LinkButton href={project.github} label="ML Repo" icon={<GithubIcon />} />
            <LinkButton href={project.githubBackend} label="Backend Repo" icon={<GithubIcon />} />
            <LinkButton href={project.demo} label="Live App" icon={<ExternalIcon />} />
          </div>
        </div>

        {/* Right — feature highlights */}
        <div>
          <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Key Features
          </p>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-teal-300 leading-relaxed"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-500 shrink-0" />
                {h}
              </motion.li>
            ))}
          </ul>

          {/* Stats strip */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { value: '74.3%', label: 'Max confidence' },
              { value: '30d',   label: 'Treatment plan' },
              { value: '19+',   label: 'Community users' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-3 text-center"
              >
                <p className="text-base font-bold text-violet-600 dark:text-violet-300">{value}</p>
                <p className="text-xs text-violet-500 dark:text-violet-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Role note — honest disclaimer */}
          <div className="mt-5 flex items-start gap-2.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500 mt-0.5 shrink-0">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
              <span className="font-semibold">My role:</span> {project.role}
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

// ── HunarIntern Task Card ────────────────────────────────────

function HunarTaskCard({ task, index }) {
  const [playing, setPlaying] = useState(false)

  return (
    <motion.div
      className="bg-card dark:bg-card-dark border-2 border-border dark:border-border-dark rounded-xl overflow-hidden hover:border-teal-500 dark:hover:border-teal-500 hover:bg-slate-100 dark:hover:bg-teal-900/20 transition-all duration-200 group flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Video area */}
      <div className="relative bg-teal-100 dark:bg-teal-900/30 aspect-video flex items-center justify-center overflow-hidden">
        {task.video ? (
          playing ? (
            <video src={task.video} autoPlay controls className="w-full h-full object-cover" />
          ) : (
            <>
              <video
                src={task.video}
                className="w-full h-full object-cover opacity-60"
                muted
                preload="metadata"
              />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="w-12 h-12 rounded-full bg-card dark:bg-card-dark border border-teal-400 dark:border-teal-600 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform shadow-sm">
                  <PlayIcon />
                </span>
              </button>
            </>
          )
        ) : (
          <span className="text-5xl font-bold text-teal-200 dark:text-teal-800 select-none">
            {task.taskNumber.replace('Task ', '')}
          </span>
        )}

        {/* Task badge */}
        <span className="absolute top-2.5 left-2.5 text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-teal-500 text-white">
          {task.taskNumber}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-teal-200 group-hover:text-teal-600 transition-colors">
            {task.title}
          </h3>
          <p className="text-xs text-teal-600 dark:text-teal-400 mt-0.5">
            {task.subtitle}
          </p>
        </div>

        <p className="text-xs text-slate-600 dark:text-teal-400 leading-relaxed flex-1">
          {task.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {task.tech.map(t => <TechBadge key={t} label={t} />)}
        </div>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-border dark:border-border-dark">
          <LinkButton href={task.github} label="GitHub" icon={<GithubIcon />} />
          <LinkButton href={task.demo} label="Live" icon={<ExternalIcon />} />
        </div>
      </div>
    </motion.div>
  )
}

// ── Image Carousel ───────────────────────────────────────────

function Lightbox({ images, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length)
      if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [images.length, onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card dark:bg-card-dark border border-border dark:border-border-dark flex items-center justify-center text-teal-500 hover:border-teal-300 transition-colors text-lg leading-none"
      >×</button>

      <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-teal-400 bg-card dark:bg-card-dark border border-border dark:border-border-dark px-3 py-1 rounded-full">
        {idx + 1} / {images.length}
      </span>

      <img
        src={images[idx]}
        alt={`Screenshot ${idx + 1}`}
        className="max-w-full max-h-[85vh] rounded-xl object-contain"
        onClick={e => e.stopPropagation()}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card dark:bg-card-dark border border-border dark:border-border-dark flex items-center justify-center text-teal-500 hover:border-teal-300 transition-colors text-xl"
          >‹</button>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card dark:bg-card-dark border border-border dark:border-border-dark flex items-center justify-center text-teal-500 hover:border-teal-300 transition-colors text-xl"
          >›</button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setIdx(i) }}
              className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                i === idx
                  ? 'border-teal-400 opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ImageCarousel({ images }) {
  const [idx, setIdx]         = useState(0)
  const [lightbox, setLightbox] = useState(false)

  return (
    <>
      <div
        className="relative w-full h-full cursor-zoom-in"
        onClick={() => setLightbox(true)}
      >
        <img
          src={images[idx]}
          alt={`Screenshot ${idx + 1}`}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/80 dark:bg-card-dark/80 border border-border dark:border-border-dark flex items-center justify-center text-teal-500 hover:border-teal-400 transition-all text-base"
            >‹</button>
            <button
              onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/80 dark:bg-card-dark/80 border border-border dark:border-border-dark flex items-center justify-center text-teal-500 hover:border-teal-400 transition-all text-base"
            >›</button>
          </>
        )}

        <span className="absolute bottom-2 right-2 text-xs bg-card/80 dark:bg-card-dark/80 text-teal-500 px-2 py-0.5 rounded-full border border-border dark:border-border-dark">
          {idx + 1}/{images.length}
        </span>
      </div>

      {lightbox && (
        <Lightbox images={images} startIdx={idx} onClose={() => setLightbox(false)} />
      )}
    </>
  )
}

// ── Personal Project Card ────────────────────────────────────

function ProjectCard({ project, index }) {
  const [playing, setPlaying] = useState(false)

  const tagStyles = {
    'AI-powered': 'bg-teal-50 dark:bg-teal-800 text-teal-600 dark:text-teal-300 border-teal-200 dark:border-teal-700',
    'Team lead':  'bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 border-amber-200 dark:border-amber-700',
    'Web':        'bg-subtle dark:bg-subtle-dark text-teal-500 dark:text-teal-400 border-border dark:border-border-dark',
    'ML / AI':    'bg-teal-50 dark:bg-teal-800 text-teal-600 dark:text-teal-300 border-teal-200 dark:border-teal-700',
  }

  return (
    <motion.div
      className="bg-card dark:bg-card-dark border-2 border-border dark:border-border-dark rounded-xl overflow-hidden hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-200 group flex flex-col"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      {/* Media area */}
      <div className="relative aspect-video bg-subtle dark:bg-subtle-dark overflow-hidden">
        {project.mediaType === 'video' && project.media ? (
          playing ? (
            <video src={project.media} autoPlay controls className="w-full h-full object-cover" />
          ) : (
            <>
              <video
                src={project.media}
                className="w-full h-full object-cover opacity-50"
                muted
                preload="metadata"
              />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="w-12 h-12 rounded-full bg-card dark:bg-card-dark border border-border dark:border-border-dark flex items-center justify-center text-teal-500 group-hover:scale-110 group-hover:border-teal-300 dark:group-hover:border-teal-600 transition-all shadow-sm">
                  <PlayIcon />
                </span>
              </button>
            </>
          )
        ) : project.mediaType === 'images' && project.media ? (
          <ImageCarousel images={project.media} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-3xl font-bold text-teal-100 dark:text-teal-800 select-none">
              {project.title.split(' ')[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-teal-700 dark:text-teal-200 group-hover:text-teal-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-teal-500 dark:text-teal-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>
          {project.tags?.map(tag => (
            <span
              key={tag}
              className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${tagStyles[tag] || ''}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-teal-600 dark:text-teal-400 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => <TechBadge key={t} label={t} />)}
        </div>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-border dark:border-border-dark mt-auto">
          <LinkButton href={project.github} label="GitHub" icon={<GithubIcon />} />
          {project.githubBackend && (
            <LinkButton href={project.githubBackend} label="Backend" icon={<GithubIcon />} />
          )}
          {project.demo
            ? <LinkButton href={project.demo} label="Live" icon={<ExternalIcon />} />
            : <span className="inline-flex items-center text-xs text-teal-300 dark:text-teal-600 italic px-1">
                Desktop app — no live demo
              </span>
          }
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-widest text-teal-400 uppercase mb-3">
            Work
          </p>
          <h1 className="text-3xl font-semibold text-teal-700 dark:text-teal-200 mb-4">
            Projects
          </h1>
          <p className="text-sm text-teal-600 dark:text-teal-400 max-w-lg leading-relaxed">
            A mix of team collaborations, internship deliverables, and independent
            builds — spanning AI/ML, full-stack web apps, and desktop software.
          </p>
        </motion.div>

        {/* ── AcnePilot Collaboration Section ── */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <p className="text-xs font-medium tracking-widest text-violet-500 dark:text-violet-400 uppercase">
                Team Collaboration · Deep Learning
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-200 mb-2">
              Featured Collaboration
            </h2>
            <p className="text-sm text-teal-600 dark:text-teal-400 max-w-5xl leading-relaxed">
              A health-tech project built with teammates — I led coordination and
              contributed to select parts while learning the ML pipeline.
            </p>
          </div>

          <AcnePilotSection project={acnePilot} />
        </section>

        <div className="border-t border-border dark:border-border-dark mb-16" />

        {/* ── HunarIntern Section ── */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <p className="text-xs font-medium tracking-widest text-teal-400 uppercase">
                Internship · Jun 2025
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-200 mb-2">
              HunarIntern — Tasks & Deliverables
            </h2>
            <p className="text-sm text-teal-600 dark:text-teal-400 max-w-xl leading-relaxed">
              Four front-end projects built and deployed during the HunarIntern web
              development internship. Each card includes the demo video, live link,
              and source code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
            {hunarInternTasks.map((task, i) => (
              <HunarTaskCard key={task.id} task={task} index={i} />
            ))}
          </div>
        </section>

        <div className="border-t border-border dark:border-border-dark mb-16" />

        {/* ── Personal Projects Section ── */}
        <section>
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300 dark:bg-teal-500" />
              <p className="text-xs font-medium tracking-widest text-teal-400 uppercase">
                Independent work
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-200 mb-2">
              Personal Projects
            </h2>
            <p className="text-sm text-teal-600 dark:text-teal-400 max-w-xl leading-relaxed">
              Projects built independently — spanning AI-powered tools, full-stack
              platforms, and a desktop application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

      </div>
    </Layout>
  )
}