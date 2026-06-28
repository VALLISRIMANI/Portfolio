import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, GitBranch } from 'lucide-react'

const stats = [
  { value: '9.23', label: 'CGPA' },
  { value: '2+',   label: 'AI projects' },
  { value: '5+',   label: 'Certifications' },
  { value: '2+',   label: 'Internships' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* Left — text content */}
      <motion.div
        className="flex-1 max-w-xl"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Available badge */}
        <motion.div variants={fadeUp} className="mb-5">
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-teal-50 dark:bg-teal-800 text-teal-700 dark:text-teal-200 border border-teal-200 dark:border-teal-700 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse" />
            Open to internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-teal-200 leading-tight mb-3"
        >
          Vallisrimani Gudapati
        </motion.h1>

        {/* Typing effect tagline */}
        <motion.div variants={fadeUp} className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-4 h-7">
          <TypeAnimation
            sequence={[
              'AI & Full-Stack Developer',  2000,
              'LLM App Builder',            2000,
              'CS Undergrad @ Sri Vasavi',  2000,
              'Problem Solver',             2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-sm text-slate-600 dark:text-teal-300 leading-relaxed mb-8 max-w-md"
        >
          I build intelligent web applications — from LLM-powered tools to
          full-stack systems. Currently pursuing B.Tech CSE with a CGPA of 9.23,
          always looking for the next interesting problem to solve.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg transition-colors"
          >
            View projects <ArrowRight size={14} />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium bg-subtle dark:bg-subtle-dark hover:bg-slate-100 dark:hover:bg-teal-900 text-slate-700 dark:text-teal-300 px-5 py-2.5 rounded-lg transition-colors border border-slate-200 dark:border-teal-700"
          >
            Resume <Download size={14} />
          </a>
          <a
            href="https://github.com/VALLISRIMANI"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium bg-subtle dark:bg-subtle-dark hover:bg-slate-100 dark:hover:bg-teal-900 text-slate-700 dark:text-teal-300 px-5 py-2.5 rounded-lg transition-colors border border-slate-200 dark:border-teal-700"
          >
            GitHub <GitBranch size={14} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={fadeUp} className="flex items-center gap-6 flex-wrap">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-semibold text-slate-900 dark:text-teal-200">{value}</p>
                <p className="text-xs text-slate-500 dark:text-teal-500 mt-0.5">{label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-border dark:bg-border-dark" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right — avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="shrink-0"
      >
        <div className="w-80 h-80 rounded-full bg-teal-100 dark:bg-teal-800 border-5 border-teal-300 dark:border-teal-700 flex items-center justify-center overflow-hidden">
          <img src="/valli.jpg" alt="Vallisrimani Gudapati" className="w-80 h-80 object-cover object-center rounded-full" />
        </div>

        {/* Skill chips below avatar */}
        <div className="flex flex-wrap flex-col sm:flex-row justify-center gap-2 mt-5 max-w-xs mx-auto cursor-pointer">
          {['Java', 'SQL', 'React', 'Python', 'MongoDB', 'AI/ML'].map(skill => (
            <span
              key={skill}
              className="text-xs font-medium bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 border border-teal-300 dark:border-teal-700 px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  )
}