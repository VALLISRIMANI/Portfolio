import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, XCircle } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-card dark:bg-card-dark border-b border-border dark:border-border-dark sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link to="/" className="p-1.5 text-teal-600 dark:text-teal-300 font-bold text-lg hover:text-teal-700 dark:hover:text-teal-400 transition-colors border-2 hover:border-teal-600 dark:hover:border-teal-600 rounded-full">
          VG.
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm transition-colors font-medium ${
                pathname === to
                  ? 'text-teal-600 dark:text-teal-300'
                  : 'text-slate-600 dark:text-teal-300 hover:text-teal-600 dark:hover:text-teal-200'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-teal-600 dark:text-teal-300 hover:bg-subtle dark:hover:bg-subtle-dark transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden p-2 rounded-lg text-teal-600 dark:text-teal-300 hover:bg-subtle dark:hover:bg-subtle-dark transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XCircle size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border dark:border-border-dark bg-card dark:bg-card-dark px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === to
                  ? 'text-teal-600 dark:text-teal-300'
                  : 'text-slate-600 dark:text-teal-300'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}