import React from 'react'
import Img from '../img.png'
import Arrow from '../arrow.png'
import Cart from '../cart.png'
import eclispe3 from "../Assests/eclipse 3.png";
import eclipse4 from "../Assests/eclipse 4.png";
import Dollar from '../Assests/dollar.png';
import Fire from '../Assests/fire.png';
import Arow from '../Assests/arr.png';

const about = () => {
  return (
    <div className=" bg-neutral-200">
    <div className='fullscreen-background flex  justify-center items-start  sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
    
    <img
        src={eclispe3}
        alt="Ellipse 1"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />
      <img
        src={eclipse4}
        alt="Ellipse 2"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />  <div className='bg-teal-400 flex gap-5 w-full flex-col justify-center items-center'>
         <div class="  flex flex-col justify-center items-center mt-36 mb-5 ">
            <img src={Img} className='  object-contain h-48 w-full m-2 ml-20'></img>
            <h1 className='font-bold text-3xl text-white'>Premium PRO</h1>
            <h1 className='font-bold text-3xl text-white'>$329</h1>
            <p className='text-xl font-medium text-white'>billed just once</p>
       </div>
       
       </div>
       </div>
       <div className='flex flex-col justify-center items-center max-h-screen '>
       <div className="flex flex-col justify-center   pt-10 pr-1 pb-3.5 pl-3.5 mt-6 max-w-full  text-sm leading-7 text-gray-700 bg-white rounded-xl w-[318px]">
      <div className="text-lg font-medium leading-7 text-black">
        Access these features when you get this pricing package for your
        business.
      </div>
      <div className="flex gap-1.5 self-start mt-12 text-gray-700 max-md:mt-10">
        <img
          loading="lazy"
          src={Arrow}
           className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">International calling and messaging API</div>
      </div>
      <div className="flex gap-1.5 mt-3.5">
        <img
          loading="lazy"
          src={Arrow} className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">Additional phone numbers</div>
      </div>
      <div className="flex gap-1.5 mt-3">
        <img
          loading="lazy"
          src={Arrow} className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">Automated messages via Zapier</div>
      </div>
      <div className="flex gap-1.5 mt-3">
        <img
          loading="lazy"
          src={Arrow}
           className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">24/7 support and consulting</div>
      </div>
      <div className="flex gap-2.5 mt-11 text-lg font-semibold leading-8 text-white max-md:mt-10">
        <div className='bg-teal-400 rounded-md'>
        <img
          loading="lazy"
          src={Cart}
          className="  h-12 w-12 justify-center object-contain m-2 "
        />
        </div>
        <div className="justify-center items-center px-16 py-3.5 bg-teal-400 rounded-md">
          Buy Now
        </div>
      </div>
    </div>
    </div>
<div class=" bg-Grayish flex flex-col  justify-center gap-4 md:gap-16 mx-4 mt-16 pb-32 md:flex-row"><div class=" flex  ">
  <img src={Dollar} alt="dollar" class=" w-8 h-8"/>
    <h5 class=" ml-2 font-bold">30 days money back Guarantree</h5></div><div class=" flex ">
      <img src={Fire} alt="fire" class=" w-8 h-6"/>
        <h5 class=" ml-2  font-bold">No setup fees 100% hassle-free</h5>
      </div><div class=" flex ">
        <img src={Arow} alt="back" class=" w-8 h-8"/>
          <h5 class=" ml-2  font-bold">No monthly subscription Pay once and for all</h5>
          </div></div>



       
       </div>
       
  )
}

export default about
