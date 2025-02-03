const Ingredients = () => {
  const ingredients = [
    { img: "/images/Ing1.png" },
    { img: "/images/Ing2.png" },
    { img: "/images/Ing3.png" },
    { img: "/images/Ing4.png" },
    { img: "/images/Ing5.png" },
    { img: "/images/Ing6.png" },
  ];
  return (
    <section className="secGap mx-auto max-w-7xl">
      <h2 className="text-balance px-1 pb-4 text-center text-[22px] sm:text-2xl font-black md:text-4xl  my-3 md:my-[4] lg:my-5">
        <span className=" text-[#B11E54]">NATURES BEST INGREDIENTS</span>
        <br />
        <span>Harness the Power of the highest quality </span>
       <span className=" md:block ">ingredients</span>
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ingredients.map(({ img }, index) => {
            return (
              <img
                key={index}
                src={img}
                alt=""
                className="z-10 mx-auto rounded-2xl border-white object-cover sm:max-w-[420px] md:max-w-full"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
