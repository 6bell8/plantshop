import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import { AiOutlineEdit } from "react-icons/ai";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import swal from "sweetalert";

const board = () => {
  const router = useRouter();
  const { empData, setEmpData } = useStateContext();
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");

  // search rest api value return
  const keys = ["id", "name", "username", "email", "qa", "phone"];
  const searchData = search(empData);

  // 페이지네이션 상태관리
  const [currentPage, setCurrentPage] = useState(1);
  // 보여줄 데이터
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  // 다음 페이지 관리
  const lastIndex = currentPage * recordsPerPage;
  // 이전 페이지 관리
  const firstIndex = lastIndex - recordsPerPage;
  // 현재페이지에 나오는 데이터
  const records = searchData.slice(firstIndex, lastIndex);
  // 페이지 개수
  const npage = Math.ceil(searchData.length / recordsPerPage);
  // pagination 배열 생성
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const Options = [
    { index: 10, value: "10" },
    { index: 15, value: "15" },
    { index: 20, value: "20" },
  ];

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
      <div className="board-util-box">
        <button
          className="board-write"
          onClick={() => router.push("/board/empcreate")}
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">게시글 작성</span>
        </button>
        <div className="board-search-box">
          <input
            type="text"
            className={`board-search ${active ? "active" : ""}`}
            placeholder="검색어를 입력하세요."
            onClick={() => setActive(!active)}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
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
              records.map((item, i) => (
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
        <nav className="board-pagination-box">
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
      </div>
    </div>
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

  function search(data) {
    return data.filter((item) =>
      keys.some((key) => item[key].toString().toLowerCase().includes(query))
    );
  }
};

export default board;
