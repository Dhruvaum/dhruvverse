import { ArrowUpRight, GitFork, GitMerge } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Reveal from '@/components/Reveal'
import { Button } from '@/components/ui/button'

const repo = {
  name: 'synentra/synentra',
  url: 'https://github.com/synentra/synentra',
  forkUrl: 'https://github.com/Dhruvaum/synentra',
  prsUrl: 'https://github.com/synentra/synentra/pulls?q=is%3Apr+author%3ADhruvaum',
  description:
    'Intent-aware runtime governance and enforcement for autonomous AI agents interacting with APIs, tools, and MCP servers.',
  tags: ['C#', '.NET', 'AI security', 'Policy engine'],
}

const stats = [
  { value: '5', label: 'pull requests merged' },
  { value: '7', label: 'files changed' },
  { value: '2', label: 'test suites updated' },
]

const pullRequests = [
  {
    number: 508,
    title: 'Propagate cancellation tokens through HitlService',
    detail:
      'Forwarded the cancellation token through the full call chain (HitlService → cache service → cache provider), extended the private helpers to accept it, and updated the unit tests.',
    diff: '+125 −97',
    date: '14 Sep 2026',
  },
  {
    number: 500,
    title: 'Make InfrastructureErrorCodes a static class',
    detail: 'Declared a constants-only class as static to enforce its intent and prevent accidental instantiation.',
    diff: '+1 −1',
    date: '8 Sep 2026',
  },
  {
    number: 493,
    title: 'Default CancellationToken on InternalOnnxProvider.AnalyzeAsync',
    detail: 'Aligned the ONNX provider implementation with the default-valued signature of the ISemanticProvider interface.',
    diff: '+1 −1',
    date: '7 Sep 2026',
  },
  {
    number: 479,
    title: 'Remove unused field from BertTokenizer',
    detail: 'Removed an unread field and its redundant list allocation from the tokenizer constructor.',
    diff: '−2',
    date: '4 Sep 2026',
  },
  {
    number: 478,
    title: 'Remove unused dependency from DecisionEngine',
    detail:
      'Removed an unreferenced configuration dependency from the constructor and updated the tests to the new signature.',
    diff: '−29',
    date: '3 Sep 2026',
  },
]

export default function OpenSource() {
  return (
    <section id="open-source" className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground sm:py-28">
      <div className="pointer-events-none absolute -top-16 -left-20 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Open Source</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Contributions</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Merged contributions to the .NET codebase of an open-source AI agent governance platform.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <article className="overflow-hidden rounded-3xl border border-black/10 bg-black/5 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xl font-semibold text-foreground hover:underline sm:text-2xl"
                >
                  <FaGithub className="size-6 shrink-0" />
                  {repo.name}
                </a>
                <p className="mt-3 max-w-xl text-muted-foreground">{repo.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {repo.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <dl className="grid shrink-0 grid-cols-3 gap-3 lg:w-80">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-black/10 bg-black/5 px-3 py-3 text-center dark:border-white/10 dark:bg-white/5"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{s.value}</dd>
                    <dd className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ul className="divide-y divide-black/10 border-t border-black/10 dark:divide-white/10 dark:border-white/10">
              {pullRequests.map((pr) => (
                <li key={pr.number}>
                  <a
                    href={`${repo.url}/pull/${pr.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 px-6 py-5 transition-colors hover:bg-black/5 sm:px-8 dark:hover:bg-white/5"
                  >
                    <GitMerge className="mt-0.5 size-5 shrink-0 text-violet-600 dark:text-violet-400" aria-label="Merged" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="font-semibold text-foreground group-hover:underline">{pr.title}</span>
                        <span className="text-sm text-muted-foreground">#{pr.number}</span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pr.detail}</p>
                      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-medium text-violet-700 dark:text-violet-300">
                          Merged
                        </span>
                        <span>{pr.date}</span>
                        <span className="font-mono">{pr.diff}</span>
                      </p>
                    </div>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 border-t border-black/10 p-6 sm:px-8 dark:border-white/10">
              <Button size="lg" variant="outline" asChild className="px-4">
                <a href={repo.prsUrl} target="_blank" rel="noopener noreferrer">
                  <GitMerge />
                  All my pull requests
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-4">
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  Repository
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-4">
                <a href={repo.forkUrl} target="_blank" rel="noopener noreferrer">
                  <GitFork />
                  My fork
                </a>
              </Button>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
