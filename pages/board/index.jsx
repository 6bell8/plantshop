import React, { useState, useEffect } from "react";

const board = () => {
  const [empData, empDataChange] = useState(null);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/6bell8/d9b6225c2adb19dc658b7ab8529ce767/raw/2bdd4aa832f44c878518bc64c51ad31541b54155/board.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empDataChange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="board-container">
      <div className="page-title-box">
        <h1 className="page-title">게시판</h1>
        <p className="page-subtitle">page</p>
      </div>
      <div className="board-wrapper">
        <table className="board-table">
          <thead className="board-head">
            <tr className="board-head-tr">
              <td className="board-head-td num">번호</td>
              <td className="board-head-td id">ID</td>
              <td className="board-head-td name">이름</td>
              <td className="board-head-td content">문의사항</td>
              <td className="board-head-td contact">연락처</td>
            </tr>
          </thead>
          <tbody>
            {empData &&
              empData.map((item, i) => (
                <tr key={item.id}>
                  <td className="board-tbody-td num">{item.id}</td>
                  <td className="board-tbody-td id">{item.name}</td>
                  <td className="board-tbody-td name">{item.username}</td>
                  <td className="board-tbody-td content">{item.qa}</td>
                  <td className="board-tbody-td contact">{item.phone}</td>
                  <td className="board-btn board-btn-success">수정</td>
                  <td className="board-btn board-btn-dnager">삭제</td>
                  <td className="board-btn board-btn-primary">더 보기</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default board;
