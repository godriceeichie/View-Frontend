import logo from '../assets/Logo.svg'

const Logo = () => {
  return (
    <div>
        <h1 className='text-red-600'>Hello there</h1>
        <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo