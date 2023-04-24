import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
// import { SparkLine, Stacked } from "../../components";
import dynamic from "next/dynamic";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartDat,
} from "../../data/dummy";

const SparkLine = dynamic(() => import("../../components/Charts/SparkLine"), {
  ssr: false,
});

const Stacked = dynamic(() => import("../../components/Charts/Stacked"), {
  ssr: false,
});

const Ecommerce = () => {
  return (
    <div className="ecommerce-container">
      <div className="ecommerce-wrap">
        <div className="ecommerce-box">
          <div className="ecommerce-benefit">
            <div>
              <p className="ecommerce-benefit-title">수익</p>
              <p className="ecommerce-benefit-num">100,000,000</p>
            </div>
          </div>
          <div className="ecommerce-download">
            <button type="button" className="ecommerce-button">
              Download
            </button>
          </div>
        </div>
        <div className="ecommerce-boxs">
          {earningData.map((item) => (
            <div key={item.title} className="ecommerce-data">
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="ecommerce-button"
              >
                {item.icon}
              </button>
              <p className="ecommerce-index-title">{item.title}</p>

              <p className="ecommerce-index">
                <span className="ecommerce-index-amount">{item.amount}</span>
                <span className="ecommerce-index-per">{item.percentage}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="ecommerce-update">
        <div className="">
          <div className="">
            <p className="">수입 업데이트</p>
            <div className="">
              <p className="">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>지출</span>
              </p>
              <p className="">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>예산</span>
              </p>
            </div>
          </div>

          <div className="">
            <div className="">
              <div>
                <p>
                  <span className="">100,000원</span>
                  <span className="">20%</span>
                </p>
                <p className="">예산</p>
              </div>
              <div className="">
                <p>
                  <span className="">230,000원</span>
                </p>
                <p className="">지출</p>
              </div>
              <div className="">
                <SparkLine
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                />
              </div>
              <div className="">
                <button type="button" className="">
                  다운로드
                </button>
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
