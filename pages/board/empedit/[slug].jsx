import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";
import { CgDanger } from "react-icons/cg";
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
  const [validation, validationChange] = useState(true);

  //change state
  const [usernameActive, usernameChangeActive] = useState(false);
  const [nameActive, nameChangeActive] = useState(false);
  const [qaActive, qaChangeActive] = useState(false);
  const [phoneActive, phoneChangeActive] = useState(false);

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
  };

  return (
    <div>
      <div className="board-edit-container">
        <div className="page-title-box">
          <h1 className="page-title">게시판 수정</h1>
          <p className="page-subtitle">
            <input
              value={id}
              disabled
              className="form-control"
              placeholder={empData[params]?.id + "th"}
            />
          </p>
        </div>
        <form className="board-edit-wrapper" onSubmit={handleSubmit}>
          <div className="card">
            <div className="row">
              <div className="row-2">
                <div className="row-col">
                  <label className="form-label">닉네임</label>
                  <input
                    defaultValue={empData[params]?.username}
                    onChange={(e) => usernameChange(e.target.value)}
                    className="form-control"
                    minLength={3}
                    placeholder="3글자 이상 입력해주세요."
                  />
                </div>
                <div className="row-col">
                  <label>이름</label>
                  <input
                    required
                    defaultValue={empData[params]?.name + username}
                    onChange={(e) => nameChange(e.target.value)}
                    className="form-control"
                    minLength={3}
                    placeholder="3글자 이상 입력해주세요."
                    disabled
                  />
                  {name.length == 0 && validation && (
                    <span className="text-impo">
                      <CgDanger size="20" color="#35dd51" />
                      이름은 수정이 불가합니다.
                    </span>
                  )}
                </div>
              </div>
              <div className="row-col board-textarea">
                <label>내용</label>
                <textarea
                  defaultValue={empData[params]?.qa}
                  onChange={(e) => qaChange(e.target.value)}
                  className="form-qa"
                  minLength={3}
                  placeholder="3글자 이상 입력해주세요."
                />
              </div>
              <div className="row-col">
                <label className="form-label">연락처</label>
                <input
                  defaultValue={empData[params]?.phone}
                  onChange={(e) => phoneChange(e.target.value)}
                  className="form-control"
                  type="number"
                  placeholder="010-0000-0000"
                />
              </div>
              <div className="row-col">
                <div className="form-check">
                  <input
                    checked={empData[params]?.active}
                    onChange={(e) => activeChange(e.target.checked)}
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label className="form-check-label">
                    개인정보 이용정책에 동의 하십니까? (사실 아무 것도 아님)
                  </label>
                </div>
              </div>
              <div className="row-col">
                <div className="form-group">
                  <button type="submit" className="form-btn left">
                    저장하기
                  </button>
                  <button
                    className="form-btn right"
                    onClick={() => router.push("/board")}
                  >
                    뒤로가기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  function formChangeUsername(e) {
    usernameChange(e.target.value);
    usernameChange.length >= 1
      ? usernameChangeActive(true)
      : usernameChangeActive(false);
  }
};

export default EmpEdit;
