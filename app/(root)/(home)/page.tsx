import BgArrow from "@/components/shared/bg-arrow";
import React from "react";

function Homepage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[60vh] items-center justify-center">
        <h1 className="max-w-2xl text-center font-creteRound text-3xl md:text-4xl lg:text-5xl">
          Taking control pf your dailiy life is easy when you know how!
        </h1>
        <BgArrow />
      </div>
      <h2 className="section-title text-center font-creteRound text-4xl">
        <span>Recent posts</span>
      </h2>
    </div>
  );
}

export default Homepage;
