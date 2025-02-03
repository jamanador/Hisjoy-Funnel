import { IoIosCloseCircle } from "react-icons/io";
import { config } from "../config";

export function TheProblem() {
  return (

<section className="p-fit mx-auto secGap  max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-7xl  ">
      <h2 className="title">The Problem</h2>
      <p className="mx-auto max-w-[65ch] text-pretty px-2 pb-6 lg:pb-0 text-center font-meduim leading-relaxed md:text-lg ">
      As we age, the intricate network of muscles surrounding the bladder weakens often leading to these problems.
      </p>
      <div className="grid gap-6 mt-2 md:mt-12 lg:gap-8 lg:grid-cols-2 lg:items-center justify-center items-center">
        <img
          className="rounded-lg w-full md:w-[100%] h-full md:h-[95%] mx-auto"
          src="/images/problemartho.png"
          alt="problem section image"
        />
        {/* </div> */}
        <ul className="space-y-4 text-start md:space-y-6 ">
          {config.problems.map((problem) => (
            <li
              key={problem}
              className="flex  items-start gap-x-2 text-pretty leading-relaxed"
            >
              <span>
                <IoIosCloseCircle className="text-maroon size-7 md:size-9" />
              </span>
              <p className=" text-lg sm:text-xl md:text-2xl">{problem}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
}
