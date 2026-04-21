import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-page dark:bg-page-dark transition-colors duration-300 font-sans">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}