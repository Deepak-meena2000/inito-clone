import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className={styles.mainContainer}>
      <div className={styles.mainSection}>
        <div className={styles.mainTextContainer}>
          <div className={styles.mainStars}>
            <div className="flex gap-1">
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
          <Image
            width={400}
            height={400}
            alt="mobile image"
            className="block lg:hidden"
            src={"	https://cdn.inito.com/inito_website/v2_main_hero_mobile.png"}
          />
          <Image
            width={750}
            height={700}
            alt="desktop image"
            className="hidden lg:block max-w-[750px] w-[700px]"
            src={"	https://cdn.inito.com/inito_website/v2_main_hero_desktop.png"}
          />
        </div>
      </div>
      <div className="flex lg:hidden">
        <RenderHeroButton />
      </div>
    </section>
  );
};

export default FirstSection;
