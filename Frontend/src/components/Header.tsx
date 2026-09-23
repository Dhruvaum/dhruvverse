import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled ? 'bg-background/60 backdrop-blur-2xl shadow-2xl' : 'bg-transparent backdrop-blur-none shadow-none'
      }`}
    >
      <nav className="flex h-16 items-center justify-between px-6 sm:px-10">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Logo" className="h-30 w-60 sm:h-30 sm:w-60" />
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="group relative inline-block">
                <span className="bg-[linear-gradient(180deg,#52525b_0%,#a1a1aa_45%,#27272a_100%)] bg-clip-text text-sm font-medium text-transparent transition-[filter] duration-300 ease-out group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.25)] dark:bg-[linear-gradient(180deg,#fafafa_0%,#d4d4d8_45%,#71717a_100%)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_40%,rgba(255,255,255,0.95)_50%,transparent_60%)] bg-size-[300%_100%] bg-position-[150%_0] bg-no-repeat bg-clip-text text-sm font-medium text-transparent transition-[background-position] duration-2500 ease-out group-hover:bg-position-[-150%_0]"
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          <span className="h-5 w-px bg-black/10 dark:bg-white/10" />

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header