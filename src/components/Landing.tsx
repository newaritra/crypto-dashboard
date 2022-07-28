import React from "react";
import Card from "./Card";
import { db } from "../data/db";
const Landing: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-landing-bg overflow-auto">
      <div className="trending-assets-container flex mt-56 ml-20 gap-4 items-center">
        <img className="w-4 h-4" src="/activity.png" alt="trending" />
        <p className="text-base font-semibold text-white">TRENDING ASSETS</p>
      </div>
      <div className=" mt-28 ml-20 inline-flex gap-[70px] flex-wrap sm:flex-nowrap">
        {db.map((element, index) => (
          <Card
            key={index}
            logoPath={element.logoPath}
            price={element.price}
            title={element.title}
            popularPairs={element.popularPairs}
            rate={element.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
