import { IoIosCheckmarkCircle } from "react-icons/io";
import { OffersBadge } from "./offers-badge";

const offersings = [
  "Regain Control Over Your Bladder",
  "Minimize Urgent Bathroom Trips",
  "Strengthen Pelvic and Bladder Function for Long-Term Support",
  "Promote Healthy Urinary Tract Function",
  "Enjoy Greater Comfort and Condence in Daily Life",
  "Reduce Nighttime Disruptions for Better Sleep",
] as const;

export function Offerings() {
  return (
    <section className="pt-20 font-semibold">
      <OffersBadge />
      <div>
        <p className="pb-6 text-lg leading-relaxed">
          If bladder problems have you stressed, frustrated, and embarrassed
          then it might be time to try this remedy you can try at home. It’s
          natural, affordable and works day and night.
        </p>
        <ul className="space-y-2 md:text-xl">
          {offersings.map((offering, index) => (
            <li className="flex items-center gap-x-2" key={`offering${index}`}>
              <IoIosCheckmarkCircle className="size-6 text-[#1f8e2a]" />
              <span>{offering}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center pt-10">
        <img
          className="w-64"
          src="/icons/icon-manufacturer.webp"
          alt="manufacturer icons"
        />
      </div>
    </section>
  );
}
