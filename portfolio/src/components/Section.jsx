import firstimg from '../assets/icon-brand-recognition.svg';
import secondimg from '../assets/icon-detailed-records.svg';
import thirdimg from '../assets/icon-fully-customizable.svg';
const Section = () => {
  return (
    <section>
      <div className='sec'>
      <div className="sec1">
        <input type="text" name="" id="" placeholder="Shorten a link here..." />
        <button>Shorten It!</button>
      </div>
      <div className="sec2">
        <h1> Advanced Statistics</h1>
        <p> Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
      </div>
      <div className="down">
      <div className='first'>
        <img src={firstimg} alt="firstimg" />
        <h1>Brand Recognition</h1>
        <p>Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.</p>
      </div>
      <div className='second'>
        <img src={secondimg} alt="secondimg" />
        <h1>Brand Recognition</h1>
        <p>Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.</p>
      </div>
      <div className='third'>
        <img src={thirdimg} alt="thirdimg" />
        <h1>Brand Recognition</h1>
        <p>Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.</p>
      </div>
      </div>
      </div>
      <div className='down2'>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default Section
