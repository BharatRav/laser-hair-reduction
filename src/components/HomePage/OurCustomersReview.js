"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function OurCustomersReviews() {
  const data = [
    {
      google_review_img:
        "https://demowebsite.codingclave.org/laser-hair-removal/img/google_img.png",
      user: {
        image:
          "https://demowebsite.codingclave.org/laser-hair-removal/img/review1.webp",
        name: "Kajal",
        review:
          "I had LASER HAIR REDUCTION sessions recently... they provide excellent service.. they use latest technologies which are painless and the staff here are so friendly... especially  Priya she isfabulous!!!!",
      },
    },
    {
      google_review_img:
        "https://demowebsite.codingclave.org/laser-hair-removal/img/google_img.png",
      user: {
        image:
          "https://demowebsite.codingclave.org/laser-hair-removal/img/review2.webp",
        name: "Nandini",
        review:
          "I got my LHR treatment done for the face and neck here by Priya under Dr.Manisha assistance. Although I was scared for the first session, it went very smoothly and without any discomfort.",
      },
    },
    {
      google_review_img:
        "https://demowebsite.codingclave.org/laser-hair-removal/img/google_img.png",
      user: {
        image:
          "https://demowebsite.codingclave.org/laser-hair-removal/img/review1.webp",
        name: "Shivani",
        review:
          "It was very good experience at Healic.They have well experienced doctors and treatment was good and one can see great results with laser hair reduction treatment and even with their lasertoning too..Thanks to Dr.Manisha",
      },
    },
    {
      google_review_img:
        "https://demowebsite.codingclave.org/laser-hair-removal/img/google_img.png",
      user: {
        image:
          "https://demowebsite.codingclave.org/laser-hair-removal/img/review3.webp",
        name: "Riya",
        review:
          "Refered by my friend for laser hair reduction Met the doctor very proffesional treatment Taking laser hair reduction services from few months. Happy with service and treatment Friendly staffand doctors",
      },
    },
    {
      google_review_img:
        "https://demowebsite.codingclave.org/laser-hair-removal/img/google_img.png",
      user: {
        image:
          "https://demowebsite.codingclave.org/laser-hair-removal/img/review4.webp",
        name: "Rajat",
        review:
          "I have undergone laser hair removal for chin and underarms at Healic Clinic. I loved that the entire procedure hardly lasted for an hour, there was hardly any downtime, and the cost of the procedures was also pocket-friendly. This is definitely the best laser hair removal clinic.",
      },
    },
  ];
  return (
    <div className=" container mx-auto px-5 py-5 flex flex-col gap-5">
      <div className="md:text-4xl text-2xl font-medium text-center w-full">
        <strong className="text-[#F09278] md:text-center">See What Our</strong>
        <br />
        <string className="text-[#1B3358] md:text-center">
          Customers Have to Say
        </string>
      </div>
      {/* mobile */}
      <div className="flex flex-col md:flex-row gap-6 md:hidden items-center w-full px-5">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              index={index}
              src={item?.google_review_img}
              user={item?.user}
            />
          );
        })}
      </div>
      {/* tab and laptop */}
      <div className=" hidden md:block">
        <SwiperContainer data={data} slidesPerView={4} />
      </div>
    </div>
  );
}

const Card = ({ src, user }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg w-[400px] h-full shadow-md">
      <Image src={src} width={300} height={100} alt="google review" />
      <div className="rounded-lg h-full flex gap-2 flex-col bg-gray-200 py-4">
        <div className="flex gap-5 justify-start items-center px-2">
          <Image
            src={user?.image}
            width={60}
            height={60}
            className="rounded-full"
            alt="profile"
          />
          <p className="capitalize font-bold text-xl">{user?.name}</p>
        </div>
        {user?.review && (
          <div className="rounded-lg px-5 h-full">
            <p>{user?.review}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const SwiperContainer = ({ data, slidesPerView }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={slidesPerView}
      pagination={true}
      loop={true}
      className="mx-auto rounded"
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} className="shadow-md rounded-sm">
              <Image
                src={item?.google_review_img}
                width={300}
                height={100}
                alt="google review"
              />
              <div className="rounded-lg h-full flex gap-2 flex-col bg-gray-200 py-4 flex-grow min-h-[300px]">
                <div className="flex gap-5 justify-start items-center px-2">
                  <Image
                    src={item?.user?.image}
                    width={60}
                    height={60}
                    className="rounded-full"
                    alt="profile"
                  />
                  <p className="capitalize font-bold text-xl">
                    {item?.user?.name}
                  </p>
                </div>
                {item?.user?.review && (
                  <div className="rounded-lg px-5 h-full">
                    <p>{item?.user?.review}</p>
                  </div>
                )}
              </div>

          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
