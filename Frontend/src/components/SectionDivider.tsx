export default function SectionDivider() {
  return (
    <div className="relative mx-auto h-px w-[70%] max-w-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 h-[2px] w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-zinc-700/70 to-transparent blur-[0.5px] dark:via-zinc-100/90" />
      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-700/60 blur-[2px] dark:bg-zinc-100/70" />
    </div>
  )
}
