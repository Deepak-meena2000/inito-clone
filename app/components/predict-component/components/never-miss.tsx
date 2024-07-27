import Image from "next/image";

const Qualities = [
  {
    icon: "https://cdn.inito.com/inito_website/tick_1.png",
    description: "Estrogen, which rises 3-4 days before ovulation",
  },
  {
    icon: "	https://cdn.inito.com/inito_website/tick_2.png",
    description: "LH, which surges 24-36 hours before ovulation",
  },
  {
    icon: "https://cdn.inito.com/inito_website/tick_3.png",
    description: "PdG, which rises after ovulation",
  },
  {
    icon: "https://cdn.inito.com/inito_website/tick_4.png",
    description: "FSH, to track follicle growth",
  },
];

const NeverMiss = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-7">
      <h1 className="text-[30px] leading-[35px] font-bold lg:text-4xl text-[#112D35] ">
        Never miss a day of your cycle with Inito
      </h1>
      <p className="text-sm font-medium text-[#112D35] ">
        Inito tracks up to 6 fertile days and confirms ovulation by measuring
        all 4 hormones in just 10 minutes:
      </p>
      <div className="flex flex-col gap-3">
        {Qualities.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt="image"
              className="l"
            />
            <p className="text-sm  lg:font-medium text-[#112D35] ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeverMiss;
