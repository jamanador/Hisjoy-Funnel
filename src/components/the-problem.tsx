import { IoIosCloseCircle } from "react-icons/io";
import { config } from "../config";

export function TheProblem() {
  return (

    <section className="p-fit mx-auto mt-14 lg:mt-20 xl:mt-24 max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-7xl">
      <h2 className="title">The Problem</h2>
      <p className="mx-auto max-w-[65ch] text-pretty px-2 pb-4 lg:pb-0 text-center font-meduim leading-relaxed md:text-lg ">
      Everyday Joint Struggles: Managing Pain, Inflammation, and Aging.
      </p>
      <div className="grid gap-6 mt-1 md:mt-0 lg:gap-8 lg:grid-cols-2 lg:items-center justify-center items-center">
        <img
          className="rounded-lg w-full md:w-[100%] h-full md:h-[75%] mx-auto"
          src="/images/problemartho.png"
          alt="problem section image"
        />
        {/* </div> */}
        <ul className="space-y-4 text-start md:space-y-6 ">
          {config.problems.map((problem) => (
            <li
              key={problem}
              className="flex items-center gap-x-2 text-pretty leading-relaxed"
            >
              <span>
                <IoIosCloseCircle className="text-maroon size-7 md:size-9" />
              </span>
              <p className="text-sm sm:text-md md:text-xl">{problem}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
}
