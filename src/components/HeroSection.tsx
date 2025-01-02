
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { SecurityCard } from './Ui/SecurrityCard';
import { securityCards } from '../data/SecurityCard';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A2818] to-[#0A0A0A] rounded-b-3xl shadow-2xl"
    >
      <div className="container mx-auto relative z-10 pt-32 pb-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 px-4 lg:px-0">
            <p className="text-white text-sm tracking-wider">
              CYBER SECURITY POWERED BY NEURONUS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              We Detect Your Website's Weak Points Before Hackers Do
            </h1>
            <p className="text-lg  text-white ">
              Don't risk your website's security - let  < br/>
                us audit it and sleep peace
            </p>
          </div>

          {/* Right Slider */}
          <div className=" w-full">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination]}
              className="w-full h-full"
            >
              {securityCards.map((card) => (
                <SwiperSlide key={card.id} className="w-[320px]">
                  {({ isActive }) => (
                    <SecurityCard card={card} isActive={isActive} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};