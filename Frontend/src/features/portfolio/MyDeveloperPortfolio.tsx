import { Button } from '@/components/ui/button'

export default function MyDeveloperPortfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          Open to new adventures
        </span>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Hey, I'm{' '}
          <span className="bg-linear-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
            Dhruv
          </span>
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground">
          I build fast, scalable, and delightful web experiences — clean interfaces backed by solid architecture.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">View my work</Button>
          <Button size="lg" variant="outline">
            Get in touch
          </Button>
        </div>

        <div className="mt-6 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md">
          <p className="text-sm text-muted-foreground">
            Currently building, exploring, and open to interesting problems worth solving.
          </p>
        </div>
      </div>
    </div>
  )
}
