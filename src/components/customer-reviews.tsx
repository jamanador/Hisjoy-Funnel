import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: "Sarah k.",
    isVerified: true,
    ratings: 5,
    title: "Life-Changing Convenience!",
    review:
      "The pricing is fair, and the service is top-notch. Finally, a healthcare solution that actually works! Highly recommend!",
    img: "/images/testimonial-1.jpg",
    day: "12 Hours",
  },
  {
    user_name: "John M.",
    isVerified: true,
    ratings: 5,
    title: "Affordable & Reliable Healthcare",
    review:
      "The service was quick, easy, and reliable. No hassle, no long waits—just exactly what I needed. Highly recommended.",
    img: "/images/testimonial-2.jpg",
    day: "3 Days",
  },
  {
    user_name: "Emily C.",
    isVerified: true,
    ratings: 5,
    title: "Fast, Private, and Effective!",
    review:
      "No waiting rooms, no awkward conversations—just great service and fast delivery. Highly recommend!",
    img: "/images/testimonial-3.jpg",
    day: "4 Days",
  },
  {
    user_name: "Daniel H.",
    isVerified: true,
    ratings: 5,
    title: "Can’t Believe it was That Easy!",
    review:
      "Can’t believe it was that easy! The process was exactly as described. I would highly recommend.",

    img: "/images/testimonial-4.jpg",
    day: "7 Days",
  },
] as const;

export function Reviews() {
  return (
    <section className="relative mx-auto max-w-6xl space-y-2 p-4 text-center lg:p-6 my-6">
      <p className="mx-auto max-w-[65ch] text-balance text-center text-2xl font-black leading-snug text-black md:text-[39px] lg:text-4xl">
        Real People, Real Results

      </p>
      {/* <p className="mx-auto text-sm font-semibold leading-relaxed md:text-base lg:text-md">
        Hear from Happy customers on how Arthroflex 365 Formula improved their life
      </p> */}
      <ul className="divide-y divide-gray-200 text-start md:pt-5">
        {reviews.map(
          ({ title, review, ratings, user_name, img, day }, index) => (
            <li
              key={title + index}
              className="grid items-start gap-4 py-6 md:grid-cols-[auto_1fr] md:gap-8"
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
                {/* <p className="col-span-2 flex items-center md:py-1 text-[12px]">
                  <IoIosCheckmark className="size-6 text-[#1f8e2a]" /> I
                  recommend this product
                </p> */}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="flex items-center">
                    {Array.from({ length: ratings }).map((_, index) => (
                      <IoMdStar
                        className="size-5 text-[#e5c729] md:size-6 lg:size-7"
                        key={`star${index}`}
                      />
                    ))}
                  </span>
                  <span className="opacity-80">{day} ago</span>
                </div>
                <p className="text-base font-semibold sm:text-lg">{title}</p>
                <p className="text-sm sm:text-base">{review}</p>
                {/* <p className="text-xs sm:text-sm">
                Review left on: Nitric Oxide Organic Beets Single-Serve Packs
              </p> */}
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
