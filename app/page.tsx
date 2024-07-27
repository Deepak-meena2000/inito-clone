// import { Header } from "./components";

import dynamic from "next/dynamic";
import Accordion from "./components/accordian-section";
import { AccordionItems } from "./components/accordian-section/constant";
import { Header } from "./components/header";
import FirstSection from "./components/main-hero";
import NewsSection from "./components/news-section";
// import ReviewSection from "./components/review-section";
import ThirdSection from "./components/third-section";
import PredictComponent from "./components/predict-component";
const ReviewSection = dynamic(() => import("./components/review-section"), {
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
        <ReviewSection />
        <Accordion items={AccordionItems} />
      </div>
    </main>
  );
}
