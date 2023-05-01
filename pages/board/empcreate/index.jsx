import React, { useState } from "react";
import { useRouter } from "next/router";

const EmpCreate = () => {
  const router = useRouter();
  const [num, numChange] = useState("");
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [contact, contactChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, validationChange] = useState(false);

  // e인자 값이 들어가 있어야 실행이 됨
  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, contact, phone, active };

    // fetch();
    // "https://gist.githubusercontent.com/6bell8/d9b6225c2adb19dc658b7ab8529ce767/raw/2bdd4aa832f44c878518bc64c51ad31541b54155/board.json",
    // {
    //   method: "POST",
    //   header: { "content-type": "application/json" },
    //   body: JSON.stringify(empdata),
    // }
    alert("게시글 업로드 완료");
    router.push("/board");
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
                    <input value={num} disabled className="form-control" />
                  </div>
                </div>
                <div className="row-col">
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      value={id}
                      onChange={(e) => idChange(e.target.value)}
                      className="form-control"
                    />
                  </div>
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
                    <label>문의사항</label>
                    <input
                      value={contact}
                      onChange={(e) => contactChange(e.target.value)}
                      className="form-control"
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

export default EmpCreate;
