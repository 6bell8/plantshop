import { React, useState } from "react";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { TbTriangleInvertedFilled } from "react-icons/tb";

ChartJS.register(ArcElement, Tooltip, Legend);

const Roulette = () => {
  const [rolutteActive, setRolutteActive] = useState(false);
  const [spinActive, setSpinActive] = useState(false);
  const [guideActive, setGuideActive] = useState(false);
  const [rotationValues, setRotationValues] = useState(
    {
      minDegree: 0,
      maxDegree: 30,
      value: 2,
    },
    {
      minDegree: 31,
      maxDegree: 90,
      value: 1,
    },
    {
      minDegree: 91,
      maxDegree: 150,
      value: 6,
    },
    {
      minDegree: 151,
      maxDegree: 310,
      value: 5,
    },
    {
      minDegree: 211,
      maxDegree: 270,
      value: 4,
    },
    {
      minDegree: 271,
      maxDegree: 330,
      value: 3,
    },
    {
      minDegree: 331,
      maxDegree: 360,
      value: 2,
    }
  );

  // 피스들
  const partData = [1, 1, 1, 1, 1, 1];
  let pieColors = [
    "#F6FFDE",
    "#ddffbb",
    "#c7e9b0",
    "#b3c99c",
    "#a4bc92",
    "#83764f",
  ];

  const data = {
    // labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "00으로 연결",
        data: partData,
        backgroundColor: pieColors,
        borderColor: "white",
        borderWidth: 3,
      },
    ],
    // options: {
    //   responsive: true,
    //   animation: { duration: 0 },
    //   plugins: {
    //     datalabels: {
    //       fontColor: "black",
    //       color: "black",
    //       fontSize: 15,
    //     },
    //   },
    // },
  };

  return (
    <div className="roulette-box">
      <TbTriangleInvertedFilled color="deepskyblue" className="rolutte-pin" />

      <Pie data={data} />
      <div className="guide-box">
        {/* {guideActive ? (
          <p className="guide-desc">{`${} 링크로 이동합니다.`}</p>
        ) : (
         ""
        )} */}
      </div>
      <div className="spin-box">
        <button
          className="spin-btn"
          // onClick={spin}
        >
          click me
        </button>
      </div>
    </div>
  );
};

export default Roulette;
