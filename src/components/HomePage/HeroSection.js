'use client'
import Form from "./Form";

export default function Hero() {
  const services = ["Advanced tech", "Pain Free", "Exceptional Doctors"];
  return (
    <><div className="relative text-white capitalize bg-banner bg-cover md:bg-left bg-no-repeat md:py-[100px] py-12 w-full max-w-[1560px] md:px-24 px-6 md:flex justify-evenly items-center">
      <div className="md:w-3/5 flex flex-col gap-2">
        <h1 className="font-bold text-4xl leading-10 md:text-[55px] md:leading-[65px]">
          Laser Hair Reduction
        </h1>
        <h3 className="font-semibold text-[18px] md:text-[32px] leading-7 md:leading-[36px]">
          Right At The Comfort Of Your Home
        </h3>
        <div>
          <ul className="list-disc mt-7.5 mb-6 md:mb-10">
            {services.map((service, idx) => {
              return (
                <li
                  key={idx}
                  className="md:text-2xl text-base md:leading-10 font-normal list-inside"
                >
                  <span className="relative -left-2.5">{service}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="font-semibold text-lg md:text-2xl leading-6 md:leading-[34px]">
          Full Body Starting from
        </p>
        <p className="font-semibold text-[34px] md:text-2xl leading-[34px]">
          <strong className="font-bold text-4xl md:text-[64px] md:leading-[69px]">
            &#8377;1,999
          </strong>{" "}
          /Per Session
        </p>
    </div>
   <div className="md:inline-block hidden"><Form/></div>
    </div>
    <div className="md:hidden block"><Form/></div>
    </>
  );
}
