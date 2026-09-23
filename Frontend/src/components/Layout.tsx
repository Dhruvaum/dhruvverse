import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Starfield from './Starfield'

const Layout = () => {
  return (
    <>
      <Starfield />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout