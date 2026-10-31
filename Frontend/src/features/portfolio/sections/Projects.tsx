import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Expand, Images } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Reveal from '@/components/Reveal'
import GalleryModal from '@/components/GalleryModal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { medslot, sideProjects } from '../data/projects'

const previewIndexes = [2, 3, 6, 8]

function FeaturedProject() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)
  const [tab, setTab] = useState(0)
  const p = medslot
  const cover = p.gallery[0]
  const remaining = p.gallery.length - previewIndexes.length

  return (
    <article className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />

      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-600/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              {p.status}
            </span>
            <span className="rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/5">
              Featured project
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{p.name}</h3>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">{p.tagline}</p>
          <p className="mt-3 text-sm text-muted-foreground">{p.meta.join(' · ')}</p>

          <button
            type="button"
            onClick={() => setGalleryIndex(0)}
            className="group mt-8 block w-full overflow-hidden rounded-2xl border border-black/10 bg-white text-left shadow-xl shadow-black/10 transition-transform duration-500 ease-out hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-teal-400/60 focus-visible:outline-none dark:border-white/10 dark:shadow-black/40"
            aria-label={`Open ${p.name} gallery`}
          >
            <span className="flex items-center gap-2 border-b border-black/5 bg-zinc-100 px-3 py-2">
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </span>
              <span className="mx-auto max-w-[60%] truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-zinc-500">
                {p.liveUrl.replace('https://', '')}
              </span>
            </span>
            <span className="relative block aspect-[16/10] overflow-hidden cursor-pointer">
              <img
                src={cover.src}
                alt={cover.caption}
                loading="lazy"
                className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/35">
                <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-zinc-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand className="size-4" />
                  View gallery
                </span>
              </span>
            </span>
          </button>

          <div className="mt-3 grid grid-cols-5 gap-2">
            {previewIndexes.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setGalleryIndex(i)}
                aria-label={`Open ${p.gallery[i].caption}`}
                className="aspect-[16/10] overflow-hidden rounded-lg border border-black/10 opacity-80 transition-opacity hover:opacity-100 focus-visible:ring-3 focus-visible:ring-teal-400/60 focus-visible:outline-none dark:border-white/10"
              >
                <img src={p.gallery[i].src} alt="" loading="lazy" className="size-full object-cover object-top" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => setGalleryIndex(previewIndexes.length)}
              className="flex aspect-[16/10] items-center justify-center rounded-lg border border-black/10 bg-black/5 text-sm font-medium text-foreground transition-colors hover:bg-black/10 focus-visible:ring-3 focus-visible:ring-teal-400/60 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              +{remaining}
            </button>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {p.numbers.map((n) => (
              <div
                key={n.label}
                className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 dark:border-white/10 dark:bg-white/5"
              >
                <dt className="sr-only">{n.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-foreground">{n.value}</dd>
                <dd className="text-xs text-muted-foreground">{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex min-w-0 flex-col">
          <h4 className="text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-300">
            What makes it hold up
          </h4>
          <ol className="mt-5 space-y-5">
            {p.highlights.map((h, i) => (
              <li key={h.title} className="flex gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-teal-600/30 bg-teal-600/10 text-xs font-semibold text-teal-700 tabular-nums dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
            <Button size="lg" asChild className="bg-teal-500 px-4 text-white hover:bg-teal-600 dark:bg-teal-400 dark:text-zinc-950 dark:hover:bg-teal-300">
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                Live demo
                <ArrowUpRight />
              </a>
            </Button>
            {p.githubUrl && (
              <Button size="lg" variant="outline" asChild className="px-4">
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  GitHub
                </a>
              </Button>
            )}
            <Button size="lg" variant="outline" className="px-4 cursor-pointer" onClick={() => setGalleryIndex(0)}>
              <Images />
              Gallery ({p.gallery.length})
            </Button>
          </div>
        </div>
      </div>

      <div className="relative border-t border-black/10 dark:border-white/10">
        <button
          type="button"
          onClick={() => setDeepDiveOpen((v) => !v)}
          aria-expanded={deepDiveOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-10"
        >
          <span>
            <span className="block font-semibold text-foreground">Engineering deep dive</span>
            <span className="text-sm text-muted-foreground">Architecture, security and the bugs I chased down</span>
          </span>
          <ChevronDown
            className={cn('size-5 shrink-0 text-muted-foreground transition-transform duration-300', deepDiveOpen && 'rotate-180')}
          />
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: deepDiveOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-8 sm:px-10" inert={!deepDiveOpen}>
              <div role="tablist" aria-label="Deep dive topics" className="flex flex-wrap gap-2">
                {p.deepDive.map((d, i) => (
                  <button
                    key={d.label}
                    type="button"
                    role="tab"
                    aria-selected={tab === i}
                    onClick={() => setTab(i)}
                    className={cn(
                      'rounded-full px-4 py-1.5 text-sm transition-colors',
                      tab === i
                        ? 'bg-foreground text-background'
                        : 'border border-black/10 text-muted-foreground hover:text-foreground dark:border-white/10',
                    )}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              <ul role="tabpanel" className="mt-6 grid gap-4 md:grid-cols-2">
                {p.deepDive[tab].points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
                <span className="text-muted-foreground">Coming next:</span>
                {p.next.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-dashed border-black/20 px-3 py-0.5 text-xs text-muted-foreground dark:border-white/20"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <GalleryModal
        title={p.name}
        items={p.gallery}
        index={galleryIndex}
        onIndexChange={setGalleryIndex}
        onClose={() => setGalleryIndex(null)}
      />
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground sm:py-28">
      <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Projects</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Things I've built</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            MedSlot is my latest: a complete product, designed and built end to end, running live in production.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <FeaturedProject />
        </Reveal>

        <Reveal className="mt-16">
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">More projects</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-2xl border border-black/10 bg-black/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg font-semibold text-foreground">{project.name}</h4>
                  <div className="flex shrink-0 gap-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-black/10 hover:text-foreground dark:hover:bg-white/10"
                      >
                        <FaGithub className="size-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live`}
                        className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-black/10 hover:text-foreground dark:hover:bg-white/10"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
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
      </div>
    </section>
  )
}
