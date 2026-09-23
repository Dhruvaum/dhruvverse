const STAR_COUNT = 80

const stars = Array.from({ length: STAR_COUNT }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: 1 + Math.random() * 1.5,
  delay: Math.random() * 8,
  duration: 3 + Math.random() * 4,
}))

export default function Starfield() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
