import React from 'react'
import Navbar from '../layout/navbar'
function Home() {
  return (
    <div>
      <Navbar/>
     <div className="video-container">
      
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/flower1.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <h1 className='text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]  text-[#eb9ac0]  heading'>Fresh Flowers,</h1>
        <h2 className='text-[30px] sm:text-[50px] md:text-[65px] lg:text-[80px] mb-[25px] heading'>Happy Moments</h2>
        <p className='text-[12px] sm:text-[10px] md:text-[18px] font-[500] text-[#f0c1ce]'>Flowers make every moment feel softer and more beautiful.
They bring color,</p>
<p className='text-[14px] sm:text-[16px] md:text-[18px] text-[#f0c1ce]'> calm, and a gentle touch of happiness to our lives.</p>
          <button className='bg-[#ea6da7] rounded-[50px] px-[25px] py-[10px] mt-[20px] text-[18px] font-bold tracking-[2px]'><a href="">Shop Now</a></button>
      </div>
  

    </div>
    <section className='container w-[90%] m-auto py-[50px]'>
<div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-[60px]'>

<div className='text-center m-[20px]'>
  <div>
    <p className='text-4xl mb-[20px] font-bold text-[#ea6da7]'>2500+</p>
    <p className='text-3xl text-[#474745]'>Bouquet Sold</p>
    </div>
</div>

<div className='text-center m-[20px]'>
  <div >
    <p className='text-4xl mb-[20px] font-bold text-[#ea6da7]'>2500+</p>
    <p className='text-3xl text-[#474745]' >Happy Clients</p>
    </div>
</div>

<div className='text-center m-[20px] ml-[25px]'>
  <div >
    <p className='text-4xl mb-[20px] font-bold text-[#ea6da7]'>2500+</p>
    <p className='text-3xl text-[#474745]'>Years of Experiance</p>
    </div>
</div>

<div className='text-center m-[20px]'>
  <div >
    <p className='text-4xl mb-[20px] font-bold text-[#ea6da7]'>4.8</p>
    <p className='text-3xl text-[#474745]'>User Rating</p>
    </div>
</div>

</div>
    </section>

    <div className=' bg-[#FDEDEE]'>

      <section className='container w-[90%] m-auto'>
      <div className='mt-[60px] '>
      <h2 className='text-center text-[50px] text-[#c59494] font-bold'>BestSeller</h2>

    </div> 
    </section>

    </div>

<section className='container w-[90%] m-auto py-[50px]'>
  <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-[60px]'>

<div className='flex my-[20px] mx-[18px]'>
  <div className='mr-[32px] mt-[10px]'>
    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png" alt="flower" className='w-[80px]' />
    </div>
  <div>
    <p className='text-[34px] mb-[10px] font-[400]'>100% Freshness</p>
    <p className='text-[#a45173] text-[17px]'>Every flower is picked fresh to keep its natural beauty and long-lasting charm.</p>
  </div>
</div>

<div className='flex my-[20px] mx-[18px]'>
  <div className='mr-[32px] mt-[10px]'>
    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png" alt="flower" className='w-[80px] ' />
    </div>
  <div>
    <p className='text-[34px] mb-[10px] font-[400]'>Made by artist</p>
    <p className='text-[#a45173] text-[17px]'>Each bouquet is carefully crafted by talented artists with love and creativity.</p>
  </div>
</div>

<div className='flex my-[20px] mx-[18px]'>
  <div className='mr-[32px] mt-[10px]'>
    <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png" alt="flower" className='w-[80px]' />
    </div>
  <div>
    <p className='text-[34px] mb-[10px] font-[400]'>Own courier</p>
    <p className='text-[#a45173] text-[17px]'>We deliver your flowers safely and quickly with our own trusted courier service.</p>
  </div>
</div>

  </div>
</section>

<section className='relative h-[400px] my-[60px] flex bg-[url("https://preview.colorlib.com/theme/florist/img/call-bg.jpg")] bg-cover bg-center'>
  <div className='relative z-10 text-center mt-[10%] pl-[20px]'>
    <h2 className='text-white text-5xl font-bold pattern'>
    Let our plants make your
    </h2> <br />
    <p className='text-white text-5xl font-bold pattern'>home more perfect.</p>
  </div>
</section>
    </div>
  )
}

export default Home
