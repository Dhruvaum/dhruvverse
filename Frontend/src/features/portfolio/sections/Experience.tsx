import Reveal from '@/components/Reveal'
import ExperienceCompanyCard from './ExperienceCompanyCard'

const modules = [
  { name: 'Admissions', summary: 'Applications redesign, CRM → ERP sync, and OTP verification over Twilio SMS and email.' },
  { name: 'Fee Management', summary: 'Dynamic fee structures, invoicing, and a Discount & Concession system built from scratch.' },
  { name: 'Accounts', summary: 'Financial years, ledgers and ledger groups, and Fee Head → Ledger mapping.' },
  { name: 'Core Setup', summary: 'The Batch sub-module and the configuration layer every other module depends on.' },
  { name: 'Student Portal', summary: 'JWT auth, dashboard, attendance, fee summary and timetable, frontend and backend.' },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground sm:py-28"
    >
      <div className="pointer-events-none absolute -top-16 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl" />

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Experience</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Building a college ERP system, end to end
        </h2>

        <h3 className="mt-10 text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-300">
          Modules I own
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <li
              key={m.name}
              className="rounded-2xl border border-black/10 bg-black/5 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <p className="font-semibold text-foreground">{m.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.summary}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ExperienceCompanyCard />
        </div>
      </Reveal>
    </section>
  )
}
