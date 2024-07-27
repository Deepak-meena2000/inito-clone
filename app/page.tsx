import dynamic from "next/dynamic";
import { AccordionItems } from "./components/accordian-section/constant";
import { Header } from "./components/header";
import FirstSection from "./components/main-hero";
const NewsSection = dynamic(() => import("./components/news-section"), {
  ssr: false,
});
const Accordion = dynamic(() => import("./components/accordian-section"), {
  ssr: false,
});
const ThirdSection = dynamic(() => import("./components/third-section"), {
  ssr: false,
});
const PredictComponent = dynamic(
  () => import("./components/predict-component"),
  {
    ssr: false,
  }
);

const SmartSection = dynamic(() => import("./components/smart-section"), {
  ssr: false,
});
const ReviewSection = dynamic(() => import("./components/review-section"), {
  ssr: false,
});
const VideoSection = dynamic(() => import("./components/video-section"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="mt-[60px] lg:mt-20">
        <FirstSection />
        <NewsSection />
        <ThirdSection />
        <PredictComponent />
        <SmartSection />
        <VideoSection />
        <ReviewSection />
        <Accordion items={AccordionItems} />
      </div>
    </main>
  );
}
