import { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'

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
      <nav className="flex h-16 items-center px-6 sm:px-10">
        <img src={logo} alt="Logo" className="h-30 w-60 sm:h-30 sm:w-60" />
      </nav>
    </header>
  )
}

export default Header