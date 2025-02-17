import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: "Ryan Mitchell",
    isVerified: true,
    ratings: 5,
    review:
      "The pricing is fair, and the service is top-notch. Finally, a healthcare solution that actually works! Highly recommend!",
  },
  {
    user_name: "John M.",
    isVerified: true,
    ratings: 5,
    review:
      "I was skeptical about ordering online, but HisJoy exceeded my expectations. The generic Viagra works just as well as the brand-name version—and for a fraction of the cost. It’s been a game-changer for my confidence, and the discreet shipping was a nice touch!",
  },
  {
    user_name: "Sarah P.",
    isVerified: true,
    ratings: 5,
    review:
      "My partner and I decided to give generic Cialis from HisJoy a try, and we couldn’t be happier. The long-lasting effects are amazing—no more planning everything to the minute. It’s affordable and effective, and the whole process was so easy.",
  },
  {
    user_name: "Daniel H.",
    isVerified: true,
    ratings: 5,
    review:
      "Can’t believe it was that easy! The process was exactly as described. I would highly recommend.",
  },
] as const;

export function CustomerReviews() {
  const [visibleReviews, setVisibleReviews] = useState(1);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px 0px" });


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const section = document.getElementById("reviews-section");

      if (section && scrollPosition > section.offsetTop + 100) {
        setVisibleReviews((prev) =>
          prev < reviews.length ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="reviews-section" className="p-2 my-4 md:my-8">
      <div className="rounded-lg bg-gray-50">
        <div className="p-4 rounded-t-lg text-center">
          {/* Animated Title */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-4 text-center"
          >
            <h3 className="font-bold text-xl text-black mt-5">
              Real People, Real Results
            </h3>
          </motion.div>
        </div>
        <ul className="px-4 py-2 space-y-6">
          {reviews.slice(0, visibleReviews).map(({ review, ratings, user_name, isVerified }, index) => (
            <motion.li
              key={index}
              className={`p-4 rounded-xl text-md bg-gray-100 flex ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="max-w-xl">
                <div className="flex items-center">
                  {Array.from({ length: ratings }).map((_, i) => (
                    <IoMdStar key={i} className="text-white size-5 bg-[#00B67A] mr-2" />
                  ))}
                </div>
                <p className="mt-2 text-gray-700">{review}</p>
                <p className="mt-3 font-semibold text-gray-800 italic flex items-center gap-2 text-sm">
                  - {user_name}{" "}
                  {isVerified && <IoIosCheckmarkCircle className="text-green-600 size-5" />}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
