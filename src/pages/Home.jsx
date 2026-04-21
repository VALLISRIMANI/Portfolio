// Home.jsx
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { motion as Motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border dark:border-border-dark" />
      </div> 

      {/* Quick intro strip below hero */} 
      <Motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 py-14"
      >
        <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-4">
          What I work with
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'Java', 'Python', 'Javascript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'LLM APIs', 'Prompt Engineering', 'Scikit-learn', 'Tailwind CSS', 'Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter Notebook', 'MongoDB Compass', 'Mongodb Atlas'
          ].map(skill => (
            <span
              key={skill}
              className="text-sm bg-card dark:bg-card-dark border border-border dark:border-border-dark text-slate-700 dark:text-teal-300 px-3 py-1.5 rounded-lg hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </Motion.section>
    </Layout>
  )
}