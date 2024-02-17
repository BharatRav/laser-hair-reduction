import BreadChip from "@/components/BreadChip";
import Hero from "@/components/HomePage/HeroSection";
import ServiceAndBenefits from "@/components/HomePage/ServiceAndBenefits";
import Treatments from "@/components/HomePage/Treatments";
import TopHeader from "@/components/TopHeader/TopHeader";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div>
        <TopHeader />
        <Hero/>
        <ServiceAndBenefits/>
        <Treatments/>
        <BreadChip/>
      </div>
    </div>
  );
}
