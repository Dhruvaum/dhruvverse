import Reveal from '@/components/Reveal'

const highlights = [
  { label: '80+ APIs & procedures', sub: '110+ maintained across dev and production' },
  { label: '5 ERP modules owned', sub: 'Admissions, Fees, Accounts, Core Setup, Student Portal' },
  { label: 'Cross-team leadership', sub: 'Mentoring a junior dev, directing a 2-member CRM team' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground sm:py-28"
    >
      <div className="pointer-events-none absolute -top-20 -right-16 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Full-stack .NET developer building enterprise ERP systems
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I work across ASP.NET Core Web API, React, TypeScript, and SQL Server — owning delivery on a college ERP
          system end-to-end, from database design to the interfaces students and staff actually use. Alongside
          individual delivery, I mentor a junior developer and direct a 2-member CRM team.
        </p>

        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-black/10 bg-black/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <dt className="text-base font-semibold text-foreground">{item.label}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{item.sub}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
