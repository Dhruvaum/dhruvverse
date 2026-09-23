import Reveal from '@/components/Reveal'

const categories = [
  {
    label: 'Languages',
    skills: ['C/C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Backend',
    skills: ['ASP.NET Core Web API', 'REST API Design', 'Dapper', 'JWT Authentication', 'Middleware'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'React Hooks', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Tools & Practice',
    skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Team Leadership & Mentoring', 'Agile Collaboration'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground sm:py-28"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Skills</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">What I work with</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.label}
              className="rounded-2xl border border-black/10 bg-black/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-sm font-semibold tracking-wide text-teal-600 dark:text-teal-300">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
