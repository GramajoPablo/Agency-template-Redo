import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const services = [
    {
      title: 'Branding',
      description: 'Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.',
    },
    {
      title: 'Development',
      description: 'Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.',
    },
    {
      title: 'Strategy',
      description: 'Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.',
    },
    {
      title: 'Digital Marketing',
      description: 'We help businesses grow by leveraging the power of digital marketing.',
    },
  ];
        <div className="relative pl-14">
          <div className="absolute top-0 ml-4 transform -translate-y-12 z-10 flex items-center space-x-4">
            <div className="swiper-button-prev">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={2.5}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{ width: '100%' }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-10 rounded-lg shadow-lg transition-all duration-300 folded-corner ${
                    hoveredIndex === index ? 'bg-[#FFFF04]' : 'bg-[#202D17]'
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2
                    className={`text-2xl font-semibold mb-4 ${
                      hoveredIndex === index ? 'text-[#202D17]' : 'text-[#F9FAEF]'
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-[#202D17]' : 'text-[#F9FAEF]'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
 
 
};

export default ServicesSection;