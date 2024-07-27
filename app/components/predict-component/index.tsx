import styles from "./index.module.css";
import PredictTextComponent from "./components/predict-text";
import ImageSliderComponent from "./components/image-slider";
import NeverMiss from "./components/never-miss";
import ImageChart from "./components/image-chart";
const PredictComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainSectionContainer}>
        <div className={styles.firstSectionGrid}>
          <div className={styles.imageContainer}>
            <ImageSliderComponent />
          </div>
          <div className={styles.predictContainer}>
            <PredictTextComponent />
          </div>
        </div>
        <div className={styles.secondSectionGrid}>
          <div className={styles.neverMissSection}>
            <NeverMiss />
          </div>
          <div className={styles.graphSection}>
            <ImageChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictComponent;
