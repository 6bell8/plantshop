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

      <div>
        {" "}
        <Link href="/product/ID">
          <button type="button">button 텍스트</button>
        </Link>
        <div className="desc">
          <h5>description</h5>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
