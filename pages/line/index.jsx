import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  LineSeries,
  Inject,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";

const Linechart = () => {
  return (
    <div className="line-container">
      <div className="page-title-box">
        <h1 className="page-title">라인 차트</h1>
        <p className="page-subtitle">Chart</p>
      </div>
      <div className="">
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Linechart;
