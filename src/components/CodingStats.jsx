import { motion } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'

export default function CodingStats() {
  const gfgStats = {
    totalSolved: 816,
    basicSolved: 251,
    easySolved: 349,
    mediumSolved: 200,
    hardSolved: 16,
    acceptanceRate: '78.5%',
    submissions: 1200,
  }

  const leetStats = {
    totalSolved: 234,
    easySolved: 115,
    mediumSolved: 104,
    hardSolved: 15,
    acceptanceRate: '90.58%',
    submissions: 199,
  }

  return (
    <div>
      <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
        Competitive coding
      </p>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-teal-200 mb-6">
        Coding profiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* GFG card */}
        <motion.a
          href="https://geeksforgeeks.org/user/manigudaidsw/"
          target="_blank"
          rel="noreferrer"
          className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-5 hover:border-teal-300 dark:hover:border-teal-600 transition-all group block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-800 border border-teal-300 dark:border-teal-700 flex items-center justify-center">
                <Code2 size={14} className="text-teal-600 dark:text-teal-400" />
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-teal-200">GeeksforGeeks</p>
            </div>
            <ExternalLink size={13} className="text-teal-600 dark:text-teal-500 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors" />
          </div>
          <p className="text-xs text-slate-600 dark:text-teal-400 leading-relaxed">
            Passionate problem solver on GeeksforGeeks with 693 problems solved, specializing in data structures, algorithms, and coding challenges.
          </p>

          <div className="grid grid-cols-5 gap-16 mt-5">
            {[
              { label: 'Solved',  value: gfgStats.totalSolved },
              { label: 'Basic',   value: gfgStats.basicSolved },
              { label: 'Easy',    value: gfgStats.easySolved },
              { label: 'Medium',  value: gfgStats.mediumSolved },
              { label: 'Hard',    value: gfgStats.hardSolved },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-lg font-semibold text-teal-600 dark:text-teal-300">{value}</p>
                <p className="text-xs text-slate-600 dark:text-teal-500">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 dark:text-teal-500 mt-3">
            {gfgStats.submissions} submissions · {gfgStats.acceptanceRate} acceptance
          </p>
        </motion.a>

        {/* LeetCode card */}
        <motion.a
          href="https://leetcode.com/u/vallisrimani/"
          target="_blank"
          rel="noreferrer"
          className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-5 hover:border-teal-500 dark:hover:border-teal-500 transition-all group block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-800 border border-teal-300 dark:border-teal-700 flex items-center justify-center">
                <Code2 size={14} className="text-teal-600 dark:text-teal-400" />
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-teal-200">LeetCode</p>
            </div>
            <ExternalLink size={13} className="text-teal-600 dark:text-teal-500 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors" />
          </div>
          <p className="text-xs text-slate-600 dark:text-teal-400 leading-relaxed">
            Dedicated LeetCode enthusiast with 146 problems solved, excelling in algorithmic challenges and coding interviews.
          </p>

          <div className="grid grid-cols-4 gap-16 mt-5">
            {[
              { label: 'Solved',  value: leetStats.totalSolved },
              { label: 'Easy',    value: leetStats.easySolved },
              { label: 'Medium',  value: leetStats.mediumSolved },
              { label: 'Hard',    value: leetStats.hardSolved },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-lg font-semibold text-teal-600 dark:text-teal-300">{value}</p>
                <p className="text-xs text-slate-600 dark:text-teal-500">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 dark:text-teal-500 mt-3">
            {leetStats.submissions} submissions · {leetStats.acceptanceRate} acceptance
          </p>
        </motion.a>
      </div>
    </div>
  )
}