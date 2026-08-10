import { lazy, Suspense } from 'react'
import type { ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import Loader from '@/components/Loader'

const Landing = lazy(() => import('@/features/portfolio/MyDeveloperPortfolio'))

const lazyRoute = (node: ReactNode): ReactNode => (
  <Suspense fallback={<Loader />}>{node}</Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: lazyRoute(<Landing />) }],
  },
])
