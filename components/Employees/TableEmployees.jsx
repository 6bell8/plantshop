import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const TableEmployees = ({ data }) => {
  // 페이지네이션 상태관리
  const [currentPage, setCurrentPage] = useState(1);
  // 보여줄 데이터
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  // 다음 페이지 관리
  const lastIndex = currentPage * recordsPerPage;
  // 이전 페이지 관리
  const firstIndex = lastIndex - recordsPerPage;
  // 현재페이지에 나오는 더미 데이터
  const records = data.slice(firstIndex, lastIndex);
  // 페이지 개수
  const npage = Math.ceil(data.length / recordsPerPage);
  // pagination 배열 생성
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const Options = [
    { index: 10, value: "10" },
    { index: 15, value: "15" },
    { index: 20, value: "20" },
  ];

  return (
    <table className="order-table">
      <thead className="order-header-wrap">
        <tr className="order-header-box">
          <th className="order-header">ID</th>
          <th className="order-header">이름</th>
          <th className="order-header">직책</th>
          <th className="order-header">상태</th>
          <th className="order-header">국가</th>
        </tr>
      </thead>
      <tbody>
        {records.map((item, index) => (
          <tr key={index}>
            <td>{item.EmployeeID}</td>
            <td>{item.Name}</td>
            <td>{item.Title}</td>
            <td>{item.HireDate}</td>
            <td>{item.Country}</td>
          </tr>
        ))}
      </tbody>
      <nav className="order-pagination-box">
        <ul className="pagination">
          <li className="page-item arrow">
            <a href="#" className="page-link" onClick={prePage}>
              <BiLeftArrow size="26" color="#333" />
            </a>
          </li>
          {numbers.map((item, i) => (
            <li
              className={`page-item ${currentPage === item ? "active" : ""}`}
              key={i}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changeCPage(item)}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="page-item arrow">
            <a href="#" className="page-link" onClick={nextPage}>
              <BiRightArrow size="26" color="#333" />
            </a>
          </li>
        </ul>
        <select
          onChange={onChangeHanlder}
          value={recordsPerPage}
          className="select-post"
        >
          {Options.map((item, i) => (
            <option key={item.index} value={item.index}>
              {item.value}
            </option>
          ))}
        </select>
      </nav>
    </table>
  );

  function onChangeHanlder(e) {
    setRecordsPerPage(e.currentTarget.value);
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // 현재 페이지 알아내는 함수
  function changeCPage(pageId) {
    setCurrentPage(pageId);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default TableEmployees;
