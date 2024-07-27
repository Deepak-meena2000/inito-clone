import styles from "./index.module.css";
const VideoSectionData = [
  {
    url: "https://cdn.inito.com/inito_website/step1.mp4",
    text: "Dip the test strip in urine for 15 seconds.",
  },
  {
    url: "https://cdn.inito.com/inito_website/step2.mp4",
    text: "Dip the test strip in urine for 15 seconds.",
  },
  {
    url: "https://cdn.inito.com/inito_website/step3.mp4",
    text: "Dip the test strip in urine for 15 seconds.",
  },
  {
    url: "https://cdn.inito.com/inito_website/step4.mp4",
    text: "Dip the test strip in urine for 15 seconds.",
  },
];

const VideoSection = () => {
  return (
    <section className={styles.mainContainer}>
      <div className="flex flex-col gap-4 w-full lg:w-1/2 mb-12 lg:mb-0 lg:mt-[10%]">
        <h1 className="text-center lg:text-left text-[30px] leading-[35px] font-bold lg:text-4xl text-[#112D35] ">
          A fertility lab at your fingertips
        </h1>
        <p className="text-xs  font-normal text-[#112D35]">
          Easy-to-read fertility diagnostic results directly on your iPhone*, in
          just 10 minutes.
        </p>
        <p className="hidden lg:block text-xs  font-normal text-[#A0ABAE]">
          * The Inito Fertility Monitor currently supports iPhone 7 and up.
          Android phones are not supported at the moment.
        </p>
      </div>
      <div className={styles.videoSectionGrid}>
        {VideoSectionData.map((item: any, index: number) => {
          return (
            <div
              className="relative flex flex-col gap-4 w-full h-full"
              key={index}
            >
              <video
                autoPlay
                muted={true}
                loop={true}
                playsInline
                className="w-full h-full rounded-2xl"
              >
                <source src={item.url} type="video/mp4" />
              </video>
              <div className="flex items-center gap-3">
                <div className={styles.videoNumber}>{index + 1}</div>
                <p className="text-center text-base text-[#112D35] font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoSection;
