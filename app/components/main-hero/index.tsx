"use client";
import { ImageSrc } from "@/app/constants/image";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useConfig } from "@/app/global-context";

const RenderHeroButton = () => {
  return (
    <Link href={`/`} className={styles.howIntoWorksButton}>
      <span className="text-xs lg:text-sm font-medium">
        HOW DOES INITO WORK?
      </span>
    </Link>
  );
};

const FirstSection = () => {
  const {
    common: { isMobile },
  } = useConfig();
  return (
    <section className={styles.mainContainer}>
      <div className={styles.mainSection}>
        <div className={styles.mainTextContainer}>
          <div className={styles.mainStars}>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src={ImageSrc.STAR}
                  width={10}
                  height={10}
                  alt="star"
                />
              ))}
            </div>
            <span className="font-semibold text-[10px] lg:text-[13px] text-black">
              TRUSTED BY 20,000+ COUPLES
            </span>
          </div>
          <h1 className="font-bold text-[30px] leading-[35px] lg:leading-[58px] lg:text-[48px]">
            Track your fertility hormones at home, in 10 minutes
          </h1>
          <h6>
            Get accurate results of{" "}
            <strong>
              Estrogen, LH, PdG (urine metabolite of progesterone) and FSH
            </strong>{" "}
            with Inito, the all-in-one fertility monitor.
          </h6>
          <div className="hidden lg:block">
            <RenderHeroButton />
          </div>
        </div>
        <div className="flex relative -left-[5rem] ">
          {isMobile ? (
            <Image
              width={400}
              height={400}
              priority
              fetchPriority="high"
              alt="mobile image"
              src={ImageSrc.MAIN_HERO_MOBILE}
            />
          ) : (
            <Image
              fetchPriority="high"
              priority
              width={750}
              height={700}
              alt="desktop image"
              className=" max-w-[750px] w-[700px]"
              src={ImageSrc.MAIN_HERO_DESKTOP}
            />
          )}
        </div>
      </div>
      <div className="flex lg:hidden">
        <RenderHeroButton />
      </div>
    </section>
  );
};

export default FirstSection;
