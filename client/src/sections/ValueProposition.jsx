import React from "react";
import endorser1 from "../assets/endorser1.png";
import endorser2 from "../assets/endorser1.1.png";
import shirt1 from "../assets/shirt1.png";

function ValueProposition() {
  return (
    <div
      id="features-section"
      className="bg-main flex flex-col items-center py-12 px-7 lg:h-screen lg:justify-center"
    >
      <p className="text-2xl font-bold text-center leading-tight md:text-3xl lg:text-4xl xl:text-5xl">
        Tired of choosing between comfort and style?
      </p>
      <p className="text-center leading-tight font-medium my-4 md:max-w-xl lg:text-base lg:max-w-2xl xl:text-xl xl:max-w-3xl">
        We know the struggle. Plain cottons shirts can be boring and irritating
        on hot days. That's why we created SimpliSeaTee.
      </p>
      <div className="gap-6 flex justify-around flex-col md:flex-row md:mt-10 md:w-full ">
        <div className="card w-68 shadow-[0_0_15px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105 md:w-56 lg:w-66 xl:w-100">
          <figure className="bg-background h-68 md:h-56 lg:h-68 xl:h-100">
            <img
              src={endorser1}
              alt="model"
              className="transition duration-500 ease-in-out transform hover:scale-110"
            />
          </figure>
          <div className="p-4 card-body md:p-2.5 xl:p-4">
            <h2 className="card-title xl:text-2xl">Breathable Fabric</h2>
            <p className="text-neutral-400 font-medium xl:text-xl">
              Made with lightweight, airy material that keeps you cool and
              comfortable all day.
            </p>
          </div>
        </div>
        <div className="card w-68 shadow-[0_0_15px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105 md:w-56 lg:w-66 xl:w-100">
          <figure className="bg-background h-68 md:h-56 lg:h-68 xl:h-100">
            <img
              src={shirt1}
              alt="shirt"
              className="transition duration-500 ease-in-out transform hover:scale-110"
            />
          </figure>
          <div className="p-4 card-body md:p-2.5 xl:p-4">
            <h2 className="card-title xl:text-2xl">Minimalist Designs</h2>
            <p className="text-neutral-400 font-medium xl:text-xl">
              Unique geometric patterns that resonates the calm and beauty of
              the sea.
            </p>
          </div>
        </div>
        <div className="card w-68 shadow-[0_0_15px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105 md:w-56 lg:w-66 xl:w-100">
          <figure className="bg-background h-68 md:h-56 lg:h-68 xl:h-100">
            <img
              src={endorser2}
              alt="model"
              className="transition duration-500 ease-in-out transform hover:scale-110"
            />
          </figure>
          <div className="p-4 card-body md:p-2.5 xl:p-4">
            <h2 className="card-title xl:text-2xl">Premium Quality & Durability</h2>
            <p className="text-neutral-400 font-medium xl:text-xl">
              Crafted to withstand everyday wear while maintaining softness and
              shape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValueProposition;
