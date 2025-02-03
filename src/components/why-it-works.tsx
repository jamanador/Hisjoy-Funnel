export function WhyItWorks() {
  return (
    <section className=" mx-auto secGap  max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-7xl ">
      <h2 className="title">Why It Works</h2>
      <h2 className="mx-auto max-w-[65ch] text-pretty px-2 pb-8 text-center font-semibold leading-relaxed md:text-lg">
      Harness the Power of Nature’s Best Ingredients
      </h2>
      <div className="mx-auto max-w-7xl   mt-2 grid items-center gap-8 lg:grid-cols-2 px-5">
        <img
          className=" rounded-lg object-cover  h-full object-center lg:row-span-2  "
          src="/images/img-why-it-works-section.png"
          alt=""
        />
        <div>
          <h3 className="pb-2 text-xl font-bold sm:text-3xl lg:pb-4">
            Advanced Urinary Formula
          </h3>
          <p className="text-pretty leading-relaxed">
            is expertly crafted to provide comprehensive support for bladder
            health and urinary function. This premium, doctor- formulated blend
            combines clinically supported ingredients that work synergistically
            to enhance bladder control and promote urinary comfort.
          </p>
        </div>
        <div className="lg:col-start-2">
          <h3 className="pb-2 text-xl font-bold sm:text-3xl lg:pb-4">
            Doctor Formulated and Premium Ingredients
          </h3>
          <p className="text-pretty leading-relaxed">
            Our formula is developed by leading health professionals, ensuring
            that each component is of the highest quality and efficacy. We
            utilize premium ingredients carefully selected based on rigorous
            scientific research and clinical studies.
          </p>
        </div>
      </div>
    </section>
  );
}
