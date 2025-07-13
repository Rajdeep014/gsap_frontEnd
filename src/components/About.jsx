import { useGSAP } from "@gsap/react";
import gsap from "gsap";
<<<<<<< HEAD
import { SplitText } from "gsap/all";
=======
import SplitText from "gsap/SplitText";
>>>>>>> 7a49405c3996bf72acc55155d474300c65d37f09

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
    // <div className="min-h-screen  py-28 mx-auto 2xl:px-0 px-5 container   ">
    //   <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10 md:px-5 px-5 ">
    //     <div className="md:col-span-8">
    //       <p className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">
    //         Best Cocktails
    //       </p>
    //       <h2 className="text-5xl md:text-6xl font-modern-negra max-w-lg ">
    //         Where every detail matters -from muddle to garnish
    //       </h2>
    //     </div>

    //     <div className=" md:col-span-4 space-y-5 ">
    //       <p className="text-2xl mb-5">
    //         Every cocktail we serve is a reflection of our obsession with detail
    //         — from the first muddle to the final garnish. That care is what
    //         turns a simple drink into something truly memorable.
    //       </p>
    //       <div>
    //         <p className="text-5xl font-bold mb-5 text-yellow-200">
    //           4.5
    //           <span className="text-xl text-white">/5</span>
    //         </p>
    //         <p className="text-xl">More than +12000 customers</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="y grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5 md:px-5 px-5">
    //     <div className="md:col-span-3 rounded-3xl overflow-hidden h-72 relative">
    //       <div className="noisy " />
    //       <img
    //         className=" object-cover w-full h-full"
    //         src="/images/abt1.png"
    //         alt="grid-img-1"
    //       />
    //     </div>
    //     <div className="md:col-span-6 rounded-3xl overflow-hidden h-72 relative">
    //       <div className="noisy" />
    //       <img
    //         className=" object-cover w-full h-full"
    //         src="/images/abt2.png"
    //         alt="grid-img-2"
    //       />
    //     </div>

    //     <div className="md:col-span-3 rounded-3xl overflow-hidden h-72 relative">
    //       <div className="noisy" />
    //       <img
    //         className=" object-cover w-full h-full"
    //         src="/images/abt5.png"
    //         alt="grid-img-5"
    //       />
    //     </div>
    //   </div>
    //   <div className=" grid grid-cols-1 xl:grid-cols-12 gap-5 md:px-5 px-5  ">
    //     <div className="md:col-span-8 relative rounded overflow-hidden h-72">
    //       <div className="noisy " />
    //       <img
    //         className="h-full w-full object-cover"
    //         src="/images/abt3.png"
    //         alt="grid-img-3"
    //       />
    //     </div>

    //     <div className="md:col-span-4 relative overflow-hidden h-72">
    //       <div className="noisy" />
    //       <img
    //         className="h-full w-full object-cover"
    //         src="/images/abt4.png"
    //         alt="grid-img-4"
    //       />
    //     </div>
    //   </div>
    // </div>
>>>>>>> 7a49405c3996bf72acc55155d474300c65d37f09
  );
};
export default About;
