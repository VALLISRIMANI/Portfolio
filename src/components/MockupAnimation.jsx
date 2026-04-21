import { motion } from 'framer-motion'

const bar = (width, delay, color = 'bg-teal-200 dark:bg-teal-700') => ({
  width, delay, color
})

const mockupLines = [
  bar('75%',  0),
  bar('55%',  0.05),
  bar('85%',  0.1),
  bar('45%',  0.15),
  bar('65%',  0.2),
  bar('30%',  0.25),
]

export default function MockupAnimation({ bg }) {
  return (
    <div className={`w-full rounded-t-xl overflow-hidden ${bg} p-4`}>

      {/* Fake browser chrome */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-teal-200 dark:bg-teal-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-teal-200 dark:bg-teal-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-teal-200 dark:bg-teal-600" />
        <div className="ml-2 flex-1 h-4 rounded bg-card dark:bg-card-dark max-w-40" />
      </div>

      {/* Fake navbar bar */}
      <div className="w-full h-6 rounded bg-card dark:bg-card-dark mb-3" />

      {/* Animated content lines */}
      <div className="space-y-2 px-1">
        {mockupLines.map(({ width, delay, color }, i) => (
          <motion.div
            key={i}
            className={`h-2.5 rounded-full ${color}`}
            style={{ width }}
            initial={{ opacity: 0, scaleX: 0.6, originX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
          />
        ))}
      </div>

      {/* Fake button */}
      <motion.div
        className="mt-4 w-20 h-6 rounded-lg bg-teal-400 dark:bg-teal-600"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 0.7, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      />
    </div>
  )
}