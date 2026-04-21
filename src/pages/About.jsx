import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import SkillsGrid from '../components/SkillsGrid'
import ExperienceTimeline from '../components/ExperienceTimeline'
import Education from '../components/Education'
import CertCard from '../components/CertCard'
import CertModal from '../components/CertModal'
import CodingStats from '../components/CodingStats'
import { certifications } from '../data/certifications'

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null)

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
          <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
            Who I am
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-teal-200 mb-4">
            About me
          </h1>
          <p className="text-sm text-slate-700 dark:text-teal-400 max-w-lg leading-relaxed">
            CS undergrad with a passion for building intelligent, user-focused
            applications. I enjoy working across the full stack — from designing
            clean UIs to integrating LLMs and building backend APIs.
          </p>
        </motion.div>

        {/* Skills */}
        <section className="mb-14">
          <SkillsGrid />
        </section>

        <div className="border-t border-border dark:border-border-dark mb-14" />

        {/* Experience */}
        <section className="mb-14">
          <ExperienceTimeline />
        </section>

        <div className="border-t border-border dark:border-border-dark mb-14" />

        {/* Education */}
        <section className="mb-14">
          <Education />
        </section>

        <div className="border-t border-border dark:border-border-dark mb-14" />

        {/* Certifications */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-teal-200 mb-2">
            Certifications
          </h2>
          <p className="text-xs text-slate-600 dark:text-teal-400 mb-6">
            Click any certificate to view it
          </p>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <CertCard
                key={cert.id}
                cert={cert}
                index={i}
                onClick={setSelectedCert}
              />
            ))}
          </div>
        </section>

        <div className="border-t border-border dark:border-border-dark mb-14" />

        {/* Coding stats */}
        <section>
          <CodingStats />
        </section>

      </div>

      {/* Certificate modal — renders outside normal flow */}
      <CertModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </Layout>
  )
}