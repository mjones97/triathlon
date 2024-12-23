import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
  return (
    <div className="carousel-container pl-6 pb-20">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="carousel-slide text-center">
            <img className="rounded-2xl" src="https://via.placeholder.com/300" alt="Slide 1" />
            <div className="mt-6">
              <p>Text for Slide 1</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide text-center">
            <img className="rounded-2xl" src="https://via.placeholder.com/300" alt="Slide 2" />
            <div className="mt-6">
              <p>Text for Slide 2</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide text-center">
            <img className="rounded-2xl" src="https://via.placeholder.com/300" alt="Slide 3" />
            <div className="mt-6">
              <p>Text for Slide 3</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center items-center gap-6 pt-12">
        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full border border-gray-200 justify-center items-center gap-3 inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </div>
        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full border border-gray-200 justify-center items-center gap-3 inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
