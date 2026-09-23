import { Button } from '@/components/ui/button'
import Reveal from '@/components/Reveal'

const Hero = () => {
  return (
    <>
        <section className="relative min-h-screen overflow-hidden text-foreground">
            <div className="pointer-events-none absolute -top-24 -left-24 h-112 w-md rounded-full bg-teal-500/25 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

            <Reveal className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
            <span className="rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur dark:border-white/10 dark:bg-white/5">
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
                <Button size="lg" asChild>
                <a href="#projects">View my work</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in touch</a>
                </Button>
            </div>

            <div className="mt-6 w-full max-w-md rounded-2xl border border-black/10 bg-black/5 p-6 text-left backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-muted-foreground">
                Currently building, exploring, and open to interesting problems worth solving.
                </p>
            </div>
            </Reveal>
        </section>
    </>
  )
}

export default Hero