import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6'
import SectionDivider from './SectionDivider'

const links = [
  { label: 'Email', href: 'mailto:dhruvtyagi1001@gmail.com', external: false, icon: FaEnvelope },
  { label: 'GitHub', href: 'https://github.com/Dhruvaum', external: true, icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruv-tyagi-741169296/', external: true, icon: FaLinkedin },
  { label: 'X', href: 'https://x.com/TyagiDhruv85165', external: true, icon: FaXTwitter },
]

const Footer = () => {
  return (
    <footer id="contact" className="relative scroll-mt-24 px-6 pt-20 pb-10 text-foreground">
      <SectionDivider />

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's build something</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Open to new opportunities and interesting problems worth solving.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-foreground backdrop-blur-md transition-colors hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <link.icon className="size-4.5" />
            </a>
          ))}
        </div>

        <p className="mt-16 text-sm text-muted-foreground">© {new Date().getFullYear()} Dhruv Tyagi. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
