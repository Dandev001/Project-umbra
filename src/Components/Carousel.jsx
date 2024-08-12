import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 6000,
      animationDuration: 900,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}
      <div className="relative w-full px-4 py-3 rounded-lg flex items-center justify-center mx-auto glide-03">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
  <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
    <li className="relative">
      <img
        src="https://Tailwindmix.b-cdn.net/image-05.jpg"
        className="w-full max-w-full max-h-full m-auto"
      />
      <div className="absolute bg-gradient-to-r bg-opacity-80 from-[#111111] inset-0 flex flex-col justify-end items-start p-8 text-white">
        <h1 className="text-lg font-bold mb-4 sm:text-sm sm:mb-3 md:text-2xl md:mb-2">
          Epic Savings
        </h1>
        <button className="px-6 py-2 bg-[#AA08E2] hover:bg-[#5E0683] rounded-full transition text-white sm:px-5 sm:py-1 md:px-4 md:py-1">
          Save Now
        </button>
      </div>
    </li>
    <li className="relative">
      <img
        src="https://Tailwindmix.b-cdn.net/image-01.jpg"
        className="w-full max-w-full max-h-full m-auto"
      />
      <div className="absolute bg-gradient-to-r bg-opacity-80 from-[#111111] inset-0 flex flex-col justify-end items-start p-8 text-white">
        <h1 className="text-lg font-bold mb-4 sm:text-3xl sm:mb-3 md:text-2xl md:mb-2">
          Other Slide Title
        </h1>
        <button className="px-6 py-2 bg-[#AA08E2] hover:bg-[#5E0683] rounded-full transition text-white sm:px-5 sm:py-1 md:px-4 md:py-1">
          Learn More
        </button>
      </div>
    </li>
    <li className="relative">
      <img
        src="https://Tailwindmix.b-cdn.net/image-01.jpg"
        className="w-full max-w-full max-h-full m-auto"
      />
      <div className="absolute bg-gradient-to-r bg-opacity-80 from-[#111111] inset-0 flex flex-col justify-end items-start p-8 text-white">
        <h1 className="text-lg font-bold mb-4 sm:text-3xl sm:mb-3 md:text-2xl md:mb-2">
          Other Slide Title
        </h1>
        <button className="px-6 py-2 bg-[#AA08E2] hover:bg-[#5E0683] rounded-full transition text-white sm:px-5 sm:py-1 md:px-4 md:py-1">
          Learn More
        </button>
      </div>
    </li>
    <li className="relative">
      <img
        src="https://Tailwindmix.b-cdn.net/image-01.jpg"
        className="w-full max-w-full max-h-full m-auto"
      />
      <div className="absolute bg-gradient-to-r bg-opacity-80 from-[#111111] inset-0 flex flex-col justify-end items-start p-8 text-white">
        <h1 className="text-lg font-bold mb-4 sm:text-3xl sm:mb-3 md:text-2xl md:mb-2">
          Other Slide Title
        </h1>
        <button className="px-6 py-2 bg-[#AA08E2] hover:bg-[#5E0683] rounded-full transition text-white sm:px-5 sm:py-1 md:px-4 md:py-1">
          Learn More
        </button>
      </div>
    </li>
    <li className="relative">
      <img
        src="https://Tailwindmix.b-cdn.net/image-01.jpg"
        className="w-full max-w-full max-h-full m-auto"
      />
      <div className="absolute bg-gradient-to-r bg-opacity-80 from-[#111111] inset-0 flex flex-col justify-end items-start p-8 text-white">
        <h1 className="text-lg font-bold mb-2 sm:text-3xl sm:mb-3 md:text-2xl md:mb-1">
          Other Slide Title
        </h1>
        <button className="px-6 py-2 bg-[#AA08E2] hover:bg-[#5E0683] rounded-full text-white sm:px-5 sm:py-1 md:px-4 md:py-1">
          Buy now 
        </button>
      </div>
    </li>
    {/* Add more slides as needed */}
  </ul>
</div>

        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex opacity-5 items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex opacity-10 items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  );
}
