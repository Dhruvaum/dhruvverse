import { useEffect, useRef, type PointerEvent } from 'react'
import { Dialog } from 'radix-ui'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { GalleryItem } from '@/features/portfolio/data/projects'

type Props = {
  title: string
  items: GalleryItem[]
  index: number | null
  onIndexChange: (index: number) => void
  onClose: () => void
}

export default function GalleryModal({ title, items, index, onIndexChange, onClose }: Props) {
  const open = index !== null
  const current = index ?? 0
  const item = items[current]
  const thumbs = useRef<(HTMLButtonElement | null)[]>([])
  const swipeStart = useRef<number | null>(null)

  const go = (step: number) => onIndexChange((current + step + items.length) % items.length)

  useEffect(() => {
    if (!open) return
    thumbs.current[current]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    for (const offset of [1, -1]) {
      const next = items[(current + offset + items.length) % items.length]
      if (next.type === 'image') new Image().src = next.src
    }
  }, [open, current, items])

  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') swipeStart.current = e.clientX
  }

  const onPointerUp = (e: PointerEvent) => {
    if (swipeStart.current === null) return
    const delta = e.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1)
  }

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          aria-describedby={undefined}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') go(1)
            if (e.key === 'ArrowLeft') go(-1)
          }}
          className="fixed inset-0 z-101 flex flex-col text-white outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-5">
            <div className="min-w-0">
              <Dialog.Title className="truncate text-base font-semibold sm:text-lg">{title}</Dialog.Title>
              <p className="text-xs text-white/50 tabular-nums">
                {current + 1} / {items.length}
              </p>
            </div>
            <Dialog.Close
              aria-label="Close gallery"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
            >
              <X className="size-5" />
            </Dialog.Close>
          </header>

          <div
            className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-4 sm:px-20"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {item.type === 'video' ? (
              <video
                key={item.src}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                className="max-h-full max-w-full rounded-xl shadow-2xl"
              />
            ) : (
              <img
                key={item.src}
                src={item.src}
                alt={item.caption}
                draggable={false}
                className={cn(
                  'max-h-full rounded-xl object-contain shadow-2xl shadow-black/60 select-none animate-in fade-in-0 zoom-in-[0.98] duration-300',
                  item.orientation === 'portrait' ? 'max-w-[min(100%,420px)]' : 'max-w-full',
                )}
              />
            )}

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="absolute top-1/2 left-2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:inline-flex sm:left-6"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="absolute top-1/2 right-2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:inline-flex sm:right-6"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </div>

          <p className="px-4 pt-4 text-center text-sm text-white/70">{item.caption}</p>

          <div className="flex gap-2 overflow-x-auto px-4 pt-4 pb-5 [scrollbar-width:none] sm:px-8 sm:pb-7 *:first:ml-auto *:last:mr-auto">
            {items.map((thumb, i) => (
              <button
                key={thumb.src}
                ref={(node) => {
                  thumbs.current[i] = node
                }}
                type="button"
                onClick={() => onIndexChange(i)}
                aria-label={`Show ${thumb.caption}`}
                aria-current={i === current}
                className={cn(
                  'relative h-14 shrink-0 overflow-hidden rounded-lg ring-2 transition-all sm:h-16',
                  thumb.orientation === 'portrait' ? 'w-9 sm:w-10' : 'w-24 sm:w-28',
                  i === current ? 'opacity-100 ring-teal-400' : 'opacity-45 ring-transparent hover:opacity-80',
                )}
              >
                {thumb.type === 'video' ? (
                  <span className="flex size-full items-center justify-center bg-white/10">
                    <Play className="size-5" />
                  </span>
                ) : (
                  <img src={thumb.src} alt="" loading="lazy" className="size-full object-cover object-top" />
                )}
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
