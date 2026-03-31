import React from 'react'
import { BsTelephone, } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import Hours from '../components/hours';
function Contact() {
  return (
    <div>
      <section  className='mt-[10%] bg-[#efe1e9] py-[10px]'>
<div className='container m-auto w-[90%]'>
<h1 className='text-[50px] text-[#b17989]  find my-[30px]'>Contact Us</h1>
<div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
  <div className='flex flex-col gap-8'>

<div className='flex gap-8'>
  <div className='text-[20px] mt-[4px] text-[#8b5d6a]  bg-[#e1b4c1] p-[18px] rounded-[20px]'><BsTelephone /></div>
  <div>
    <p className='text-[20px]'>Phone</p>
    <a href="tel:" className='text-[18px]'>(555) 284-9103</a>
  </div>
</div>

<div className='flex gap-8'>
  <div className='text-[20px] mt-[4px] text-[#8b5d6a]  bg-[#e1b4c1] p-[18px] rounded-[20px]'><LuMail /></div>
  <div>
    <p className='text-[20px]'>Email</p>
    <a href="mailto:hello@atelierstudio.com" className='text-[18px]'>hello@atelierstudio.com</a>
  </div>
</div>

<div className='flex gap-8 mb-[10px]'>
  <div className='text-[20px] mt-[4px] text-[#8b5d6a]  bg-[#e1b4c1] p-[18px] rounded-[20px]'><FiMapPin /></div>
  <div>
    <p className='text-[20px]'>Address</p>
    <a href="#" className='text-[18px]'>55 Design District
Miami, FL 33137</a>
  </div>
</div>

<div>
  <Hours/>
</div>

  </div>

  <div className="p-2 rounded-lg shadow-lg bg-white/30 flex justify-center mb-[30px]  w-full md:w-[600px] ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2900520616654!2d49.830245999999995!3d40.3802637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc7cc980dcf%3A0x673167ae4ca5ec5c!2zQcSfIMOHacOnyZl5aW0gTml6YW1pIEZpbGlhbMSx!5e0!3m2!1str!2saz!4v1774988330166!5m2!1str!2saz"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg"
  ></iframe>
</div>
</div>
</div>
      </section>
    </div>
  )
}

export default Contact
