import React from "react";
import about from "../assets/About.jpg";

function OurStory() {
  return (
    <div
      id="our-story-section"
      className="flex flex-col items-center text-center p-4 md:py-12 lg:flex-row lg:justify-around"
    >
      <div className="hidden w-md my-6 h-52 overflow-hidden rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.25)] lg:flex lg:h-68 xl:w-xl xl:h-84">
        <img src={about} alt="sunset" className="w-full object-cover h-full" />
      </div>
      <div className="lg:max-w-md lg:text-start xl:max-w-xl">
        <p className="w-full text-4xl font-bold uppercase border-b-4 border-orange pb-2.5">
          Our Story
        </p>
        <div className="w-full max-w-3xl mx-auto my-6 h-52 overflow-hidden rounded-4xl shadow-[0_0_15px_rgba(0,0,0,0.25)] md:h-68 lg:hidden">
          <img
            src={about}
            alt="sunset"
            className="w-full object-cover h-full"
          />
        </div>
        <p className="fyp-text px-1.5 lg:px-0 lg:mt-4 lg:text-sm xl:leading-8">
          SimpliSeaTee was born from a love of the ocean and the calm of
          sunsets. What started with a simple wave-inspired design has grown
          into a brand that celebrates authenticity, creating timeless tees that
          tell your story.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
