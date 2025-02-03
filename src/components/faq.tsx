import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDown } from "react-icons/io5";

const faqs = [
  {
    question: "Why is ArthroFlex 365 superior to other joint support supplements?",
    answer:
      "ArthroFlex 365 is doctor-formulated and includes clinically supported ingredients like Glucosamine, MSM, Chondroitin, Curcumin, and Boswellia Serrata, proven to enhance joint mobility, reduce stiffness, and relieve discomfort. It also features Black Pepper Extract to ensure maximum absorption of these nutrients, making the formula faster and more effective. Please refer to the Why It Works section for detailed clinical results.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "Most users report noticeable relief within 7–14 days, with full benefits experienced after consistent use for 6–12 weeks.",
  },
  {
    question: "Is ArthroFlex 365 effective for severe joint issues?",
    answer:
      "Yes! ArthroFlex 365 contains clinically supported ingredients like Glucosamine, MSM, and Chondroitin to address even advanced joint concerns, such as stiffness, discomfort, and reduced mobility.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "ArthroFlex 365 is made with natural, clinically supported ingredients and is generally well-tolerated. However, if you have specific medical conditions or allergies, it’s best to consult your doctor before use.",
  },
  {
    question: "When is the best time to take ArthroFlex 365?",
    answer:
      "For best results, we recommend taking 2 capsules daily with a meal, as the nutrients work better when absorbed with food.",
  },
  {
    question: "Can I take more or less than the recommended dose?",
    answer:
      "It’s always best to follow the recommended dosage for optimal results. However, if you feel adjustments are necessary, we advise consulting with your healthcare provider before making any changes to your dosage.",
  },
  {
    question: "What if ArthroFlex 365 doesn’t work for me?",
    answer:
      "We’re confident in the effectiveness of our formula, but if you’re not satisfied, we offer a 90-day, no-questions-asked return policy. Simply contact us for a full refund.",
  },
  {
    question: "Can I take ArthroFlex 365 if I’m already on joint pain medication?",
    answer:
      "If you are currently taking medications or have underlying conditions, consult with your healthcare provider before adding ArthroFlex 365 to your routine.",
  },
  {
    question: "How does Black Pepper Extract enhance the effectiveness of the other ingredients?",
    answer:
      "Black Pepper Extract is a key ingredient that improves the bioavailability of other components in the formula, helping your body absorb them more effectively. This means faster and more powerful results for joint support and mobility.",
  },
] as const;

export function Faq() {
  return (
    <section className=" mb-8 md:mb-12 xl:mb-16  mt-7 p-fit">
      <h2 className="text-balance pb-10 text-center text-2xl font-black md:text-[39px] lg:text-4xl text-black ">
        Frequently Asked Questions
      </h2>
      <Accordion.Root
        type="single"
        defaultValue="item-1"
        collapsible
        className="mx-auto max-w-2xl divide-y divide-neutral-dark/25 border-b border-t border-neutral-dark/25"
      >
        {faqs.map(({ question, answer }, index) => (
          <Accordion.Item
            key={`faq${index}`}
            value={`faq${index}`}
            className="overflow-hidden"
          >
            <Accordion.Trigger className="group flex w-full flex-1 items-center justify-between px-2 py-5 text-start leading-none outline-none">
              <span>{question}</span>
              <IoChevronDown className="size-5 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="overflow-hidden px-2 pb-6">
              {answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    
    </section>
  );
}
