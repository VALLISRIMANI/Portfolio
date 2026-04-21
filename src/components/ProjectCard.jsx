import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import MockupAnimation from './MockupAnimation'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl overflow-hidden flex flex-col hover:border-teal-500 dark:hover:border-teal-500 transition-colors group"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      {/* Animated mockup at top */}
      <MockupAnimation bg={project.mockupBg} />

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">

        {/* Tags row */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-medium bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 border border-teal-300 dark:border-teal-700 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-900 dark:text-teal-200 mb-2 group-hover:text-teal-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-teal-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs bg-subtle dark:bg-subtle-dark text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-border dark:border-border-dark">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 dark:text-teal-300 hover:text-teal-700 dark:hover:text-teal-200 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              <ExternalLink size={13} /> Live demo
            </a>
          )}
          {!project.demo && (
            <span className="text-xs text-slate-500 dark:text-teal-600 italic">
              Demo coming soon
            </span>
          )}
        </div>

      </div>
    </motion.div>
  )
}