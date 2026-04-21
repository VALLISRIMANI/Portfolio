import { motion } from 'framer-motion'
import { Mail, GitBranch, ExternalLink, Phone } from 'lucide-react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'manigudapati61@gmail.com',
    href: 'mailto:manigudapati61@gmail.com',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/VALLISRIMANI',
    href: 'https://github.com/VALLISRIMANI',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vallisrimani',
    href: 'https://www.linkedin.com/in/vallisrimani-gudapati-ba7a872a7/',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8885409894',
    href: 'tel:+918885409894',
  },
]

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
            Get in touch
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-teal-200 mb-4">
            Let's connect
          </h1>
          <p className="text-sm text-slate-700 dark:text-teal-400 max-w-md leading-relaxed">
            Open to internship opportunities, collaborations, and interesting
            projects. Drop a message and I'll get back to you soon.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left — social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
              Find me on
            </p>
            <div className="space-y-3">
              {socials.map(({ icon, label, value, href }) => {
                const Icon = icon
                return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl hover:border-teal-500 dark:hover:border-teal-500 hover:bg-slate-100 dark:hover:bg-teal-900 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-100 dark:bg-teal-800 border border-teal-300 dark:border-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-200 dark:group-hover:bg-teal-700 transition-colors">
                    <Icon size={15} className="text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-teal-600 dark:text-teal-400">
                      {label}
                    </p>
                    <p className="text-sm text-slate-900 dark:text-teal-200 truncate">
                      {value}
                    </p>
                  </div>
                </a>
                )
              })}
            </div>

            {/* Availability note */}
            <div className="mt-6 p-4 bg-teal-100 dark:bg-teal-900 border border-teal-300 dark:border-teal-700 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
                <p className="text-xs font-medium text-teal-700 dark:text-teal-300">
                  Currently available
                </p>
              </div>
              <p className="text-xs text-teal-600 dark:text-teal-400 leading-relaxed">
                Open to Software Engineer internships, part-time roles, and
                freelance projects. Response time is usually within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-6"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-teal-200 mb-5">
              Send a message
            </p>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </Layout>
  )
}