"use client";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { ReviewItems } from "./constant";

const ReviewSection = () => {
  return (
    <div className={styles.mainContainer}>
      <Swiper
        className="!pb-9 !lg:pb-14"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {ReviewItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-5 lg:gap-7 bg-[#F7F7FE] p-6 lg:p-9 rounded-2xl lg:rounded-3xl">
              <div className="flex items-center gap-3 lg:gap-4 ">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="https://cdn.inito.com/inito_website/star.png"
                    width={10}
                    height={10}
                    alt="star"
                  />
                ))}
              </div>
              <p className="my-5 font-normal leading-5 text-xs lg:text-sm">
                {item.content}
              </p>
              <h1 className="text-lg lg:text-xl font-semibold text-[#0096AD]">
                {item.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
