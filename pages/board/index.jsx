import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";

const board = () => {
  const router = useRouter();
  const { empData, setEmpData } = useStateContext();

  const LoadDetail = (id) => {
    // id를 통해서 동적변화 라우팅
    router.push({ pathname: "/board/empdetail/" + id });
  };
  const RemoveFunction = (id) => {};
  const LoadEdit = (id) => {};

  empData.sort((a, b) => b.id - a.id);
  console.log(empData[0]?.name);
  return (
    <div className="board-container">
      <div className="page-title-box">
        <h1 className="page-title">게시판</h1>
        <p className="page-subtitle">page</p>
      </div>
      <div
        className="btn btn-success"
        onClick={() => router.push("/board/empcreate")}
      >
        게시글 쓰기
      </div>
      <div
        className="btn btn-success"
        onClick={() => router.push("/board/empedit/:id")}
      >
        게시글 수정
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
            {
              // empData &&
              empData.map((item, i) => (
                <tr key={item.id}>
                  <td className="board-tbody-td num">{item.id}</td>
                  <td className="board-tbody-td name">{item.username}</td>
                  <td className="board-tbody-td id">{item.name}</td>
                  <td className="board-tbody-td content">{item.qa}</td>
                  <td className="board-tbody-td contact">{item.phone}</td>
                  <td className="board-btns">
                    <a
                      className="board-btn board-btn-success"
                      onClick={() => {
                        LoadEdit(item.id);
                      }}
                    >
                      수정
                    </a>
                    <a
                      className="board-btn board-btn-dnager"
                      onClick={() => {
                        RemoveFunction(item.id);
                      }}
                    >
                      삭제
                    </a>
                    <a
                      className="board-btn board-btn-primary"
                      onClick={() => {
                        LoadDetail(item.id);
                      }}
                    >
                      더 보기
                    </a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default board;
