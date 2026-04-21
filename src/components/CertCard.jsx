import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

export default function CertCard({ cert, index, onClick }) {
  return (
    <motion.div
      className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-teal-500 dark:hover:border-teal-500 hover:bg-slate-100 dark:hover:bg-teal-900 transition-all group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      onClick={() => onClick(cert)}
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-lg bg-teal-100 dark:bg-teal-800 border border-teal-300 dark:border-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-200 dark:group-hover:bg-teal-700 transition-colors">
        <Award size={15} className="text-teal-600 dark:text-teal-400" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900 dark:text-teal-200 truncate">
          {cert.name}
        </p>
        <p className="text-xs text-slate-600 dark:text-teal-500 mt-0.5">
          {cert.issuer}
        </p>
      </div>

      {/* Tag + open icon */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 border border-teal-300 dark:border-teal-700 px-2 py-0.5 rounded-full">
          {cert.tag}
        </span>
        <ExternalLink size={12} className="text-teal-600 dark:text-teal-500 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors" />
      </div>
    </motion.div>
  )
}