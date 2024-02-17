'use client'
import ServiceHighlights from "./ServiceHighlights";

export default function ServiceAndBenefits() {
    const benefits = ["It's Quick & Safe","Prevent Ingrow hairs",
    "Precise treatment",
    "Remove Pigmentation & taning"]
  return (
    <div className="flex flex-col gap-4 bg-white md:pt-16 pt-6">
      <ServiceHighlights 
        arr={[
            { service: "15000+", highlight:"Sessions Delivered" },
            { service: "Safe &", highlight:"Hygienic" },
            { service: "Us FDA", highlight:"approved Technology" },
            { service: "10+", highlight:"Experienced Staff" }
        ]}
      />

      <div className="flex gap-3 md:flex-row flex-col justify-center items-center py-5">
        <p className="text-[#4E5072] font-bold text-4xl md:w-1/2 md:text-center">Benefits of Laser<br/> Hair Removal</p>
        <ul className="list-disc w-fit">{benefits.map((benefit,index)=>{
            return <li className="list-inside" key={index}>{benefit}</li>
        })}</ul>
      </div>
         
      
    </div>
  );
}
