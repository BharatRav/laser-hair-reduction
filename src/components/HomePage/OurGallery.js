"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

export default function OurGallery() {
  const data = [
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/image%204.png",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/image%206.png",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/image%207.png",
    },
    { src: "https://demowebsite.codingclave.org/laser-hair-removal/img/image%208.png" },
  ];
  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="md:text-4xl text-2xl font-medium text-center">
        <strong className="text-[#F09278] md:text-center">Our</strong>
        <br />
        <string className="text-[#1B3358] md:text-center">Gallery</string>
      </div>
      <div>
        <Swiper
          centeredSlides={true}
          loop={true}
          pagination={true}
          navigation={true}
          spaceBetween={50}
          slidesPerView={4}
          draggable={true}
          className="mx-auto rounded"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item?.src}
                width={400}
                height={400}
                alt="real_data"
                className="rounded-xl mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
