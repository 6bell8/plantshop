import React from "react";
import { ordersData, ordersGrid } from "../../data/dummy";
import Image from "next/image";
// import { earningData, SparklineAreaData, ecomPieChartDat } from "../data/dummy";

const orders = () => {
  console.log(ordersData);
  return (
    <div className="">
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((item, index) => (
            <tr key={index}>
              <td>{item.OrderID}</td>
              <td>{item.CustomerName}</td>
              <td>{item.TotalAmount}</td>
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
    </div>
  );
};

export default orders;
