import { Award, GraduationCap } from 'lucide-react'
import Reveal from '@/components/Reveal'

const stats = [
  { value: '80+', label: 'APIs & stored procedures engineered' },
  { value: '110+', label: 'kept running across dev and production' },
  { value: '5', label: 'ERP modules owned end to end' },
  { value: '2', label: 'member CRM team directed' },
]

const certifications = ['Intro to Machine Learning, Kaggle', 'Frontend Development, A2IT']

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground sm:py-28">
      <div className="pointer-events-none absolute -top-20 -right-16 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">About</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Full-stack .NET developer building enterprise ERP systems
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I work across ASP.NET Core Web API, React, TypeScript, and SQL Server — owning delivery on a college ERP
          system end-to-end, from database design to the interfaces students and staff actually use. Alongside
          individual delivery, I mentor a junior developer and direct a 2-member CRM team.
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-black/10 bg-black/5 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="bg-linear-to-r from-teal-500 to-indigo-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-teal-300 dark:to-indigo-300">
                {s.value}
              </dd>
              <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex gap-4 rounded-2xl border border-black/10 bg-black/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <GraduationCap className="mt-0.5 size-5 shrink-0 text-teal-600 dark:text-teal-300" />
            <div>
              <h3 className="font-semibold text-foreground">B.Tech, Computer Science & Engineering</h3>
              <p className="mt-1 text-sm text-muted-foreground">Chandigarh Engineering College, Jhanjheri, Mohali</p>
              <p className="mt-1 text-sm text-muted-foreground">2021 — 2025 · CGPA 8.15</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-black/10 bg-black/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <Award className="mt-0.5 size-5 shrink-0 text-teal-600 dark:text-teal-300" />
            <div>
              <h3 className="font-semibold text-foreground">Certifications</h3>
              <ul className="mt-1 space-y-1">
                {certifications.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
