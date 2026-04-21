import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech — Computer Science Engineering',
    institution: 'Sri Vasavi Engineering College, Peddatadepalli',
    period: '2023 – 2027',
    score: 'CGPA: 9.28',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College, Tadepalligudem',
    period: '2021 – 2023',
    score: '95%',
  },
  {
    degree: 'SSC',
    institution: 'Z.P.P. High School, Kommugudem',
    period: '2016 – 2021',
    score: '95%',
  },
]

export default function Education() {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
        Academic background
      </p>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-teal-200 mb-6">
        Education
      </h2>
      <div className="space-y-3">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-5 flex items-start gap-4 hover:border-teal-500 dark:hover:border-teal-500 transition-colors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="w-9 h-9 rounded-lg bg-teal-100 dark:bg-teal-800 border border-teal-300 dark:border-teal-700 flex items-center justify-center shrink-0">
              <GraduationCap size={15} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-teal-200 mb-0.5">
                {edu.degree}
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mb-2 truncate">
                {edu.institution}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-subtle dark:bg-subtle-dark text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded">
                  {edu.period}
                </span>
                <span className="text-xs font-medium text-slate-700 dark:text-teal-300">
                  {edu.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}