import Link from "next/link";
import styles from "../index.module.css";
import Image from "next/image";
const WhySmart2 = () => {
  return (
    <div className={styles.whySmartContainer}>
      <div className="flex flex-col gap-5 lg:gap-7 my-[2em] mx-7 lg:mx-0 lg:my-10">
        <h1 className="text-[30px] leading-[35px] font-bold lg:text-4xl text-[#112D35] ">
          Adapts to your irregular cycle
        </h1>
        <p className="text-base  font-normal lg:font-medium text-[#112D35]">
          Most ovulation kits have a set value or a threshold, making them
          likely to give a false read if your hormones fall outside the average
          range.
        </p>
        <p className="text-base rounded-3xl  font-normal lg:font-medium text-[#112D35] ">
          Every woman is unique, especially with a condition like PCOS or
          Thyroid which can influence hormone levels. Inito measures real values
          of your hormones to personalize results to the unique you.
        </p>
      </div>
      <div className="w-full ">
        <Image
          src="/lady-inito.png"
          alt="get charts and actual values"
          width={320}
          height={320}
          className="w-full h-auto lg:rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default WhySmart2;
