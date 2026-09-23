import Reveal from '@/components/Reveal'
import ExperienceCompanyCard from './ExperienceCompanyCard'

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

        <div className="mt-10">
          <ExperienceCompanyCard />
        </div>
      </Reveal>
    </section>
  )
}
