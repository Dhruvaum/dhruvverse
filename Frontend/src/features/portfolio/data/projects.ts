import landing from '@/assets/projects/medslot/01-landing.webp'
import howItWorks from '@/assets/projects/medslot/02-how-it-works.webp'
import doubleBooking from '@/assets/projects/medslot/03-double-booking.webp'
import slotHold from '@/assets/projects/medslot/04-slot-hold.webp'
import verifiedPayments from '@/assets/projects/medslot/05-verified-payments.webp'
import refunds from '@/assets/projects/medslot/06-refunds.webp'
import ledger from '@/assets/projects/medslot/07-ledger.webp'
import forDoctors from '@/assets/projects/medslot/08-for-doctors.webp'
import doctorVerification from '@/assets/projects/medslot/09-doctor-verification.webp'
import weeklySchedule from '@/assets/projects/medslot/10-weekly-schedule.webp'
import signIn from '@/assets/projects/medslot/11-sign-in.webp'
import mobileLanding from '@/assets/projects/medslot/12-mobile-landing.webp'
import mobileDoubleBooking from '@/assets/projects/medslot/13-mobile-double-booking.webp'

export type GalleryItem = {
  type: 'image' | 'video'
  src: string
  caption: string
  orientation?: 'landscape' | 'portrait'
  poster?: string
}

export type Highlight = {
  title: string
  detail: string
}

export type DeepDive = {
  label: string
  points: string[]
}

export type FeaturedProject = {
  name: string
  tagline: string
  status: string
  meta: string[]
  liveUrl: string
  githubUrl: string | null
  highlights: Highlight[]
  numbers: { value: string; label: string }[]
  stack: string[]
  deepDive: DeepDive[]
  next: string[]
  gallery: GalleryItem[]
}

export type SideProject = {
  name: string
  description: string
  tags: string[]
  githubUrl: string | null
  liveUrl: string | null
}

