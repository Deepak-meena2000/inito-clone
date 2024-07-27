import Link from "next/link";
import WhyPdg from "./components/WhyPdg";
import styles from "./index.module.css";
import WhySmart from "./components/whySmart";
import TrackDetails from "./components/Track";
import WhySmart2 from "./components/whySmart2";
const SmartSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainSection}>
        <WhyPdg />
        <h1 className="hidden lg:block text-center text-[36px] leading-[50px] font-bold text-[#112D35] max-w-[500px] m-auto ">
          Why Inito is the smarter way to get Pregnent
        </h1>
        <WhySmart2 />
        <TrackDetails />
        <WhySmart />
      </div>
    </div>
  );
};

export default SmartSection;
