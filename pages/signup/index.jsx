import React, { useState, useRef, useEffect } from "react";
import { PjsIcon } from "../../components";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import { CgDanger } from "react-icons/cg";
import swal from "sweetalert";

const EmpCreate = () => {
  const router = useRouter();
  const [id, idChange] = useState("");
  // e.target.value
  const [username, usernameChange] = useState("");
  const [name, nameChange] = useState("");
  // const [qa, qaChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, validationChange] = useState(false);
  //length state
  const [usernameActive, usernameChangeActive] = useState(false);
  const [nameActive, nameChangeActive] = useState(false);
  // const [qaActive, qaChangeActive] = useState(false);
  const [phoneActive, phoneChangeActive] = useState(false);

  // 전역변수 전달
  const { empData, setEmpData, nextId } = useStateContext();
  // usestate 상태관리를 담은 객체
  const formData = { id, username, name, phone, active };

  // e인자 값이 들어가 있어야 실행
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

    router.push("/signup");
  };

  // 객체를 함수에 넣어서 리턴
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    console.log(formData);
  };

  return (
    <div>
      <div className="signup-create-container">
        <div className="signup-icon">
          {" "}
          <PjsIcon />
        </div>
        <div className="sign-title-box">
          <h1 className="sign-title">Sign up</h1>
          <h1 className="sign-title-desc">(준비 중입니다.)</h1>
          <p className="sign-subtitle"></p>
        </div>
        <form className="signup-create-wrapper" onSubmit={handleSubmit}>
          <div className="card">
            <div className="row-col">
              <label className="form-label">닉네임</label>
              <input
                value={username}
                maxLength={30}
                minLength={3}
                onChange={(e) => formlengthUsername(e)}
                className={`form-control ${usernameActive ? "active" : ""}`}
                placeholder="3글자 이상 입력해주세요."
              />
              {/* 사용 할 것 */}
              {/* {name.length == 0 && validation && (
                    <span className="text-danger">
                      <CgDanger size="20" color="#35dd51" />
                      사용 가능한 아이디입니다.
                    </span>
                  )} */}
            </div>
            <div className="row-col">
              <label className="form-label">비밀번호</label>
              <input
                value={username}
                maxLength={30}
                minLength={3}
                onChange={(e) => formlengthUsername(e)}
                className={`form-control ${usernameActive ? "active" : ""}`}
                placeholder="3글자 이상 입력해주세요."
              />
              {/* 사용 할 것 */}
              {/* {name.length == 0 && validation && (
                    <span className="text-danger">
                      <CgDanger size="20" color="#35dd51" />
                      사용 가능한 아이디입니다.
                    </span>
                  )} */}
            </div>
            <div className="row-col">
              <label className="form-label">비밀번호 확인</label>
              <input
                value={username}
                maxLength={30}
                minLength={3}
                onChange={(e) => formlengthUsername(e)}
                className={`form-control ${usernameActive ? "active" : ""}`}
                placeholder="3글자 이상 입력해주세요."
              />
              {/* 사용 할 것 */}
              {/* {name.length == 0 && validation && (
                    <span className="text-danger">
                      <CgDanger size="20" color="#35dd51" />
                      사용 가능한 아이디입니다.
                    </span>
                  )} */}
            </div>
            <div className="row-col">
              <label className="form-label">이름</label>
              {/* input 값으로 namechange변경 */}
              <input
                required
                value={name}
                maxLength={30}
                minLength={3}
                onMouseDown={() => validationChange(true)}
                onChange={(e) => formlengtName(e)}
                className={`form-control ${nameActive ? "active" : ""}`}
                placeholder="3글자 이상 입력해주세요."
              />
              {name.length == 0 && validation && (
                <span className="text-danger">
                  <CgDanger size="20" color="red" />
                  이름을 입력하세요.
                </span>
              )}
            </div>

            <div className="row-col">
              <label className="form-label">연락처</label>
              <input
                type="number"
                value={phone}
                maxLength={20}
                minLength={3}
                onChange={(e) => formlengtPhone(e)}
                className={`form-control ${phoneActive ? "active" : ""}`}
                placeholder="010-0000-0000"
              />
            </div>

            <div className="row-col">
              <div className="form-check">
                <input
                  checked={active}
                  onChange={(e) => activeChange(e.target.checked)}
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label">
                  개인정보 이용정책에 동의 하십니까? (사실 아무 것도 아님)
                </label>
              </div>
            </div>
            <div className="row-col-btn">
              <div className="form-group">
                <button type="submit" className="form-btn left">
                  저장하기
                </button>
                <button
                  className="form-btn right"
                  onClick={() => router.push("/")}
                >
                  뒤로가기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  // 글자 제한 모션
  function formlengthUsername(e) {
    username.length > 1
      ? usernameChangeActive(true)
      : usernameChangeActive(false);
    usernameChange(e.target.value);
  }

  function formlengtName(e) {
    nameChange(e.target.value);
    name.length > 1 ? nameChangeActive(true) : nameChangeActive(false);
  }

  function formlengtQa(e) {
    qaChange(e.target.value);
    qa.length > 1 ? qaChangeActive(true) : qaChangeActive(false);
  }

  function formlengtPhone(e) {
    phoneChange(e.target.value);
    phone.length > 1 ? phoneChangeActive(true) : phoneChangeActive(false);
  }
};

export default EmpCreate;
