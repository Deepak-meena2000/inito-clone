import styles from "../index.module.css";
import ImageSlider from "./Image-slider";
const TrackDetails = () => {
  return (
    <div className={styles.trackDetailsContainer}>
      <div className={styles.trackDetailsInfoContainer}>
        <h1 className="text-2xl  font-bold lg:text-3xl text-[#112D35]">
          Inito tracks everything so you don’t have to
        </h1>
        <div className="text-[#112D35] text-base font-normal">
          The Inito Fertility Monitor comes with a free easy-to-use App, so you
          can track your fertile days with ease and know exactly when you
          ovulate.<br></br>
        </div>
        <div className="flex flex-col gap-3">
          Our App notifies you for everything:
          <ol className="">
            <li>Your fertility levels</li>
            <li>When to test on the right days</li>
            <li>When you’ve successfully ovulated</li>
            <li>And when to roll into bed!</li>
          </ol>
        </div>
      </div>
      <div className={styles.trackDetailsImageContainer}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default TrackDetails;
