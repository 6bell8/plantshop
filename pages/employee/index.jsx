import React, { useState } from "react";
import { employeesData } from "../../data/dummy";
import TableEmployees from "../../components/Employees/TableEmployees";

const employees = () => {
  // *- query -* //
  const [query, setQuery] = useState("");
  const keys = ["EmployeeID", "Name", "Title", "HireDate", "Country"];
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((active) => !active);
  };

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toString().toLowerCase().includes(query))
    );
  };

  return (
    <div className="order-container">
      <div className="page-title-box">
        <h1 className="page-title">직원 명단</h1>
        <p className="page-subtitle">info</p>
      </div>
      <div className="order-search-box">
        <input
          type="text"
          className={`order-search ${active ? "active" : ""}`}
          placeholder="검색어를 입력해주세요."
          onClick={() => setActive(!active)}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <TableEmployees data={search(employeesData)} />
    </div>
  );
};

export default employees;
