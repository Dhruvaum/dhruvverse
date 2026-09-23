import { useEffect, useState } from 'react'

const GRADIENT_ID = 'theme-toggle-metal'
const MOON_MASK_ID = 'theme-toggle-moon-mask'

const MetalDefs = ({ isDark }: { isDark: boolean }) => (
  <defs>
    <linearGradient id={GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
      {isDark ? (
        <>
          <stop offset="0%" stopColor="#fafafa" />
          <stop offset="45%" stopColor="#d4d4d8" />
          <stop offset="100%" stopColor="#71717a" />
        </>
      ) : (
        <>
          <stop offset="0%" stopColor="#52525b" />
          <stop offset="45%" stopColor="#a1a1aa" />
          <stop offset="100%" stopColor="#27272a" />
        </>
      )}
    </linearGradient>
  </defs>
)

const SunIcon = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className="size-4.5">
    <MetalDefs isDark={isDark} />
    <circle cx="12" cy="12" r="4" fill={`url(#${GRADIENT_ID})`} />
    <g stroke={`url(#${GRADIENT_ID})`} strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
)

const MoonIcon = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 24 24" className="size-4.5">
    <MetalDefs isDark={isDark} />
    <mask id={MOON_MASK_ID}>
      <rect width="24" height="24" fill="white" />
      <circle cx="15" cy="9" r="7" fill="black" />
    </mask>
    <circle cx="12" cy="12" r="9" fill={`url(#${GRADIENT_ID})`} mask={`url(#${MOON_MASK_ID})`} />
  </svg>
)

type ViewTransition = { ready: Promise<void> }
type DocumentWithViewTransitions = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const dark = stored ? stored === 'dark' : true
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextDark = !isDark
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const applyTheme = () => {
      document.documentElement.classList.toggle('dark', nextDark)
      localStorage.setItem('theme', nextDark ? 'dark' : 'light')
      setIsDark(nextDark)
    }

    const doc = document as DocumentWithViewTransitions

    if (!doc.startViewTransition) {
      applyTheme()
      return
    }

    const transition = doc.startViewTransition(applyTheme)

    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex size-9 shrink-0 items-center justify-center transition-[filter] duration-300 ease-out hover:brightness-125 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.25)] dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#52525b_0%,#a1a1aa_45%,#27272a_100%)] mask-[radial-gradient(circle,transparent_calc(50%-2px),black_calc(50%-2px))] dark:bg-[linear-gradient(180deg,#fafafa_0%,#d4d4d8_45%,#71717a_100%)]"
      />
      {isDark ? <SunIcon isDark={isDark} /> : <MoonIcon isDark={isDark} />}
    </button>
  )
}
