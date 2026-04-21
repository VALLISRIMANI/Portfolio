export default function Footer() {
  return (
    <footer className="w-full border-t border-border dark:border-border-dark bg-card dark:bg-card-dark mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-teal-500">
          Vallisrimani Gudapati · 2025
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: 'GitHub ↗',   href: 'https://github.com/VALLISRIMANI' },
            { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/vallisrimani-gudapati-ba7a872a7/' },
            { label: 'LeetCode ↗', href: 'https://leetcode.com/u/vallisrimani/' },
            { label: 'GFG ↗',     href: 'https://geeksforgeeks.org/user/manigudaidsw/' },
            { label: 'Microsoft Learn ↗', href: 'https://learn.microsoft.com/en-us/users/GUDAPATIVALLISRIMANI-5022' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-200 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}