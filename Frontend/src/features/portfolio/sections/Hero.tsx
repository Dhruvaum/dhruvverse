import { ArrowRight, MapPin } from 'lucide-react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import Reveal from '@/components/Reveal'
import CodeCard from '../components/CodeCard'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Dhruvaum', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruv-tyagi-741169296/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:contact@dhruvverse.com', icon: FaEnvelope },
]

const facts = [
  { value: '80+', label: 'APIs & procedures shipped' },
  { value: '5', label: 'ERP modules owned' },
  { value: '26', label: 'endpoints live in MedSlot' },
]

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-foreground">
      <div className="pointer-events-none absolute -top-24 -left-24 h-112 w-md rounded-full bg-teal-500/25 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-6 pt-28 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
        <Reveal className="flex min-w-0 flex-col items-center gap-7 text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur dark:border-white/10 dark:bg-white/5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Software Engineer at Sensation Software Solutions
          </span>

          <div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              <span className="bg-linear-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">Dhruv Tyagi</span>
            </h1>
            <p className="mt-3 text-xl font-medium text-foreground/90 sm:text-2xl">Full-stack .NET Engineer</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              Mohali, India · Open to new opportunities
            </p>
          </div>

          <p className="max-w-xl text-lg text-muted-foreground">
            I build the core of a college ERP: ASP.NET Core APIs, SQL Server data models and the React screens students
            and staff use every day. I also designed and shipped <span className="text-foreground">MedSlot</span>, a live
            booking platform with server-verified payments and gateway-processed refunds.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button size="lg" asChild className="px-4">
              <a href="#projects">
                See MedSlot
                <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-4">
              <a href="#contact">Get in touch</a>
            </Button>
            <span className="mx-1 hidden h-6 w-px bg-black/10 sm:block dark:bg-white/10" />
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-foreground backdrop-blur-md transition-colors hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <dl className="mt-4 grid w-full max-w-lg grid-cols-3 divide-x divide-black/10 rounded-2xl border border-black/10 bg-black/5 py-4 backdrop-blur-md dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
            {facts.map((f) => (
              <div key={f.label} className="px-3">
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-foreground">{f.value}</dd>
                <dd className="mt-0.5 text-xs text-muted-foreground">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-md min-w-0">
          <CodeCard />
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
