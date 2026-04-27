import React from 'react'
import { BsTelephone, } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import Hours from '../components/hours';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation();
  return (
    <div>
      <section  className='mt-[10%] bg-[#efe1e9] py-[10px] dark:bg-gray-700'>
<div className='container m-auto w-[90%]'>
<h1 className='text-[50px] text-[#b17989]  find my-[30px] '>{t("contactTitle1")}</h1>
<div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
  <div className='flex flex-col gap-8'>

<div className='flex gap-8'>
  <div className='text-[20px] mt-[4px] text-[#8b5d6a]  bg-[#e1b4c1] p-[18px] rounded-[20px]'><BsTelephone /></div>
  <div>
    <p className='text-[20px] dark:text-white'>{t("phone1")}</p>
    <a href="tel:" className='text-[18px] dark:text-white'>(555) 284-9103</a>
  </div>
</div>

<div className='flex gap-8'>
  <div className='text-[20px] mt-[4px] text-[#8b5d6a]  bg-[#e1b4c1] p-[18px] rounded-[20px]'><LuMail /></div>
  <div>
    <p className='text-[20px] dark:text-white'>{t("email")}</p>
    <a href="mailto:hello@atelierstudio.com" className='text-[18px] dark:text-white'>hello@atelierstudio.com</a>
  </div>
</div>

<div className='flex gap-8 mb-[10px]'>
  <div className='text-[20px] mt-[4px] text-[#8b5d6a]  bg-[#e1b4c1] p-[18px] rounded-[20px]'><FiMapPin /></div>
  <div>
    <p className='text-[20px] dark:text-white'>{t("address1")}</p>
    <a href="#" className='text-[18px] dark:text-white'>{t("address")}</a>
  </div>
</div>

<div>
  <Hours/>
</div>
  </div>

  <div className="p-2 rounded-lg shadow-lg bg-white/30 flex justify-center mb-[30px]  w-full ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2900520616654!2d49.830245999999995!3d40.3802637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc7cc980dcf%3A0x673167ae4ca5ec5c!2zQcSfIMOHacOnyZl5aW0gTml6YW1pIEZpbGlhbMSx!5e0!3m2!1str!2saz!4v1774988330166!5m2!1str!2saz"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg  w-full h-[300px] md:h-[450px]"
  ></iframe>
</div>
</div>
</div>
      </section>

      <section  className='mt-[60px] bg-[#efe1e9] py-[10px] dark:bg-gray-700'>
<div className='container m-auto w-[90%]'>
  <p className='text-[50px] text-[#b17989]  find my-[30px]'>{t("getInTouch")}</p>
   <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
<div className="w-full md:w-[500px] h-[300px] md:h-[400px] mb-[20px] ">
<img src="https://i.pinimg.com/1200x/01/5b/b7/015bb784cae6a7bb565e90eaae426f52.jpg" alt=""  className='w-full h-full object-cover rounded-xl shadow-lg'/>
</div>

<form className='mt-[22px] flex flex-col gap-6'>
     <p className='text-[24px] text-[#7a535e] find'>{t("messageInfo")}</p>
    <input type="email" placeholder='Email'  className="p-3 w-[300px] rounded-md border-2 border-[#b17989] focus:outline-none hover:shadow-md"/>
    <textarea placeholder='Message' className=' resize-none p-3 w-[300px] h-[100px]  md:w-[450px]  rounded-md border-2 border-[#b17989] focus:outline-none hover:shadow-md'></textarea>
    <div><button className="bg-[#895d6a] text-[#f1dbe1] rounded-[40px] px-[25px] py-[10px] mt-[10px]  text-[18px] font-bold tracking-[2px] text-white" >{t("submit")}</button></div>
  </form>
  </div>
</div>
      </section >
    </div>
  )
}

export default Contact
