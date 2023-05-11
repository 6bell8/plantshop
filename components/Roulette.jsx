import React from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Roulette = () => {
  return (
    <div className="roulette-box">
      <TbTriangleInvertedFilled color="deepskyblue" className="rolutte-pin" />
      <div className="roulette"></div>
    </div>
  );
};

export default Roulette;
