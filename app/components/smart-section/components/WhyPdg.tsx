"use client";
import { useConfig } from "@/app/global-context";
import styles from "../index.module.css";
import Image from "next/image";
import { ImageSrc } from "@/app/constants/image";
const WhyPdg = () => {
  const {
    common: { isMobile },
  } = useConfig();
  return (
    <div className={styles.whyPdpContainer}>
      {!isMobile && (
        <Image
          className="absolute -right-9 -top-11"
          src={ImageSrc.BLUE_CALENDAR}
          alt="blue calendar"
          width={120}
          height={120}
        />
      )}
      <h1 className="text-[#1F94AA]  text-base font-semibold">
        Why measure the PdG? (urine metabolite of progesterone)?
      </h1>
      <p className=" text-sm lg:text-base font-normal">
        <strong>Anovulation</strong> (having a menstrual cycle with no egg) is
        actually a common occurrence, affecting 1 in 10 women*
      </p>
      <p className="text-sm lg:text-base font-normal">
        If ovulation occurs, the levels of Progesterone and its urine metabolite
        PdG rise after a few days and stay elevated. Sustained, elevated PdG
        levels after peak fertility indicate a successful ovulation
      </p>

      <p className="text-[#A0ABAE] text-xs font-medium">
        * Source: National Institutes of Health
      </p>
      <p className="text-[#112D35] text-xl font-bold">
        “Inito is all that you need to give you the best chance of conception."
      </p>
      <div className="flex items-center gap-4 text-sm">
        <Image
          src={ImageSrc.DOC_TESTIMONAL_WAGNER}
          alt="doctor image"
          width={isMobile ? 32 : 64}
          height={isMobile ? 32 : 64}
        />
        <div className="flex flex-col">
          <span className="text-[#112D35] font-semibold">
            Dr. Rachel Wagner
          </span>
          <span className="italic text-[#94A0A4]">MD</span>
        </div>
      </div>
    </div>
  );
};

export default WhyPdg;
