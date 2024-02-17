import Image from "next/image";

export default function BreadChip() {
  const data = [
    { src: "https://demowebsite.codingclave.org/laser-hair-removal/img/upper%20lip.png", title: "Upper Lip" },
    { src: "https://demowebsite.codingclave.org/laser-hair-removal/img/under%20arm.png", title: "Under Arm" },
    { src: "https://demowebsite.codingclave.org/laser-hair-removal/img/female-lips.png", title: "Chin" },
    { src: "https://demowebsite.codingclave.org/laser-hair-removal/img/young-beautiful-woman-with-perfect-body-underwear-posing-gradient-background.png", title: "Full Body" },
  ];
  return (
    <div className="flex overflow-x-scroll flex-row gap-4 justify-center md:gap-12 py-6 container mx-auto">
      {data.map((item, index) => {
        return <Chip key={index} src={item?.src} title={item.title} />;
      })}
    </div>
  );
}

function Chip({src,title}){
    return <div className="flex gap-4 md:flex-row flex-col items-center justify-center"><Image width={60} height={60} src={src} className="rounded-full"/>
    <p className="capitalize">{title}</p></div>
}
