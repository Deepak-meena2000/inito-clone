import Link from "next/link";
import styles from "../index.module.css";
import Image from "next/image";
const WhySmart = () => {
  return (
    <div className={`${styles.whySmartContainer}`}>
      <div className="flex flex-col gap-5 lg:gap-7 my-[2em] mx-7 lg:mx-0 lg:my-10">
        <h1 className="text-[30px] leading-[35px] font-bold lg:text-4xl text-[#112D35] ">
          Get charts and actual values of your hormones
        </h1>
        <p className="text-base  font-normal lg:font-medium text-[#112D35]">
          Most ovulation kits have a set value or a threshold, making them
          likely to give a false read if your hormones fall outside the average
          range.
        </p>
        <p className="text-base rounded-3xl  font-normal lg:font-medium text-[#112D35] ">
          Inito measures real values of your hormones to personalize results to
          the unique you.
        </p>
        <Link
          href="/"
          className="lg:hidden rounded-3xl bg-[#1F94AA] text-center text-white text-base font-medium uppercase py-2 px-8 w-fit m-auto lg:m-0 "
        >
          <span>Get the Inito kit</span>
        </Link>
      </div>
      <div className="w-full ">
        <Image
          src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png"
          alt="get charts and actual values"
          width={320}
          height={320}
          className="w-full h-auto rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default WhySmart;
