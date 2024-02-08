import { Outlet } from 'react-router-dom'
import { CTA, Footer, Navbar } from '../components'

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CTA />
      <Footer />
    </>
  )
}

export default Root