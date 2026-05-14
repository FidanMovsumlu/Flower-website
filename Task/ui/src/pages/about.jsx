import React, { useEffect } from 'react'
import OurTeam from '../components/ourteam'
import VideoSection from '../components/videoSection'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
   const { t } = useTranslation();
  return (
    <div>
<div  className="bg-[url('https://i.pinimg.com/736x/1c/f8/63/1cf863e1f9efe1dd707a7bb9576816dc.jpg')] 
             bg-cover bg-center bg-no-repeat 
             w-full h-screen">
       
<div className="absolute inset-0 bg-black/40"></div>
        <div className="content">
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]  text-[#eb9ac0]  heading">
          {t("whoWeAre")}
          </h1>
          <h2 className="text-[30px] sm:text-[50px] md:text-[65px] lg:text-[60px] mb-[25px] heading">
            {t("mission")} <br /> {t("mission1")}
          </h2>
          
          
          <button className="bg-[#ea6da7] rounded-[50px] px-[25px] py-[10px] mt-[20px] text-[18px] font-bold tracking-[2px]">
            <Link to={"/product"} >{t("shopNow")}</Link>
          </button>
        </div>
      </div>

     <section className="bg-[#ca93a3] py-[40px]  dark:bg-gray-700" data-aos="fade-up"  data-aos-duration="1200"
    data-aos-delay="100">
<div className="container w-[90%] m-auto ">
  <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
    <div className="mt-[40px]" >
      <h2 className="text-[50px] text-[#f1dbe1]  find">{t("aboutTitle")}</h2>
      <p className="text-[20px] my-[30px] text-[#dcdada]">{t("aboutText")}</p>

<button className="bg-[#895d6a] text-[#f1dbe1] rounded-tr-[40px] rounded-bl-[40px] px-[25px] py-[10px] mt-[20px]  text-[18px] font-bold tracking-[2px] text-white">
            <Link to={"/contact"}>{t("contactUs")}</Link>
          </button>
    </div>
    
<div className="  h-[500px] mt-[20px] ml-[40px]">
  <img src="https://i.pinimg.com/736x/ef/fb/66/effb66e54952e73c46f288eec3477061.jpg" alt="shop" className='rounded-[20px] h-[500px] w-[500px]'/>
</div>
  </div>
</div>
</section>



<section data-aos="fade-up"  data-aos-duration="1200"
    data-aos-delay="100">
  <OurTeam/>
</section>

 <section data-aos="fade-up"  data-aos-duration="1200"
    data-aos-delay="100" className='relative h-[400px] my-[70px] flex bg-[url("https://cdn.shopify.com/s/files/1/1252/1803/files/ExpressDelivery-Desktop_1.jpg?v=1721097269")] bg-cover bg-center'>
        <div className="relative z-10 text-center mt-[6%] pl-[20px]">
          <h2 className="text-[#52A584] text-5xl font-bold pattern mt-[20px]">
          {t("deliveryTitle")} <br /> <br />{t("deliveryTitle1")}
          </h2>
      <VideoSection/>
        </div>
      </section>
  

      </div>
  
  )
}

export default About
