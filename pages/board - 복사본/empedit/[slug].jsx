import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";
import swal from "sweetalert";

const EmpEdit = () => {
  const router = useRouter();
  const params = router.query.slug;

  const { empData, setEmpData, nextId } = useStateContext();

  const [id, idChange] = useState("");
  const [username, usernameChange] = useState("");
  const [name, nameChange] = useState("");
  const [qa, qaChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, validationChange] = useState(false);

  useEffect(() => {
    formData.username = usernameChange(formData?.username);
    return () => {};
  }, []);

  // 전역변수 전달
  // formData 임의로 설정 id가 같기 때문에 추가가 되지않는다. 이 부분 다시 설정

  // empData 추가해서 했더니 form 값이 change가 안되고 고정이됨
  //

  const formData = {
    id: empData[params]?.id,
    username: username === "" ? empData[params]?.username : username,
    name: name === "" ? empData[params]?.name : name,
    qa: qa === "" ? empData[params]?.qa : qa,
    phone: phone === "" ? empData[params]?.phone : phone,
    active: active,
  };

  const handleSave = (e) => {
    if (e.id) {
      setEmpData(
        empData.map((row) =>
          e.id === row.id
            ? {
                id: e.id,
                username: e.username,
                name: e.name,
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
          username: e.username,
          name: e.name,
          qa: e.qa,
          phone: e.phone,
          active: e.active,
        })
      );
    }

    swal({
      title: "수정 완료",
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
                  <label>닉네임</label>
                  <input
                    defaultValue={empData[params]?.username}
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
                      defaultValue={empData[params]?.name + username}
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
                      defaultValue={empData[params]?.qa}
                      onChange={(e) => qaChange(e.target.value)}
                      className="form-qa"
                    />
                  </div>
                </div>
                <div className="row-col">
                  <div className="form-group">
                    <label>연락처</label>
                    <input
                      defaultValue={empData[params]?.phone}
                      onChange={(e) => phoneChange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row-col">
                  <div className="form-check">
                    <input
                      checked={empData[params]?.active}
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
