import React from "react";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <video
        src="/videos/plant-video-2.mp4"
        className="plant-bg-video"
        loop
        autoPlay
        muted
      ></video>
      <span className="video-bg"></span>
      <div className="hero-banner-wrapper">
        <div className="hero-banner-box">
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
        </div>
        <div className="hero-banner-box-2">
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h1>{heroBanner.largeText2}</h1>
          <Link href={`/plant/${heroBanner.plant}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>

      {/* 연결 할 대상의 plant or flowerpot*/}
    </div>
  );
};

export default HeroBanner;
