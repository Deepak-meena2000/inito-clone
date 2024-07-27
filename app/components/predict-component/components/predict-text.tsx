import Link from "next/link";

const PredictTextComponent = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-7">
      <h1 className="text-[30px] leading-[35px] font-bold lg:text-4xl text-[#112D35] ">
        Predict and confirm your ovulation with{" "}
        <span className="image_as_underline">actual</span> data
      </h1>
      <p className="text-base  font-medium lg:font-normal text-[#112D35]">
        Unlike most ovulation tests that only give you "yes/no" results, Inito
        provides <strong>real numerical values</strong> of your fertility
        hormones.<br></br>
      </p>
      <p className="text-base rounded-3xl  font-medium lg:font-normal text-[#112D35] ">
        If you have irregular cycles, actual data is necessary to know{" "}
        <em>exactly</em> when you ovulate, and when is the best time to try to
        conceive.
      </p>
      <Link
        href="/"
        className="rounded-3xl bg-[#1F94AA] text-center text-white text-base font-medium uppercase py-2 px-8 w-fit m-auto lg:m-0 "
      >
        <span>Get the Inito kit</span>
      </Link>
    </div>
  );
};
export default PredictTextComponent;
