import logo from '../assets/logo.svg'
import ham from '../assets/icon-hamburger.svg'
  return (
    <nav>
    <div className='na'>
        <img src={logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </div>
        <img className='naim'/>
      <div className='nav-down'>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </nav>
  )

export default Navbar
