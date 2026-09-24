import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Landing from '@/features/portfolio/MyDeveloperPortfolio'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Landing /> }],
  },
])
