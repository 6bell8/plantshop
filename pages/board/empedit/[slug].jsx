import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";

const EmpEdit = () => {
  const router = useRouter();
  const params = router.query.slug;

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

  console.log(empData[params]?.id);
  const handleSave = (e) => {
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
        })
      );
    }
    nextId.current += 1;

    swal({
      title: "수정 완료",
      text: "확인 버튼을 눌러 닫아주세요.",
      icon: "success",
      button: "수정",
    });

    router.push("/board");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <div>
      <div className="board-create-container">
        <form className="board-create-wrapper" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-title">
              <h2>게시글 수정</h2>
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
                      placeholder={empData[params]?.id}
                    />
                  </div>
                </div>
                <div className="row-col">
                  <label>계정</label>
                  <input
                    value={username}
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

export default EmpEdit;
