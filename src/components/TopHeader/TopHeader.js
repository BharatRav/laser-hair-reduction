import Image from "next/image";

export default function TopHeader() {
  return (
    <div className="w-screen bg-[#1B3358] selection:bg-blue-500 sm:rounded-b-none rounded-b-xl">
      <div className="container px-2 py-3 mx-auto text-white flex flex-row justify-around">
        <div>
          <p className="md:text-lg">
            <strong className="">Free Consultation!</strong> Limited Time Offer
          </p>
        </div>
        <div className="md:inline-flex gap-2 hidden cursor-pointer">
          <Image src="https://demowebsite.codingclave.org/laser-hair-removal/img/Group%203064.png" width={25} height={20} alt="phone" />
          <p className="md:text-lg">
            <strong>Get A Call Back</strong> from Our Expert
          </p>
        </div>
      </div>
    </div>
  );
}
