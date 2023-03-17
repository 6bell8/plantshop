import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="plant"
          className="hero-banner-image"
        />
      </div>

      {/* 연결 할 대상의 plant or flowerpot*/}
      <Link href={`/plant/${heroBanner.plant}`}>
        <button type="button">{heroBanner.buttonText}</button>
      </Link>
    </div>
  );
};

export default HeroBanner;
