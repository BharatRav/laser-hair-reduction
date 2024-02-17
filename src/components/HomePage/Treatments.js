import Image from "next/image";

export default function TreatMents() {
  const treatments = [
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/Full-Face-LHR.jpg",
      title: "Full Face Laser Hair Reduction",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/full-legs-laser-hair.jpg",
      title: "Full Legs Hair Reduction",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/Underarms-Bikini-Laser-Hair.jpg",
      title: "Underarms + Bikini Laser Hair Reduction",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/lower-face-hair.jpg",
      title: "Lower Face Laser Hair Removal",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/chin-laser-hair-reduction.jpg",
      title: "Chin Laser Hair Reduction",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/full-arms-laser-hair-reduction.jpg",
      title: "Full Arms Laser Hair Reduction",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/Full-Back-LHR.jpg",
      title: "Full Back Laser Hair Reduction",
    },
    {
      src: "https://demowebsite.codingclave.org/laser-hair-removal/img/full-body-laser-hair-reduction.jpg",
      title: "Full Body Laser Hair Reduction",
    },
  ];
  return (
    <div className="px-4 container mx-auto">
      <p className="text-[2rem] text-center px-2 py-4">
        Select Laser Hair Removal Treatment
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {treatments.map((treatment, index) => {
          return (
            <Card src={treatment?.src} key={index} title={treatment?.title} />
          );
        })}
      </div>
    </div>
  );
}

function Card({ src, title }) {
  return (
    <div className="p-4 shadow-sm bg-white flex flex-col items-center gap-3 rounded">
      <Image width={1600} height={1200} className="rounded-sm" src={src} />
      <div className="flex flex-col justify-between h-full">
        <p className="font-bold text-lg text-center">{title}</p>
        <button className="rounded bg-pink-300 capitalize text-center w-fit px-4 mx-auto text-white py-1">
          Schedule a Consultantion
        </button>
      </div>
    </div>
  );
}
