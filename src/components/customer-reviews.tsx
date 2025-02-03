import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { IoIosCheckmark, IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";

const reviews = [
  {
    user_name: "Sarah k.",
    isVerified: true,
    ratings: 5,
    title: "I haven't felt this great in years",
    review:
      "I've been suffering from chronic joint pain for years and tried countless remedies with no relief. However, since taking Arthroflex 365 joint pain and arthritis formula, my pain has significantly decreased and I feel more mobile than ever before. I highly recommend this product to anyone struggling with joint pain",
    img: "/images/testimonial-1.jpg",
    day: "12 Hours",
  },
  {
    user_name: "John M.",
    isVerified: true,
    ratings: 5,
    title: "I was able to assume my normal activites.",
    review:
      "As an active senior, joint pain and stiffness were becoming hindrance to my daily activities. After trying this joing pain and arthritis formula, I was pleasantly surprised to find that my joints felt much more flexible and I was able to resume my normal activities with ease. Arthroflex 365 has been a game-changer for me.",
    img: "/images/testimonial-2.jpg",
    day: "3 Days",
  },
  {
    user_name: "Emily C.",
    isVerified: true,
    ratings: 5,
    title: "The only Joint Pain Supplement I will use",
    review:
      "I was skeptical about trying yet another joint pain supplement, but after hearing so many positive reviews , I decided to give this formula a chance. I'm so glad I did because my joint pain has increased significantly and I feel like my overall mobility has improved. Arthroflex 365 is the only joint pain supplement I will use from now on",
    img: "/images/testimonial-3.jpg",
    day: "4 Days",
  },
  {
    user_name: "Daniel H.",
    isVerified: true,
    ratings: 5,
    title: "It’s a game changer",
    review:
      "I've been dealing with joint pain for years due to my active lifestyle , but Arthroflex 365 Ultra has been a game-changer. Not only has it helped alleviate my pain , but it also seems to have reduced inflammation throughout my body. I would highly recommend this joint pain and arthritis formula to anyone looking for releif.",

    img: "/images/testimonial-4.jpg",
    day: "7 Days",
  },
] as const;

export function CustomerReviews() {
  return (
    <section className="relative mx-auto max-w-6xl space-y-2 p-4 text-center lg:p-6">
      <p className="mx-auto max-w-[65ch] text-balance text-center text-2xl font-black leading-snug text-black md:text-[39px] lg:text-4xl">
        Trusted by Thousands of Customers
      </p>
      <p className="mx-auto text-sm font-semibold leading-relaxed md:text-base lg:text-md">
        Hear from Happy customers on how Arthroflex 365 Formula improved their life
      </p>
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
                <p className="col-span-2 flex items-center text-xs md:py-2 md:text-sm">
                  <IoIosCheckmark className="size-6 text-[#1f8e2a]" /> I
                  recommend this product
                </p>
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
                <div className="flex items-center gap-x-2 text-xs sm:text-sm">
                  Was this review helpful? <BiSolidLike /> 0 <BiSolidDislike />{" "}
                  0
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
