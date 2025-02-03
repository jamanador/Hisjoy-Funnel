import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDown } from "react-icons/io5";

const faqs = [
  {
    question:
      "Why is ArthroFlex 365 superior to other joint support supplements?",
    answer:
      "ArthroFlex 365 is doctor-formulated and includes clinically supported ingredients like Glucosamine, MSM, Chondroitin, Curcumin, and Boswellia Serrata, proven to enhance joint mobility, reduce stiffness, and relieve discomfort. It also features Black Pepper Extract to ensure maximum absorption of these nutrients, making the formula faster and more effective.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "For optimal results, we recommend taking 2 capsules at bedtime with a snack, or as directed by your healthcare provider. This helps support bladder function overnight and reduces the need for frequent bathroom trips.",
  },
  {
    question:
      "Is ArthroFlex 365 effective for severe joint issues?",
    answer:
      "Many users begin to notice improvements within 2-4 weeks of consistent use. However, for best results, we recommend taking the formula for at least 12 weeks to fully experience the benefits of improved bladder control and reduced urgency.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "It’s always best to follow the recommended dosage for the best results. However, if you feel adjustments are necessary, we advise consulting with your healthcare provider before making any changes to your dosage.",
  },
  {
    question: "When is the best time to take ArthroFlex 365?",
    answer:
      "We’re confident in the effectiveness of our formula, but if you’re not satisfied, we offer a 90-day, no-questions-asked return policy. Simply contact us for a full refund.",
  },
  {
    question:
      "Can I take more or less than the recommended dose?",
    answer:
      "If you’re currently taking medications or have any medical conditions, we recommend speaking with your healthcare provider before adding any supplements to your routine to ensure there are no potential interactions.",
  },
  {
    question:
      "What if ArthroFlex 365 doesn’t work for me?",
    answer:
      "Piperine is a key ingredient that improves the bioavailability of the other components in the formula, helping your body absorb them more effectively. This means faster and more powerful results for bladder health and urinary function.",
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
