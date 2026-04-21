import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [fields, setFields] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!fields.from_name.trim() || !fields.from_email.trim() || !fields.message.trim()) {
      toast.error('Please fill in all fields.')
      return
    }

    setSending(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      toast.success('Message sent! I\'ll get back to you soon.')
      setFields({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      toast.error('Something went wrong. Try emailing me directly.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = `
    w-full text-sm bg-subtle dark:bg-subtle-dark
    border border-border dark:border-border-dark
    text-slate-900 dark:text-teal-200
    placeholder:text-slate-500 dark:placeholder:text-teal-600
    rounded-lg px-4 py-2.5
    focus:outline-none focus:border-teal-500 dark:focus:border-teal-500
    transition-colors
  `

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '13px',
            background: 'var(--color-card, #fff)',
            color: '#0A4F3D',
            border: '1px solid #E8E8E8',
          },
        }}
      />

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-teal-400 mb-1.5">
            Your name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Recruiter name"
            value={fields.from_name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-teal-400 mb-1.5">
            Email address
          </label>
          <input
            type="email"
            name="from_email"
            placeholder="you@company.com"
            value={fields.from_email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-teal-400 mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Hi Vallisrimani, I'd love to discuss an internship opportunity..."
            value={fields.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 dark:disabled:bg-teal-700 text-white px-5 py-2.5 rounded-lg transition-colors"
        >
          {sending ? 'Sending...' : (
            <> Send message <Send size={14} /> </>
          )}
        </button>
      </form>
    </>
  )
}