export const medslot: FeaturedProject = {
  name: 'MedSlot',
  tagline:
    'A doctor appointment booking platform with concurrency-safe slot reservation, server-side payment verification, and refunds processed through the payment gateway.',
  status: 'Live',
  meta: ['Sep – Oct 2026', '144 commits', 'Live since 30 Oct 2026'],
  liveUrl: 'https://medslot-lemon.vercel.app',
  githubUrl: 'https://github.com/Dhruvaum/MedSlot',
  highlights: [
    {
      title: 'Concurrency-safe booking, verified by tests',
      detail:
        'SQL Server row-version tokens lock each slot. An automated test fires two simultaneous bookings at one slot and checks exactly one wins. It caught a real race condition before launch.',
    },
    {
      title: 'Server-side payment verification',
      detail:
        "The server verifies Razorpay's HMAC-SHA256 signature itself and never takes the browser's word for it.",
    },
    {
      title: 'A slot is held while you pay',
      detail:
        'Reserved for 10 minutes the moment checkout starts. A background job frees it if payment never finishes, and an unfinished checkout resumes on the same gateway order instead of creating a duplicate.',
    },
    {
      title: 'Gateway-processed refunds',
      detail:
        'Cancel more than 2 hours ahead for a full refund, or pay a ₹50 penalty inside 2 hours. The refund runs through Razorpay and a background job confirms it settled.',
    },
  ],
  numbers: [
    { value: '26', label: 'API endpoints' },
    { value: '15', label: 'database tables' },
    { value: '4', label: 'background jobs' },
    { value: '3', label: 'user roles' },
  ],
  stack: [
    'ASP.NET Core · .NET 10',
    'EF Core',
    'SQL Server',
    'Hangfire',
    'Razorpay',
    'JWT',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'Azure App Service',
    'Azure SQL',
    'Vercel',
  ],
  deepDive: [
    {
      label: 'Architecture',
      points: [
        'Modular monolith: Auth, Patients, Doctors, Appointments, Payments and Support, each with its own controller, service and repository. Microservices were rejected because booking and payment must succeed or fail together.',
        'Payments modelled like Stripe and Razorpay: one payment per appointment, every gateway attempt saved as its own record, refunds as separate records with their own settlement time.',
        'Hangfire runs 4 recurring jobs: daily slot generation for a rolling 14-day window, releasing unpaid holds every 2 minutes, doctor fund-release tracking, and refund settlement checks.',
        'Global exception middleware returns proper 401, 403 and 409 responses with one consistent error format. Responses are mapped to DTOs and documented with Swagger.',
      ],
    },
    {
      label: 'Security',
      points: [
        'JWT auth with three roles: Patient, Doctor and Support Agent. Changeable status, like doctor verification, is read fresh from the database instead of trusted from the token.',
        'No user IDs in your own URLs. Identity comes from the token, closing off "swap the ID" attacks.',
        'Passwords hashed with PBKDF2 and never returned. Full git history scanned to confirm no secret was ever committed.',
        'Swagger and the Hangfire dashboard are off in production, and CORS is locked to the live frontend.',
      ],
    },
    {
      label: 'Debugging',
      points: [
        'The concurrency test exposed a race condition in the booking logic, fixed before it ever shipped.',
        'The first production deploy failed with a 500. Production logs showed scaffolded database code silently overriding the Azure connection string. Fixed with a one-line guard.',
        'Traced a crash with no stack trace to a hosting-layer process kill mid-request, confirmed by reproducing it under a different host.',
      ],
    },
  ],
  next: ['Doctor leave days', 'Distance-based search', 'Doctor payouts via Razorpay Route'],
  gallery: [
    { type: 'image', src: landing, caption: 'Landing page' },
    { type: 'image', src: howItWorks, caption: 'How it works, and why MedSlot' },
    { type: 'image', src: doubleBooking, caption: 'Concurrency-safe slot locking' },
    { type: 'image', src: slotHold, caption: '10-minute hold while the patient pays' },
    { type: 'image', src: verifiedPayments, caption: 'Server-side Razorpay signature verification' },
    { type: 'image', src: refunds, caption: 'Automatic refunds with a 2-hour cut-off' },
    { type: 'image', src: ledger, caption: 'One ledger for payments and refunds' },
    { type: 'image', src: forDoctors, caption: 'For Doctors page' },
    { type: 'image', src: doctorVerification, caption: 'Manual doctor verification by Support' },
    { type: 'image', src: weeklySchedule, caption: 'Weekly schedule that generates its own slots' },
    { type: 'image', src: signIn, caption: 'Sign in' },
    { type: 'image', src: mobileLanding, caption: 'Mobile: landing', orientation: 'portrait' },
    { type: 'image', src: mobileDoubleBooking, caption: 'Mobile: booking guarantees', orientation: 'portrait' },
  ],
}

export const sideProjects: SideProject[] = [
  {
    name: 'PVP (1v1) Tic-Tac-Toe',
    description:
      'A 1v1 Tic-Tac-Toe game backed by a REST API built from scratch, deployed on Azure App Service with a dedicated Azure SQL Database, including production CORS and frontend URL whitelisting.',
    tags: ['React', 'REST API', 'Azure App Service', 'Azure SQL'],
    githubUrl: 'https://github.com/Dhruvaum',
    liveUrl: null,
  },
  {
    name: 'Learning Pathways',
    description:
      'A site guiding students toward Web Dev, DSA, AI and Data Science using roadmaps powered by roadmap.sh.',
    tags: ['React', 'roadmap.sh'],
    githubUrl: 'https://github.com/Dhruvaum',
    liveUrl: null,
  },
  {
    name: 'News Site',
    description: 'Trending news across topics via the newsapi.org API, rendered dynamically on the page.',
    tags: ['JavaScript', 'newsapi.org'],
    githubUrl: 'https://github.com/Dhruvaum',
    liveUrl: null,
  },
]
