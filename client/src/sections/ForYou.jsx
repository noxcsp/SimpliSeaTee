import React from "react";
import shirt2 from "../assets/shirt2.png";

function ForYou() {
  return (
    <div
      id="fyp-section"
      className="bg-main p-4 flex flex-col items-center text-center lg:flex-row lg:h-screen lg:justify-around"
    >
      <div className="lg:text-start lg:max-w-md xl:max-w-xl">
        <p className="text-3xl font-bold border-b-4 pb-2.5 border-orange lg:text-4xl xl:text-5xl">
          Made for Modern Filipinos
        </p>
        <div className="flex flex-col gap-5 py-4 xl:gap-8 xl:py-6">
          <div className="flex flex-col gap-1.5">
            <p className="fyp-title">Students</p>
            <p className="fyp-text">
              Hot campus hours made comfortable. Style that fits your budget and
              lifestyle.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="fyp-title">Young Pressionals</p>
            <p className="fyp-text">
              From the office to after-hours, versatility that keeps you looking
              sharp and feeling at ease.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="fyp-title">Fashion Enthusiasts</p>
            <p className="fyp-text">
              Wear your personality with designs that inspire and spark
              conversation.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-background rounded-4xl p-4 shadow-[0_0_15px_rgba(0,0,0,0.25)]">
        <img src={shirt2} alt="Shirt" className="w-60 lg:w-90 xl:w-120" />
      </div>
    </div>
  );
}

export default ForYou;
