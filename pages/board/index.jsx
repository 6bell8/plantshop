import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import { AiOutlineEdit } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import swal from "sweetalert";
const board = () => {
  const router = useRouter();
  const { empData, setEmpData } = useStateContext();

  // btn 함수
  const LoadDetail = (id) => {
    router.push({ pathname: "/board/empdetail/" + id });
  };

  const LoadEdit = (id) => {
    router.push({ pathname: "/board/empedit/" + id });
  };

  const RemoveFunction = (id) => {
    window
      .swal({
        title: "삭제하시겠습니까?",
        text: "확인 버튼을 눌러 닫아주세요.",
        icon: "info",
        buttons: {
          cancle: {
            text: "확인",
            value: true,
            className: "remove-btn",
          },
          confirm: {
            text: "취소",
            value: false,
            className: "cancle-btn",
          },
        },
      })
      .then((result) => {
        if (result) {
          swal("삭제되었습니다.", "페이지로 돌아갑니다.", {
            closeOnClickOutside: false,
            closeOnEsc: false,
            button: {
              confirm: {
                text: "확인",
                value: true,
                className: "",
              },
            },
          });

          //  filter로 삭제
          setEmpData((data) => data.filter((item) => item.id !== id));
        } else {
          swal("취소되었습니다.", "페이지로 돌아갑니다.", {
            closeOnClickOutside: false,
            closeOnEsc: false,
            button: {
              confirm: {
                text: "확인",
                value: true,
                className: "",
              },
            },
          });
        }
      });
  };

  empData.sort((a, b) => b.id - a.id);

  return (
    <div className="board-container">
      <div className="page-title-box">
        <h1 className="page-title">게시판</h1>
        <p className="page-subtitle">page</p>
      </div>
      <div
        className="btn board-write"
        onClick={() => router.push("/board/empcreate")}
      >
        게시글 쓰기
      </div>

      <div className="board-wrapper">
        <table className="board-table">
          <thead className="board-head">
            <tr className="board-head-tr">
              <th className="board-head-th num">번호</th>
              <th className="board-head-th id">ID</th>
              <th className="board-head-th name">이름</th>
              <th className="board-head-th content">문의사항</th>
              <th className="board-head-th contact">연락처</th>
              <th className="board-head-th null"></th>
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
                  <td
                    className="board-tbody-td content"
                    onClick={() => {
                      LoadDetail(i);
                    }}
                  >
                    {item.qa}
                  </td>
                  <td className="board-tbody-td contact">{item.phone}</td>
                  <td className="board-tbody-td board-btns">
                    <a
                      className="board-btn board-btn-success"
                      onClick={() => {
                        LoadEdit(i);
                      }}
                    >
                      <AiOutlineEdit />
                    </a>
                    <a
                      className="board-btn board-btn-delete"
                      onClick={() => {
                        RemoveFunction(item.id);
                      }}
                    >
                      <TiDelete />
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
