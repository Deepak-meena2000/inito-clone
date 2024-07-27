"use client";

import { ImageSrc } from "@/app/constants/image";
import { useConfig } from "@/app/global-context";
import Image from "next/image";

const ImageChart = () => {
  const {
    common: { isMobile },
  } = useConfig();
  return (
    <div className="flex items-center justify-center w-full mt-9 lg:mt-0">
      {isMobile ? (
        <Image
          src={ImageSrc.HORMONES_GRAPH_MOBILE}
          width={320}
          height={320}
          alt="chart"
        />
      ) : (
        <Image
          src={ImageSrc.HORMONES_GRAPH_DESKTOP}
          alt="chart"
          width={320}
          height={320}
          className="w-full h-auto"
        />
      )}
    </div>
  );
};
export default ImageChart;
