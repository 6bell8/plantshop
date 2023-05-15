import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  SplineAreaSeries,
  Inject,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from "../../data/dummy";

const AreaChart = () => {
  return (
    <div className="area-container">
      <div className="page-title-box">
        <h1 className="page-title">인플레이션 비율</h1>
        <p className="page-subtitle">Chart</p>
      </div>
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default AreaChart;
