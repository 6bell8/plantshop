import { React, useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Roulette = () => {
  // const [rolArr, setRolArr] = useState[track:"100"]

  const rolArr = ["1th", "2th", "3th", "4th", "5th", "6th"];
  console.log(rolArr[0]);

  return (
    <div className="roulette-box">
      <TbTriangleInvertedFilled color="deepskyblue" className="rolutte-pin" />
      <div className="roulette">
        <div className="box1">
          <span className="font span1">
            <h4>1번 트랙</h4>
          </span>
          <span className="font span2">
            <h4>2번 트랙</h4>
          </span>
          <span className="font span3">
            <h4>3번 트랙</h4>
          </span>
          <span className="font span4">
            <h4>4번 트랙</h4>
          </span>
          <span className="font span5">
            <h4>5번 트랙</h4>
          </span>
        </div>
        <div className="box2">
          <span className="font span1">
            <h4>line</h4>
          </span>
          <span className="font span2">
            <h4>line</h4>
          </span>
          <span className="font span3">
            <h4>line</h4>
          </span>
          <span className="font span4">
            <h4>line</h4>
          </span>
          <span className="font span5">
            <h4>line</h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
