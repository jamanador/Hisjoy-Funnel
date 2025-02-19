import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: "Ryan Mitchell",
    isVerified: true,
    ratings: 5,
    title: "Excellent Service and Pricing",
    review:
      "The pricing is fair, and the service is top-notch. Finally, a healthcare solution that actually works! Highly recommend!",
    img: "/images/testimonial4.webp", // Add a male image path
    day: "1 Day",
  },
  {
    user_name: "John M.",
    isVerified: true,
    ratings: 5,
    title: "Exceeded Expectations",
    review:
      "I was skeptical about ordering online, but HisJoy exceeded my expectations. The generic Viagra works just as well as the brand-name version—and for a fraction of the cost. It’s been a game-changer for my confidence, and the discreet shipping was a nice touch!",
    img: "/images/testimonial-2.jpg", // Assuming this is a male image
    day: "3 Days",
  },
  {
    user_name: "Michael T.",
    isVerified: true,
    ratings: 5,
    title: "Highly Recommended",
    review:
      "Can’t believe it was that easy! The process was exactly as described. I would highly recommend.",
    img: "/images/testimonial3.webp", // Add a male image path
    day: "5 Days",
  },
  {
    user_name: "Daniel H.",
    isVerified: true,
    ratings: 5,
    title: "Easy and Effective",
    review:
      "The service was quick, easy, and reliable. No hassle, no long waits—just exactly what I needed. Highly recommended.",
    img: "/images/testimonial-4.jpg", // Assuming this is a male image
    day: "7 Days",
  },
] as const;

export function Reviews() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px 0px" });

  return (
    <section className="relative mx-auto max-w-6xl space-y-2 p-2 text-center lg:p-6 my-6">
      <motion.p
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[65ch] text-balance text-center text-2xl font-black leading-snug text-black md:text-[39px] lg:text-3xl"
      >
        Real People, Real Results
      </motion.p>
      <ul className="divide-y divide-gray-200 text-start md:pt-5">
        {reviews.map(({ title, review, ratings, user_name, img, day }, index) => (
          <motion.li
            key={title + index}
            className="grid items-start gap-4 py-6 md:grid-cols-[auto_1fr] md:gap-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="grid grid-cols-[auto_1fr] grid-rows-2 items-start gap-x-4 md:grid-rows-3">
              <img
                className="row-span-2 row-start-1 h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                src={img}
                alt={user_name}
              />
              <div className="pt-2">
                <h4 className="text-sm font-semibold sm:text-lg">
                  {user_name}
                </h4>
                <div className="flex items-center gap-x-1 text-xs sm:text-sm">
                  <IoIosCheckmarkCircle className="size-4 text-[#1f8e2a]" />
                  <span>Verified Buyer</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="flex items-center gap-x-1">
                  {Array.from({ length: ratings }).map((_, index) => (
                    <IoMdStar
                      className="size-5 text-white  bg-[#00B67A] gap-x-2"
                      key={`star${index}`}
                    />
                  ))}
                </span>
                <span className="opacity-80">{day} ago</span>
              </div>
              <p className="text-base font-semibold sm:text-lg">{title}</p>
              <p className="text-[12px] sm:text-[14px]">{review}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
