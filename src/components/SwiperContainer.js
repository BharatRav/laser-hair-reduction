'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
export default function SwiperContainer(){
  const data = [{src:"https://demowebsite.codingclave.org/laser-hair-removal/img/image%202.png"},{src:"https://demowebsite.codingclave.org/laser-hair-removal/img/comparison-female-armpit-after-hair-removal-treatment%201.png"}]
    return (
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          pagination={true}
          className='mx-auto md:w-[600px] rounded'
        >
          {data.map((item,index)=>(<SwiperSlide key={index}><Image src={item?.src} width={600} height={600} alt='real_data'/></SwiperSlide>))}
        </Swiper>
      );
}