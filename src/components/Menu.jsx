import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { allCocktails } from "../../contants/index";

const Menu = () => {
  const [activeCocktailId, setActiveCocktailId] = useState(0);

  const totalCocktails = allCocktails.length;
  const goToSlide = (newIndex) => {
    const total = totalCocktails;
    const updatedIndex = (newIndex + total) % total;
    setActiveCocktailId(updatedIndex);
  };

  const currentCocktailId = (index) => {
    return allCocktails[
      (activeCocktailId + index + totalCocktails) % totalCocktails
    ];
  };
  const currentCocktail = currentCocktailId(0);
  const previousCocktail = currentCocktailId(-1);
  const nextCocktail = currentCocktailId(1);

  useGSAP(() => {
    // Animate cocktail image
    gsap.fromTo(
      "#tap",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    // Other animations (optional)
    gsap.fromTo(
      "#tit",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".dis h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".dis p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
      }
    );
  }, [activeCocktailId]);

  return (
    <section className="relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient">
      <img
        className="absolute left-0 -bottom-20 w-1/3 md:w-fit object-contain"
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        className="absolute right-0 -top-40 md:w-fit w-1/4 object-contain"
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <nav className=" grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto ">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === activeCocktailId;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`md:text-3xl text-xl pb-3 border-b-2 cursor-pointer transition-colors font-modern-negra ${
                isActive ? "text-yellow-400" : "text-white"
              }`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col justify-between items-center container mx-auto relative">
        <div className="flex justify-between items-center w-full cursor-pointer">
          <button
            onClick={() => goToSlide(activeCocktailId - 1)}
            className="ext-white hover:text-yellow cursor-pointer transition-colors max-w-36"
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {previousCocktail.name}
            </span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={() => goToSlide(activeCocktailId + 1)}
            className="ext-white hover:text-yellow cursor-pointer transition-colors max-w-36"
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {nextCocktail.name}
            </span>

            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="flex-center mt-10">
          <img
            id="tap"
            src={currentCocktail.image}
            className="object-contain h-[60hv]"
          />
        </div>
        <div className=" flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
          <div className="space-y-4 lg:translate-y-20">
            <p className="">Recipe for:</p>
            <p
              id="tit"
              className="font-modern-negra md:text-6xl text-3xl text-yellow-200 max-w-20"
            >
              {" "}
              {currentCocktail.name}
            </p>
          </div>
          <div className="dis space-y-5 md:max-w-md text-left">
            <h2 className="md:text-5xl text-3xl font-serif">
              {currentCocktail.title}
            </h2>
            <p className="md:text-lg pe-5;md:text-lg pe-5;">
              {" "}
              {currentCocktail.description}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
