'use client'
import BreadChip from "@/components/BreadChip";
import CostCalculator from "@/components/HomePage/CostCalculator";
import Hero from "@/components/HomePage/HeroSection";
import OurCustomersReviews from "@/components/HomePage/OurCustomersReview";
import OurGallery from "@/components/HomePage/OurGallery";
import QNA from "@/components/HomePage/QNA";
import RealResults from "@/components/HomePage/RealResult";
import ServiceAndBenefits from "@/components/HomePage/ServiceAndBenefits";
import Treatments from "@/components/HomePage/Treatments";
import WhyGoForLaser from "@/components/HomePage/WhyGoFor";
import TopHeader from "@/components/TopHeader/TopHeader";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div>
        <TopHeader />
        <Hero />
        <ServiceAndBenefits />
        <Treatments />
        <BreadChip />
        {/* <RealResults /> */}
        <CostCalculator />
        <OurCustomersReviews />
        <div>
          {/* <OurGallery /> */}
        </div>
        <WhyGoForLaser />
        <QNA/>
      </div>
    </div>
  );
}
