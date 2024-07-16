import firstimg from '../assets/icon-brand-recognition.svg';
import secondimg from '../assets/icon-detailed-records.svg';
import thirdimg from '../assets/icon-fully-customizable.svg';
import react, { useState } from 'react';


const Section = () => {
  const [url, setUrl] = useState(null)
  const [input, setInput] = useState('')

  async function fetchApi(){
    const baseurl = 'https://shorturl-ovln.onrender.com/api/v1/shorturl'
    const response = await fetch(baseurl,{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({url:input}),

    })
    .then((res)=>res.json())
    const data = await response.shorturl
    setUrl(data)
    console.log(data)
  }

  return (
    <section>
      <div className='sec'>
      <div className="sec1">
        <input type="text" name="" id="" onChange={(e)=>setInput(e.target.value)} placeholder="Shorten a link here..." />
        <button onClick={fetchApi}>Shorten It!</button>
      </div>
      <a href={url}><p className='link' >{url}</p></a>
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
