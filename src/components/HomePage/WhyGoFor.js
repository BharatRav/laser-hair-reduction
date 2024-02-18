"use client";
import Image from "next/image";
import clsx from 'clsx'

export default function WhyGoForLaser() {
  const data = [
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/laser1.png",
      points: [
        "Pretty painless",
        "Permanent results",
        "Sessions are 4 to 12 weeks apart. Your skin is well rested.",
        "No in-growths at all",
        "Cost effective. You spend about Rs. 60,000 for a permanent solution.",
      ],
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/laser2.png",
      points: [
        "It hurts so much!",
        "Temporary results",
        "Sessions are 3 to 4 weeks apart. Your skin gets no rest.",
        "Lots of in-growths",
        "Expensive! You spend about Rs. 3.6 lakhs in the long run.",
      ],
    },
  ];
  return (
    <div className="flex container mx-auto px-5 flex-col gap-5 pb-5">
      <div className="text-2xl md:text-4xl text-center">
        <strong className="text-[#F09278] md:text-center font-normal capitalize">
          Why Go For
        </strong>
        <br />
        <string className="md:text-center font-bold capitalize">
          Laser Hair Reduction
        </string>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
        {data.length == 0 ? <p>No data</p> : ""}
        {data.map((item, index) => {
          return <Card key={index} src={item?.src} points={item?.points} index={index} />;
        })}
      </div>
      <div className="w-full flex justify-center">
        <button className="rounded-full py-2 px-5 md:px-20 md:py-3 md:text-xl font-bold text-white bg-gradient-to-r from-blue-900 to-blue-500">
          Book An Appointment Now!
        </button>
      </div>
    </div>
  );
}

const Card = ({ src, points,index }) => {
  return (
    <div className={clsx("flex flex-col gap-5 pb-5 rounded-md w-full md:max-w-80",{"bg-pink-200":index%2==0,"bg-blue-200":index%2==1})}>
      {src && (
        <Image
          src={src}
          width={400}
          height={350}
          alt="laser"
          className="rounded w-full"
        />
      )}
      <div>
      <ul className="list-inside list-disc">
        {points.map((item, index) => (
          <li key={index} className="px-4 my-1">
            {item}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
