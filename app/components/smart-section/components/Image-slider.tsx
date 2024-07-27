"use client";
import { useConfig } from "@/app/global-context";
import styles from "../index.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const Images = ["/image-swiper1.svg"];

const ImageSlider = () => {
  const {
    common: { isMobile },
  } = useConfig();

  const ImageSwiper = () => {
    return (
      <div>
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
          allowTouchMove={false}
        >
          {Images.map((image: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative">
                  <Image
                    src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg"
                    width={200}
                    height={120}
                    alt="inito tracks everything"
                    className="w-full min-h-[450px]"
                  />
                  <div className="absolute top-[10%] ">
                    <Image
                      src="/image-swiper1.svg"
                      width={isMobile ? 360 : 500}
                      height={120}
                      alt="inito tracks everything"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };

  return (
    <div>
      <div className=" p-5">
        <ImageSwiper />
      </div>
    </div>
  );
};
export default ImageSlider;
