// import { Header } from "./components";

import Accordion from "./components/accordian-section";
import { AccordionItems } from "./components/accordian-section/constant";
import { Header } from "./components/header";
import FirstSection from "./components/main-hero";
import NewsSection from "./components/news-section";
import ThirdSection from "./components/third-section";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="mt-[60px] lg:mt-20">
        <FirstSection />
        <NewsSection />
        <ThirdSection />
        <Accordion items={AccordionItems} />
      </div>
    </main>
  );
}
