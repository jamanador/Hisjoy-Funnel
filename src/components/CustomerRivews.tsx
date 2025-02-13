import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: "Sarah K.",
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
      "The service was quick, easy, and reliable. No hassle, no long waits—just exactly what I needed. Highly recommended.",
  },
  {
    user_name: "Emily C.",
    isVerified: true,
    ratings: 5,
    title: "Fast, Private, and Effective!",
    review:
      "No waiting rooms, no awkward conversations—just great service and fast delivery. Highly recommend!",
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
      <div className="border border-gray-300 rounded-lg">
        <div className="p-4 rounded-t-lg text-center">
          <h3 className="font-bold md:text-xl text-[15px] text-black mt-5">
            Real People, Real Results
          </h3>
        </div>
        <ul className="px-4 py-2 space-y-2">
          {reviews.map(({ title, review, ratings, user_name, isVerified }, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <div className="flex items-center mt-1">
                {Array.from({ length: ratings }).map((_, i) => (
                  <IoMdStar key={i} className="text-yellow-500 size-5" />
                ))}
              </div>
              <p className="mt-2 text-gray-700">{review}</p>
              <p className="mt-3 font-semibold text-gray-800 italic flex items-center gap-2">
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
