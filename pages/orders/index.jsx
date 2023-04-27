import React, { useState } from "react";
import { ordersData } from "../../data/dummy";
import Table from "./Table";

const orders = () => {
  // *- query -* //
  const [query, setQuery] = useState("");
  const keys = ["OrderID", "CustomerName", "Status", "OrderItems", "Location"];
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((active) => !active);
  };

  // search 함수에서 data는 데이터 인자 값을 넣어주는 곳 그래서 orderData를 넣음
  // some은 조건 중 하나라도 충족이 가능하면 사용가능
  // data를 받아와서, data 파라미터 조건을 하나라도 충족시키면 tr 보여주기
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toString().toLowerCase().includes(query))
    );
  };

  return (
    <div className="order-container">
      <div className="page-title-box">
        <h1 className="page-title">주문 내역</h1>
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
      {/* data는 props. search 함수에서 ordersData를 담아서 보냄 */}
      {/* ordersData는 search 함수안의 인자값 */}
      <Table data={search(ordersData)} />
    </div>
  );
};

export default orders;
