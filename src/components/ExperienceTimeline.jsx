import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'HunarIntern',
    period: 'Jun - Aug 2025',
    points: [
      'Built and deployed multiple front-end projects — portfolio website, Netflix clone, BMI calculator, online course platform.',
      'Implemented responsive UI designs using HTML, CSS, and JavaScript.',
      'Used Git and GitHub for version control and collaborative development.',
    ],
  },
  {
    role: 'Java Full Stack Developer Trainee',
    company: 'EduSkills (AICTE Virtual Internship)',
    period: 'Oct - Dec 2024',
    points: [
      'Completed AICTE-backed intensive training program in Java Full Stack Development.',
      'Gained hands-on experience through project-based learning and real-world assignments.',
    ],
  },
  {
    role: 'Android Developer Trainee (Kotlin)',
    company: 'EduSkills (AICTE Virtual Internship)',
    period: 'Jul - Sep 2024',
    points: [
      'Completed AICTE-backed intensive training program in Android Development using Kotlin.',
      'Built multiple Android applications, gaining practical experience in mobile app development.',
    ],
  },
]

export default function ExperienceTimeline() {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
        Work history
      </p>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-teal-200 mb-6">
        Experience
      </h2>
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border dark:bg-border-dark" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 border border-teal-300 dark:border-teal-700 flex items-center justify-center">
                <Briefcase size={13} className="text-teal-600 dark:text-teal-400" />
              </div>

              {/* Card */}
              <div className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-5 hover:border-teal-500 dark:hover:border-teal-500 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-teal-200">
                      {exp.role}
                    </p>
                    <p className="text-xs text-teal-600 dark:text-teal-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-teal-400 bg-subtle dark:bg-subtle-dark px-2.5 py-1 rounded-lg whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-600 dark:text-teal-400 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}