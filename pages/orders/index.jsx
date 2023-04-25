import React, { useState } from "react";
import { ordersData } from "../../data/dummy";
import Image from "next/image";
// import { earningData, SparklineAreaData, ecomPieChartDat } from "../data/dummy";

const orders = () => {
  // 페이지네이션 상태관리
  const [currentPage, setCurrentPage] = useState(1);
  // 보여줄 데이터
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  // 다음 페이지 관리
  const lastIndex = currentPage * recordsPerPage;
  // 이전 페이지 관리
  const firstIndex = lastIndex - recordsPerPage;
  // ?
  const records = ordersData.slice(firstIndex, lastIndex);
  // 어느 페이지에 있건 다음페이지
  const npage = Math.ceil(ordersData.length / recordsPerPage);
  // pagination 배열 생성
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const onChangeHanlder = (e) => {
    setRecordsPerPage(e.currentTarget.value);
  };

  const Options = [
    { index: 5, value: "5" },
    { index: 10, value: "10" },
    { index: 15, value: "15" },
  ];

  console.log(recordsPerPage);

  return (
    <div>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>총 금액</th>
            <th>이름</th>
            <th>상태</th>
            <th>지역</th>
            <th>이미지</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.OrderID}</td>
              <td>{item.TotalAmount}</td>
              <td>{item.CustomerName}</td>
              <td>{item.Status}</td>
              <td>{item.OrderItems}</td>
              <td>{item.Location}</td>
              <img
                src={item.ProductImage}
                width={80}
                height={80}
                alt="이미지가 준비 되지않았습니다."
              />
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              이전
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
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              다음
            </a>
          </li>
        </ul>
      </nav>
      <select onChange={onChangeHanlder} value={recordsPerPage}>
        {Options.map((item, i) => (
          <option key={item.index} value={item.index}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );

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

export default orders;
