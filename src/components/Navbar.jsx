import logo from '../assets/logo.svg'
import ham from '../assets/icon-hamburger.svg'
import { IoMenuOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from 'react';

function Navbar(){
    const [bar, setBar] = useState(false)
    function menuBar() {
        setBar(!bar)
    }

  return (
    <nav>
       <div className='fle'>
       <img src={logo} alt="" />
      <div className='na'>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className='nav-down'>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
      </div>
      <div onClick={menuBar} className='menuu'>
      {bar ? <MdClose />  : <IoMenuOutline />}
      </div>
       </div>

      <div className={bar ? "sh" : 'show2'}>
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </nav>
  )
}
export default Navbar
