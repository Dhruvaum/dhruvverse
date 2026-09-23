import { lazy, Suspense } from 'react'
import type { ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'

const Landing = lazy(() => import('@/features/portfolio/MyDeveloperPortfolio'))

const lazyRoute = (node: ReactNode): ReactNode => (
  <Suspense fallback={<Loader />}>{node}</Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: lazyRoute(<Landing />) }],
  },
])
