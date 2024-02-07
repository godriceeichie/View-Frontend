import { Link } from 'react-router-dom'
import whiteLogo from '../assets/Logo.svg'
import blueLogo from '../assets/blueLogo.svg'
import UseScroll from '../hooks/useScroll'

const Logo = () => {
  const {scrollPosition} = UseScroll()
  return (
    <Link to={'/'} >
      {
        scrollPosition >= 400 ? <img src={blueLogo} className='w-20 md:w-auto' alt="Logo" /> : <img src={whiteLogo} className='w-20 md:w-auto' alt="Logo" />
      }
    </Link>
  )
}

export default Logo