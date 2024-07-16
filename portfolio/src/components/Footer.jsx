
import face from '../assets/icon-facebook.svg'
import twit from '../assets/icon-twitter.svg'
import pin from '../assets/icon-pinterest.svg'
import ins from '../assets/icon-instagram.svg'
const Footer = () => {
  return (
    <footer>
      <h1>SHORTLY</h1>
      <div className='feat'>
        <h1>Features</h1>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>
      <div className='res'>
        <h1>Resources</h1>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>
      <div className='com'>
        <h1>Company</h1>
        <p>About</p>
        <p>Our Team</p>
        <p>Contact</p>
      </div>
      <div className='social'>
        <img src={face} alt="face" />
        <img src={twit} alt="twit" />
        <img src={pin} alt="pin" />
        <img src={ins} alt="ins" />
      </div>
    </footer>
  )
}

export default Footer
