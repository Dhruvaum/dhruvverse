import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import {
  SiCplusplus,
  SiCss,
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiRazorpay,
  SiReact,
  SiShadcnui,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import {
  TbApi,
  TbBolt,
  TbBrandAzure,
  TbBrandCSharp,
  TbClockCog,
  TbDatabase,
  TbPlugConnected,
  TbRefresh,
  TbSql,
  TbStack2,
  TbUsersGroup,
} from 'react-icons/tb'
import { DiMsqlServer } from 'react-icons/di'
import { VscAzure, VscVscode } from 'react-icons/vsc'
import { BiLogoVisualStudio } from 'react-icons/bi'
import Reveal from '@/components/Reveal'

type Skill = { name: string; icon: IconType; color?: string; large?: boolean }

const categories: { label: string; skills: Skill[] }[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'C#', icon: TbBrandCSharp, color: '#a179dc' },
      { name: 'C / C++', icon: SiCplusplus, color: '#659ad2' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'SQL', icon: TbSql, color: '#f29111' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'ASP.NET Core', icon: SiDotnet, color: '#7c5cf5' },
      { name: 'EF Core', icon: TbDatabase, color: '#a78bfa' },
      { name: 'Dapper', icon: TbBolt, color: '#38bdf8' },
      { name: 'SQL Server', icon: DiMsqlServer, color: '#e0393e', large: true },
      { name: 'REST APIs', icon: TbApi, color: '#2dd4bf' },
      { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#fb015b' },
      { name: 'Hangfire', icon: TbClockCog, color: '#f59e0b' },
      { name: 'Razorpay', icon: SiRazorpay, color: '#3395ff' },
      { name: 'Middleware', icon: TbStack2, color: '#94a3b8' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'React Hooks', icon: TbPlugConnected, color: '#61dafb' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#3c99dc' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'shadcn/ui', icon: SiShadcnui },
    ],
  },
  {
    label: 'Cloud & Tools',
    skills: [
      { name: 'Azure App Service', icon: VscAzure, color: '#0089d6' },
      { name: 'Azure SQL', icon: TbBrandAzure, color: '#3ba0f2' },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Swagger', icon: SiSwagger, color: '#85ea2d' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Visual Studio', icon: BiLogoVisualStudio, color: '#9b6fd6' },
      { name: 'VS Code', icon: VscVscode, color: '#23a9f2' },
    ],
  },
  {
    label: 'Practices',
    skills: [
      { name: 'Team Leadership', icon: TbUsersGroup, color: '#2dd4bf' },
      { name: 'Agile', icon: TbRefresh, color: '#818cf8' },
    ],
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

      <Reveal className="relative z-10 mx-auto max-w-5xl">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Skills</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">What I work with</h2>

        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-300">
                {category.label}
              </h3>
              <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                {category.skills.map(({ name, icon: Icon, color, large }) => (
                  <li
                    key={name}
                    style={{ '--brand': color ?? 'currentColor' } as CSSProperties}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-black/10 bg-black/5 px-2 py-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--brand)_55%,transparent)] hover:shadow-[0_8px_30px_-10px_var(--brand)] dark:border-white/10 dark:bg-white/5"
                  >
                    <Icon
                      aria-hidden="true"
                      className={`${large ? '-my-1.5 size-12' : 'size-9'} transition-transform duration-300 group-hover:scale-110`}
                      style={{ color: color ?? 'var(--foreground)' }}
                    />
                    <span className="text-xs font-medium text-foreground/80 sm:text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
