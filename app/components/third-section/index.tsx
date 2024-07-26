import styles from "./index.module.css";
import Image from "next/image";
const ThirdSection = () => {
  return (
    <div className={styles.mainSection}>
      <div className="flex flex-col gap-3 lg:gap-5">
        <h1 className="text-[30px] leading-[35px] font-bold lg:text-4xl lg:w-1/2 lg:mx-auto my-0">
          The only fertility kit you will ever need
        </h1>
        <p className="lg:w-[60%] lg:mx-auto">
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation:{" "}
          <strong>PdG (urine metabolite of progesterone).</strong>
        </p>
      </div>
      <div className="flex flex-col gap-3 lg:gap-5">
        <h1 className="text-xl leading-[30px] font-bold lg:text-3xl lg:w-1/2 lg:mx-auto my-0">
          What makes Inito different?
        </h1>

        <p className="lg:w-[60%] lg:mx-auto">
          Inito is the only fertility monitor that measures all{" "}
          <strong>4 hormones</strong> on a <strong>single test strip</strong>,
          showing you a full picture of your cycles with results unique to your
          body.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 lg:hidden">
        <Image width={32} height={32} alt="image" src="/icon-trusted.svg" />
        <span className="text-[#112D35] text-xs font-medium">
          TRUSTED BY 20,000+ COUPLES
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 lg:hidden">
        <Image width={32} height={32} alt="image" src="/icon-eligable.svg" />
        <span className="text-[#112D35] text-xs font-medium">
          HSA/FSA ELIGIBLE
        </span>
      </div>
    </div>
  );
};
export default ThirdSection;
