import Reveal from '@/components/Reveal'

const projects = [
  {
    name: 'PVP (1v1) Tic-Tac-Toe',
    description:
      'A 1v1 Tic-Tac-Toe game backed by a REST API built from scratch, deployed on Azure App Service with a dedicated Azure SQL Database — including production CORS/frontend URL whitelisting.',
    tags: ['React', 'REST API', 'Azure App Service', 'Azure SQL'],
  },
  {
    name: 'Learning Pathways',
    description:
      'A site guiding students toward subjects like Web Dev, DSA, AI, and Data Science using roadmaps powered by roadmap.sh.',
    tags: ['React', 'roadmap.sh'],
  },
  {
    name: 'News Site',
    description: 'Trending news across topics via the newsapi.org API, rendered dynamically on the page.',
    tags: ['JavaScript', 'newsapi.org'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground sm:py-28"
    >
      <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <Reveal className="relative z-10 mx-auto max-w-5xl">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Projects</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Things I've built on my own</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-black/10 bg-black/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/5"
                  >
                    {tag}
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
