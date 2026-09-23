import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'

type Role = {
  title: string
  type: 'FULL-TIME' | 'INTERNSHIP'
  promoted?: boolean
  start: Date
  end: Date | null
  bullets: string[]
  tags: string[]
}

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const formatMonthYear = (date: Date) => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`

const formatDuration = (start: Date, end: Date) => {
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (end.getDate() < start.getDate()) months -= 1
  months = Math.max(months, 0)

  const years = Math.floor(months / 12)
  const remMonths = months % 12
  const parts: string[] = []
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (remMonths || !years) parts.push(`${remMonths} mo${remMonths !== 1 ? 's' : ''}`)
  return parts.join(' ')
}

const RichText = ({ text }: { text: string }) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-teal-600 dark:text-teal-300">
          {part}
        </strong>
      ) : (
        part
      ),
    )}
  </>
)

const now = new Date()

const roles: Role[] = [
  {
    title: 'Software Engineer',
    type: 'FULL-TIME',
    promoted: true,
    start: new Date(2025, 6, 1),
    end: null,
    bullets: [
      'Redesigned the **Applications** module end-to-end — consolidated row actions into name- and action-based menus, replaced fragmented status flags with a single lifecycle badge, and restructured the detail page into tabbed **Application/Fee Collection** views.',
      'Implemented **CRM-to-ERP** application sync with automated status assignment and a distinct Academic-Manager verification step.',
      'Fixed a data-linkage gap so student records converted from both **CRM**-sourced and direct-**ERP** applications stay traceable back to their source application.',
      'Built **OTP-based applicant verification** using **Twilio** (SMS) and **SMTP** (email), integrated into the admission workflow for identity confirmation.',
      'Architected dynamic, Fee-Category-wise fee structures, and built invoice creation with assignment to respective students.',
      'Designed a full **Discount/Concession** system from scratch — trust-scoped categories, multi-discount assignment per student, and automatic concession creation on admission.',
      'Re-architected the invoice data model into a unified polymorphic structure (**Academic vs. Hostel**) with consistent preview, deposit, and payment-history handling.',
      'Implemented Financial Year management, Ledger & Ledger Group configuration, and Fee Head-to-Ledger mapping for the Accounts module.',
      'Built a dedicated student-facing portal, frontend and backend — **JWT**-based auth, dashboard, attendance tracking, fee summary, and timetable views.',
      'Engineered and maintained **80+ APIs & stored procedures** (**110+** kept running across dev and production) spanning all 5 ERP modules.',
      'Mentored a junior developer on Fee Management and directed a **2-member CRM team** through the CRM–ERP Fees Integration.',
    ],
    tags: ['ASP.NET Core Web API', 'React', 'TypeScript', 'SQL Server', 'Dapper', 'JWT', 'Twilio', 'Git'],
  },
  {
    title: 'Software Trainee',
    type: 'INTERNSHIP',
    start: new Date(2025, 0, 1),
    end: new Date(2025, 5, 30),
    bullets: [
      'Worked on the **Batch** sub-module of **Core Setup**, and maintained the **Subjects** sub-module built by a teammate, ensuring continued stability.',
      'Contributed to early-stage **Admissions** functionality and maintained the **Student Management** module, fixing bugs to improve data reliability.',
      'Worked on early-stage **Fee Management** functionality under mentor guidance, ahead of taking full ownership of the module as a full-time engineer.',
    ],
    tags: ['ASP.NET Core', 'React', 'SQL Server', 'Git'],
  },
]

const companyStart = new Date(Math.min(...roles.map((r) => r.start.getTime())))
const companyEnd = roles.some((r) => r.end === null) ? null : new Date(Math.max(...roles.map((r) => r.end!.getTime())))

export default function ExperienceCompanyCard() {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/5 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
      >
        <div>
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Sensation Software Solutions</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {formatMonthYear(companyStart)} — {companyEnd ? formatMonthYear(companyEnd) : 'Present'} ·{' '}
            {formatDuration(companyStart, companyEnd ?? now)} · {roles.length} roles
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Mohali, Punjab, India
          </p>
        </div>

        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="space-y-8 border-t border-black/10 px-6 pt-8 pb-6 sm:px-8 sm:pb-8 dark:border-white/10">
            {roles.map((role, index) => (
              <div key={role.title} className="relative pl-8">
                {index !== roles.length - 1 && (
                  <span className="absolute top-3 left-[5px] h-[calc(100%+1rem)] w-px bg-black/15 dark:bg-white/15" />
                )}
                <span className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 border-teal-400 bg-background" />

                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-semibold text-foreground sm:text-lg">{role.title}</h4>
                  <span className="rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/5">
                    {role.type}
                  </span>
                  {role.promoted && (
                    <span className="rounded-full border border-teal-600/30 bg-teal-600/10 px-2.5 py-0.5 text-xs text-teal-700 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
                      Promoted
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {formatMonthYear(role.start)} — {role.end ? formatMonthYear(role.end) : 'Present'} ·{' '}
                  {formatDuration(role.start, role.end ?? now)}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-black/30 dark:bg-white/30" />
                      <span>
                        <RichText text={bullet} />
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
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
        </div>
      </div>
    </div>
  )
}
