import Image from "next/image";
import styles from "./index.module.css";
const NewsSection = () => {
  const ImagesArray = [
    "https://cdn.inito.com/inito_website/press/Logo_Bloomberg@1x.png",
    "https://cdn.inito.com/inito_website/press/Logo_Forbes_India@1x.png",
    "https://cdn.inito.com/inito_website/press/Logo_The_Week@1x.png",
    "https://cdn.inito.com/inito_website/press/Logo_Washington@1x.png",
    "https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@1x.png",
  ];
  return (
    <div className={styles.mainNewsContainer}>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-[#C4C4C4] text-[10px] lg:text-lg font-bold">
          AS SEEN ON
        </div>
        <div className={styles.imageContainer}>
          {ImagesArray?.map((image: string, index: number) => (
            <Image key={index} src={image} width={150} height={40} alt="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
