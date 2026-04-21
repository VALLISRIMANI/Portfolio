import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function CertModal({ cert, onClose }) {
  // Close modal when user presses Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!cert) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700">
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-teal-50">{cert.name}</p>
            <p className="text-xs text-slate-600 dark:text-teal-400 mt-0.5">{cert.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-teal-400 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Certificate image */}
        <div className="bg-slate-100 dark:bg-slate-700 p-4">
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full rounded-lg object-contain max-h-60"
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-4 flex items-center justify-between">
          <span className="text-xs text-slate-600 dark:text-teal-400">
            Issued by {cert.issuer}
          </span>
          
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            📌 View certificate
          </a>
        </div>
      </div>
    </div>
  )
}