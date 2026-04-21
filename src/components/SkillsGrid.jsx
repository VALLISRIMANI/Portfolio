import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function SkillsGrid() {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
        Technologies
      </p>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-teal-200 mb-6">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-5 hover:border-teal-400 dark:hover:border-teal-500 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
          >
            <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map(skill => (
                <span
                  key={skill}
                  className="text-xs font-medium bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700 px-2.5 py-1 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-700 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}