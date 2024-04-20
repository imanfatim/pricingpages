import React from 'react'
import img from '../image.png'
import { Link } from 'react-router-dom'
import eclispe1 from "../Assests/Ellipse 1.png";
import eclipse2 from "../Assests/Ellipse 2.png";


const home = () => {
  return (
    
 <div className=' bg-gray-200 fullscreen-background flex  justify-center items-start h-screen sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
    <img
        src={eclispe1}
        alt="Ellipse 1"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />
      <img
        src={eclipse2}
        alt="Ellipse 2"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />    

<div class="flex flex-col justify-center items-center mt-32 ">
<img src={img} className=' object-contain h-48 w-96 m-10'></img>
<h1 className=' font-semibold text-3xl text-center justify-center'>Simple pricing for your business</h1>
<p className='mt-5 text-lg text-center'>Plans that are carefully crafted to suit your business.</p>
<Link  to="/2ndpage">
<button className='bg-teal-400 px-8 py-1 rounded-md m-5 text-white font-semibold text-xl text-center'>Get Started</button>
</Link>
</div>
</div>


   
          
  )
}

export default home
