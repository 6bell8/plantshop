import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "../../node_modules/@syncfusion/ej2-react-schedule";

import { scheduleData } from "../../data/dummy";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="page-title-box">
        <h1 className="page-title">인플레이션 비율 </h1>
        <p className="page-subtitle">Chart</p>
      </div>
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Resize, Agenda, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
