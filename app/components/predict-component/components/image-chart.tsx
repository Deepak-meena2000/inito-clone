"use client";

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
          src="https://cdn.inito.com/inito_website/hormones_graph_mob.jpg"
          //   fill
          width={320}
          height={320}
          alt="chart"
        />
      ) : (
        <Image
          src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"
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
