import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../../context/StateContext";
import swal from "sweetalert";

const EmpCreate = () => {
  const router = useRouter();
  const [id, idChange] = useState("");
  const [username, usernameChange] = useState("");
  const [name, nameChange] = useState("");
  const [qa, qaChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, validationChange] = useState(false);

  // 전역변수 전달
  const { empData, setEmpData, nextId } = useStateContext();
  // usestate 상태관리로 handleSubmit 끝나면 초기화
  const formData = { id, username, name, qa, phone, active };

  // e인자 값이 들어가 있어야 실행
  const handleSave = (e) => {
    //

    if (e.id) {
      setEmpData(
        empData.map((row) =>
          e.id === row.id
            ? {
                id: e.id,
                name: e.name,
                username: e.username,
                qa: e.qa,
                phone: e.phone,
                active: e.active,
              }
            : row
        )
      );
    } else {
      setEmpData((empData) =>
        empData.concat({
          id: nextId.current,
          name: e.name,
          username: e.username,
          qa: e.qa,
          phone: e.phone,
          active: e.active,
        })
      );
    }
    nextId.current += 1;

    swal({
      title: "등록 완료",
      text: "확인 버튼을 눌러 닫아주세요.",
      icon: "success",
      button: "확인",
    });

    router.push("/board");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    console.log(formData);
  };

  return (
    <div>
      <div className="board-create-container">
        <form className="board-create-wrapper" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-title">
              <h2>게시글 생성</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="row-col">
                  <div className="form-group">
                    <label>번호</label>
                    <input
                      value={id}
                      disabled
                      className="form-control"
                      placeholder={nextId.current}
                    />
                  </div>
                </div>
                <div className="row-col">
                  <label>닉네임</label>
                  <input
                    value={username}
                    maxLength={20}
                    onChange={(e) => usernameChange(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="row-col">
                  <div className="form-group">
                    <label>이름</label>
                    {/* input 값으로 namechange변경 */}
                    <input
                      required
                      value={name}
                      maxLength={20}
                      onMouseDown={() => validationChange(true)}
                      onChange={(e) => nameChange(e.target.value)}
                      className="form-control"
                    />
                    {name.length == 0 && validation && (
                      <span className="text-danger">이름을 입력하세요.</span>
                    )}
                  </div>
                </div>
                <div className="row-col">
                  <div className="form-group">
                    <label>내용</label>
                    <textarea
                      value={qa}
                      onChange={(e) => qaChange(e.target.value)}
                      className="form-qa"
                    />
                  </div>
                </div>
                <div className="row-col">
                  <div className="form-group">
                    <label>연락처</label>
                    <input
                      value={phone}
                      maxLength={20}
                      onChange={(e) => phoneChange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row-col">
                  <div className="form-check">
                    <input
                      checked={active}
                      onChange={(e) => activeChange(e.target.checked)}
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">확인하였습니다.</label>
                  </div>
                </div>
                <div className="row-col">
                  <div className="form-group">
                    <button type="submit" className="btn btn-success">
                      저장하기
                    </button>
                    <button
                      className="btn"
                      onClick={() => router.push("/board")}
                    >
                      뒤로가기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpCreate;
