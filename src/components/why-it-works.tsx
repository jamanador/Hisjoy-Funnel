export function WhyItWorks() {
  return (
    <section className=" mx-auto secGap  max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-7xl ">
      <h2 className="title">Why It Works</h2>
      <h2 className="mx-auto max-w-[65ch] text-pretty px-2 pb-8 text-center font-semibold leading-relaxed md:text-lg">
        Science-backed nutrients and natural anti-inflammatories support joint health.
      </h2>
      <div className="mx-auto max-w-7xl   mt-2 grid items-center gap-8 lg:grid-cols-2 px-5">
        <img
          className="rounded-lg object-cover  object-center lg:row-span-2  "
          src="/images/whyitwork.png"
          alt=""
        />
        <div>
          <h3 className="pb-2 text-xl font-bold sm:text-3xl lg:pb-4">
            ARTHRO FLEX 365
          </h3>
          <p className="text-pretty leading-relaxed">

            Arthro Flex 365 is formulated with a synergistic blend of joint-supporting nutrients, combining the latest scientic research with natural anti-inammatory botanicals to promote optimal joint health and mobility..
          </p>
        </div>
        <div className="lg:col-start-2">
          <h3 className="pb-2 text-xl font-bold sm:text-3xl lg:pb-4">
            Doctor Formulated and Premium Ingredients
          </h3>
          <p className="text-pretty leading-relaxed">

            Our formula is designed by health professionals with expertise in joint health and inammation management. We use only premium, high-quality ingredients that are backed by clinical studies and rigorous research.
          </p>
        </div>
      </div>
    </section>
  );
}
