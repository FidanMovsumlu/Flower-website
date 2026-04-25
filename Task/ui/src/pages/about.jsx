import React from 'react'
import OurTeam from '../components/ourteam'
import VideoSection from '../components/videoSection'


function About() {
  return (
    <div>
<div  className="bg-[url('https://i.pinimg.com/736x/1c/f8/63/1cf863e1f9efe1dd707a7bb9576816dc.jpg')] 
             bg-cover bg-center bg-no-repeat 
             w-full h-screen">
       
<div className="absolute inset-0 bg-black/40"></div>
        <div className="content">
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]  text-[#eb9ac0]  heading">
            Who We Are?
          </h1>
          <h2 className="text-[30px] sm:text-[50px] md:text-[65px] lg:text-[60px] mb-[25px] heading">
            Our mission is to make people <br /> happy through flowers.
          </h2>
          
          
          <button className="bg-[#ea6da7] rounded-[50px] px-[25px] py-[10px] mt-[20px] text-[18px] font-bold tracking-[2px]">
            <a href="">Shop Now</a>
          </button>
        </div>
      </div>

     <section className="bg-[#ca93a3] py-[40px]  dark:bg-gray-700">
<div className="container w-[90%] m-auto ">
  <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
    <div className="mt-[40px]" >
      <h2 className="text-[50px] text-[#f1dbe1]  find">About Us</h2>
      <p className="text-[20px] my-[30px] text-[#dcdada]">Welcome to our flower shop! We create beautiful bouquets for every occasion. 
Our goal is to make people happy with fresh and colorful flowers. 
We care about quality and love every detail in our arrangements. 
Fast delivery and excellent service are our promise. Our flower shop offers fresh and high-quality flowers every day.
We design unique bouquets for birthdays, weddings, and special events.
Customer satisfaction is very important to us.
We always try to bring joy and positive emotions with our flowers.
Flowers are not just gifts, they are a way to show love and care.
Enjoy exploring our world of flowers!</p>

<button className="bg-[#895d6a] text-[#f1dbe1] rounded-tr-[40px] rounded-bl-[40px] px-[25px] py-[10px] mt-[20px]  text-[18px] font-bold tracking-[2px] text-white">
            <a href="">Contact Us</a>
          </button>
    </div>
    
<div className="  h-[500px] mt-[20px] ml-[40px]">
  <img src="https://i.pinimg.com/736x/ef/fb/66/effb66e54952e73c46f288eec3477061.jpg" alt="shop" className='rounded-[20px] h-[500px] w-[500px]'/>
</div>
  </div>
</div>
</section>



<section >
  <OurTeam/>
</section>

 <section className='relative h-[400px] my-[70px] flex bg-[url("https://cdn.shopify.com/s/files/1/1252/1803/files/ExpressDelivery-Desktop_1.jpg?v=1721097269")] bg-cover bg-center'>
        <div className="relative z-10 text-center mt-[6%] pl-[20px]">
          <h2 className="text-[#52A584] text-5xl font-bold pattern mt-[20px]">
          Fast delivery and excellent <br /> <br />service are our promise.
          </h2>
      <VideoSection/>
        </div>
      </section>
  

      </div>
  
  )
}

export default About
