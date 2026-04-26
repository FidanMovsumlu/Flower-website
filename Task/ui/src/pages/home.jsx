import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountAnimation from "../components/countanimation";
import CounterDecimal from "../components/counterDecimal";
import Slider from "../components/slider";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { t } = useTranslation();
  return (
    <div>
      <div className="video-container">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/flower1.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]  text-[#eb9ac0]  heading">
           {t("hero_title")}
          </h1>
          <h2 className="text-[30px] sm:text-[50px] md:text-[65px] lg:text-[80px] mb-[25px] heading">
           {t("hero_subtitle")}
          </h2>
          <p className="text-[12px] sm:text-[10px] md:text-[18px] font-[500] text-[#f0c1ce]">
            {t("hero_desc1")}
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#f0c1ce]">
            {t("hero_desc2")}
          </p>
          <button className="bg-[#ea6da7] rounded-[50px] px-[25px] py-[10px] mt-[20px] text-[18px] font-bold tracking-[2px]">
            <Link to={"/product"}>{t("shop_now")}</Link>
          </button>
        </div>
      </div>

      <div className="dark:bg-gray-700 ">
       
      <section className="container w-[90%] m-auto py-[50px] "    >
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-[60px]  ">
          <div  className="text-center m-[20px] ">
            <div>
              <p className="text-4xl mb-[20px] font-bold text-[#ea6da7]">
                  <CountAnimation target={2500} />
              </p>
              <p className="text-3xl text-[#474745] dark:text-white">{t("bouquet_sold")}</p>
            </div>
          </div>

          <div className="text-center m-[20px]">
            <div>
              <p className="text-4xl mb-[20px] font-bold text-[#ea6da7]">
                 <CountAnimation target={2800} />
              </p>
              <p className="text-3xl text-[#474745] dark:text-white">{t("happy_clients")}</p>
            </div>
          </div>

          <div className="text-center m-[20px] ml-[25px]">
            <div>
              <p className="text-4xl mb-[20px] font-bold text-[#ea6da7]">
                  <CountAnimation target={8} />
              </p>
              <p className="text-3xl text-[#474745] dark:text-white">{t("years_experience")}</p>
            </div>
          </div>

          <div className="text-center m-[20px]">
            <div>
              <p className="text-4xl mb-[20px] font-bold text-[#ea6da7]">
                <CounterDecimal target={4.8} />
              </p>
              <p className="text-3xl text-[#474745] dark:text-white">{t("user_rating")}</p>
            </div>
          </div>
        </div>
      </section>
</div>

      <div className=" bg-[#FDEDEE] dark:bg-gray-900">
          <div className="py-[50px] mb-[40px]">
            <h2 className="text-center text-[50px] text-[#c59494] font-bold ">
             {t("bestseller")}
            </h2>
            <Slider/>
          </div>
        
      </div>

     

      <section className='relative h-[400px] -[70px] flex bg-[url("https://preview.colorlib.com/theme/florist/img/call-bg.jpg")] bg-cover bg-center'>
        <div className="relative z-10 text-center mt-[6%] pl-[20px]">
          <h2 className="text-white text-5xl font-bold pattern dark:text-black">
           {t("let")}
          </h2>
          <br />
          <p className="text-white text-5xl font-bold pattern mb-[30px] dark:text-black">
           {t("home")}
          </p>
          <button className="bg-[#717c3e] rounded-tr-[40px] rounded-bl-[40px] px-[25px] py-[10px] mt-[20px] text-[18px] font-bold tracking-[2px] text-white">
            <Link to={"/product"}>{t("explore_plants")}</Link>
          </button>
        </div>
      </section>

<div className="dark:bg-black">
 <section className="container w-[90%] m-auto py-[50px]  ">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-[40px] mb-[40px]">
          <div data-aos="fade-right"  className="flex my-[20px] mx-[18px] border-2 border-[#F674A5] p-5 rounded-[20px] shadow-lg transition transform duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="mr-[32px] mt-[10px]">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png"
                alt="flower"
                className="w-[80px]"
              />
            </div>
            <div>
              <p className="text-[34px] mb-[10px] font-[400] dark:text-white">100% Freshness</p>
              <p className="text-[#a45173] text-[17px] font-bold">
                Every flower is picked fresh to keep its natural beauty and
                long-lasting charm.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" className="flex my-[20px] mx-[18px] border-2 border-[#F674A5] p-5 rounded-[20px] shadow-lg transition transform duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="mr-[32px] mt-[10px]">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png"
                alt="flower"
                className="w-[80px] "
              />
            </div>
            <div>
              <p className="text-[34px] mb-[10px] font-[400] dark:text-white">Made by artist</p>
              <p className="text-[#a45173] text-[17px] font-bold">
                Each bouquet is carefully crafted by talented artists with love
                and creativity.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" className="flex my-[20px] mx-[18px] border-2 border-[#F674A5] p-5 rounded-[20px] shadow-lg transition transform duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="mr-[32px] mt-[10px]">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png"
                alt="flower"
                className="w-[80px]"
              />
            </div>
            <div>
              <p className="text-[34px] mb-[10px] font-[400] dark:text-white">Own courier</p>
              <p className="text-[#a45173] text-[17px] font-bold">
                We deliver your flowers safely and quickly with our own trusted
                courier service.
              </p>
            </div>
          </div>

        </div>
      </section>
</div>

<section className="bg-[#FDEDEE] py-[80px] dark:bg-gray-700">
<div className="container w-[90%] m-auto ">
  <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
    <div className="mt-[40px] " data-aos="fade-up">
      <h2 className="text-[50px] text-[#e77b9a]  find">{t("find")} <br />{t("bouquet")}</h2>
      <p className="text-[20px] my-[30px] text-[#525151] dark:text-white">Every flower tells a story of love and care.
Choose <br /> the perfect bouquet to express your feelings. Discover <br /> beautiful flowers for every special moment.</p>

<button className="bg-[#e77b9a]  rounded-tr-[40px] rounded-bl-[40px] px-[25px] py-[10px] mt-[20px]  text-[18px] font-bold tracking-[2px] text-white">
            <a href="">Explore Bouquets</a>
          </button>
    </div>
    
<div className="grid grid-cols-2 gap-4 h-[500px] mt-[20px]" data-aos="fade-up">
  
  
  <div className="grid grid-rows-2 gap-4 h-full">
    <img
      src="/bouquet1.jpg"
      className="w-[300px] h-[250px] object-cover rounded-xl"
    />
    <img
      src="/salam.jpg"
      className="w-[300px] h-[240px] object-cover rounded-xl"
    />
  </div>

  
  <div className="h-full">
    <img
      src="/lily.jpg"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

</div>


  </div>
</div>
</section>
    </div>
  );
}

export default Home;
