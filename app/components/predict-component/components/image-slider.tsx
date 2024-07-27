"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { useConfig } from "@/app/global-context";

const Images = [
  "https://cdn.inito.com/inito_website/ovulation_confirmed.png",
  "https://cdn.inito.com/inito_website/hormone_chart.png",
  "https://cdn.inito.com/inito_website/cycle_day_view.png",
];

const ImageSliderComponent = () => {
  const {
    common: { isMobile },
  } = useConfig();
  return (
    <div className="mt-6 lg:mt-0">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        slidesPerView={1}
        speed={0}
        allowTouchMove={false} // Disable manual swipe
      >
        {Images.map((item: string, index: number) => {
          return (
            <SwiperSlide className={`${isMobile ? "!w-fit" : ""}`} key={index}>
              <div className="lg:bg-[#B4E4F2]  lg:flex justify-center items-center lg:rounded-3xl lg:w-[80%]">
                <Image src={item} width={320} height={320} alt="image" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSliderComponent;
