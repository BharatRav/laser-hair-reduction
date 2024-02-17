import Hero from "@/components/HomePage/HeroSection";
import TopHeader from "@/components/TopHeader/TopHeader";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div>
        <TopHeader />
        <div className="body bg-red-600"><Hero/></div>
      </div>
    </div>
  );
}
