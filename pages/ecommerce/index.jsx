import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import dynamic from "next/dynamic";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartDat,
} from "../../data/dummy";

//  chart가 문제있어서 import SparkLine을 ssr 방식으로 렌더링하지않고 dynamic 방식으로 렌더링해서 문제해결

const SparkLine = dynamic(() => import("../../components/Charts/SparkLine"), {
  ssr: false,
});
const Stacked = dynamic(() => import("../../components/Charts/Stacked"), {
  ssr: false,
});

const Ecommerce = () => {
  return (
    <div className="ecommerce-container">
      <div className="page-title-box">
        <h1 className="page-title">거래 내역</h1>
        <p className="page-subtitle">info</p>
      </div>
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
      <div className="ecommerce-budget">
        <div className="ecommerce-update-wrap">
          <p className="ecommerce-update-title">수입 업데이트</p>
          <div className="ecommerce-update-box">
            <p className="ecommerce-export">
              <span>
                <GoPrimitiveDot />
              </span>
              <span>지출</span>
            </p>
            <p className="ecommerce-benefit">
              <span>
                <GoPrimitiveDot />
              </span>
              <span>예산</span>
            </p>
          </div>
        </div>

        <div className="ecommerce-graph-wrap">
          <div className="ecommerce-graph-box">
            <div className="ecommerce-graph-budBox">
              <p>
                <span className="ecommerce-graph-bud green">100,000원</span>
                <span className="ecommerce-graph-per green">+20%</span>
              </p>
              <p className="ecommerce-graph-title">예산</p>
            </div>
            <div className="ecommerce-graph-budBox">
              <p>
                <span className="ecommerce-graph-bud blue">230,000원</span>
                <span className="ecommerce-graph-per blue">-10%</span>
              </p>
              <p className="ecommerce-graph-title">지출</p>
            </div>
            <div className="">
              <SparkLine
                id="line-sparkLine"
                type="Line"
                height="120px"
                width="360px"
                data={SparklineAreaData}
              />
            </div>
            <div className="ecommerce-download">
              <button type="button" className="ecommerce-download-btn">
                Download Report
              </button>
            </div>
          </div>
          <div className="stacked-chart-box">
            <Stacked width="400px" height="460px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
