import React from "react";
import shirt1 from "../assets/shirt1.png";

function Hero() {
  return (
    <div id="hero-section" className="hero bg-background lg:h-screen">
      <div className="hero-content flex-col md:flex-row md:px-0 py-12 justify-around gap-0 w-full max-w-full">
        <div className="flex flex-col items-center">
          <img src={shirt1} alt="Shirt" className="w-60 lg:w-80 xl:w-120" />
          <p className="hidden md:flex md:max-w-60 lg:max-w-80 text-center text-sm lg:text-base xl:text-lg">
            Explore our exclusive collection of wave and sunset-inspired tees.
          </p>
        </div>
        <div className="flex flex-col items-center md:max-w-96 lg:max-w-124 xl:max-w-140">
          <p className="text-2xl italic lg:text-3xl xl:text-4xl">
            Dive into Simplicity with
          </p>
          <h1 className="title text-5xl my-7 xl:text-6xl xl:my-10">SimpliSeaTee</h1>
          <p className="text-sm italic text-center lg:text-base xl:text-lg">
            Premium-quality tees that combine comfort, style, and
            simplicity—crafted for everyday wear.
          </p>
          <button className="font-black text-white py-3 px-6 bg-orange rounded-full my-4 btn lg:btn-lg xl:btn-xl">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
