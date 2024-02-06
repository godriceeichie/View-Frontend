import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'

const Logo = () => {
  return (
    <Link to={'/'} >
      <img src={logo} className='w-20 md:w-auto' alt="Logo" />
    </Link>
  )
}

export default Logo