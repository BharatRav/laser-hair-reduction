"use client";
export default function QNA() {
  const qnaData = [
    {
      question: "Am I a candidate for Laser Hair Removal?",
      answer:
        "Both men and women seek laser hair removal services to get unwanted hair removed. Hair removal is commonly done on the hairline, eyebrow, top of the nose, Side burns, upper & lower lip, chin, ear lobe, face, neck, nape, shoulders, back, underarm, abdomen, buttocks, pubic area, bikini lines, thighs, breast, arms, legs, hands, and toes.",
    },
    {
      question: "Does Hair Removal Hurt?",
      answer:
        "For most people, laser hair removal does not hurt. Healic uses USFDA-approved pain less laser sessions with a chill tip. However, it all depends on your threshold for pain. Most people say that it feels like snapping a rubber band against the skin. But if youâ€™re overly sensitive to pain, you may experience some minor discomfort.",
    },
    {
      question: "How much does Hair Removal Cost?",
      answer:
        "The cost of laser hair removal varies depending upon the area of the body you want to treat and how many sessions you need. The larger the area, the more time it will require. The amount of time will determine the exact price of treatment.",
    },
    {
      question: "Is Laser Hair Removal Safe?",
      answer:
        "The answer is yes. The Food and Drug Administration approved it as a safe method for hair removal in 1997.",
    },
    {
      question: "How do you prepare for Laser Hair Removal?",
      answer:
        "To prepare for laser hair removal, avoid plucking, waxing, and tanning for six weeks prior to your first treatment. Stop applying any retinol or glycolic acid creams at least 3 days prior to treatment.",
    },
    {
      question: "Can anybody get Laser Hair Removal?",
      answer:
        "Anyone can get laser hair removal, regardless of skin color or hair type. However, people with light skin and dark hair tend to see faster and better results than people with light hair or a darker skin tone.Any man or woman can have the treatments, though pregnant women should wait until after theyâ€™ve given birth to begin their sessions.Tellus facilisis donec blandit massa nibh nunc. Ipsum maecenas lobortis turpis amet volutpat sed. Sit lectus velit ac rutrum. Amet suspendisse est suspendisse dignissim euismod amet lorem amet cursus. Massa turpis vitae porttitor etc.",
    },
  ];
  return (
    <div className="flex flex-col bg-white md:flex-row md:gap-6 py-5 justify-center md:justify-around items-start px-5">
      <div className="md:text-4xl text-2xl font-medium w-full text-center md:w-2/5 py-5">
        <strong className="text-[#F09278]">Answer to Questions</strong>
        <br />
        <string className="text-[#1B3358] md:text-center">FAQs</string>
      </div>

      <div class="grid divide-y divide-neutral-200 mx-auto mt-8 w-full md:max-w-2xl gap-2">
        {qnaData.map((item, index) => (
          <AccordionItem
            index={index + 1}
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

const AccordionItem = ({ question, answer, index }) => {
  if (index < 9) {
    index = `0${index}`;
  }
  return (
    <div class="">
      <details class="group transition-all w-full">
        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>
            <div className="text-[#F09278] text-base font-bold">{index}</div>
            <div className="text-[#1B3358] font-bold">{question}</div>
          </span>
          <span class="group-open:rotate-180 transition-all">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn transition-all">
          {answer}
        </p>
      </details>
    </div>
  );
};
