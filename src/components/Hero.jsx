import heroimg from '../assets/illustration-working.svg'
const Hero = () => {
  return (
    <div className='herro'>
      <div className='left'>
      <h1>More than just shorter links</h1>
      <p>Build your brand’s recognition and get detailed insights 
      on how your links are performing.</p>
      <button>Get Started</button>
      </div>
      <img src={heroimg} alt="heroimg" />
    </div>
  )
}

export default Hero
