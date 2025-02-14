import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: "Ryan Mitchell",
    isVerified: true,
    ratings: 5,
    title: "Life-Changing Convenience!",
    review:
      "The pricing is fair, and the service is top-notch. Finally, a healthcare solution that actually works! Highly recommend!",
  },
  {
    user_name: "John M.",
    isVerified: true,
    ratings: 5,
    title: "Affordable & Reliable Healthcare",
    review:
      "I was skeptical about ordering online, but HisJoy exceeded my expectations. The generic Viagra works just as well as the brand-name version—and for a fraction of the cost. It’s been a game-changer for my confidence, and the discreet shipping was a nice touch!",
  },
  {
    user_name: "Sarah P.",
    isVerified: true,
    ratings: 5,
    title: "Fast, Private, and Effective!",
    review:
      "My partner and I decided to give generic Cialis from HisJoy a try, and we couldn’t be happier. The long-lasting effects are amazing—no more planning everything to the minute. It’s affordable and effective, and the whole process was so easy.",
  },
  {
    user_name: "Daniel H.",
    isVerified: true,
    ratings: 5,
    title: "Can’t Believe it was That Easy!",
    review:
      "Can’t believe it was that easy! The process was exactly as described. I would highly recommend.",
  },
] as const;

export function CustomerReviews() {
  return (
    <section className="p-2 my-4 md:my-8">
      <div className="rounded-lg bg-gray-50">
        <div className="p-4 rounded-t-lg text-center">
          <h3 className="font-bold md:text-xl text-[18px] text-black mt-5">
            Real People, Real Results
          </h3>
        </div>
        <ul className="px-4 py-2 space-y-2">
          {reviews.map(({ review, ratings, user_name, isVerified }, index) => (
            <li key={index} className="p-4 rounded-lg text-md">
              {/* <h3 className="text-lg font-semibold text-gray-800">{title}</h3> */}
              <div className="flex items-center mt-1 gap-x-2">
                {Array.from({ length: ratings }).map((_, i) => (
                  <IoMdStar key={i} className="text-white size-5 bg-[#00B67A]" />
                ))}
              </div>
              <p className="mt-2 text-gray-700">{review}</p>
              <p className="mt-3 font-semibold text-gray-800 italic flex items-center gap-2 text-sm">
                - {user_name}{" "}
                {isVerified && <IoIosCheckmarkCircle className="text-green-600 size-5" />}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
