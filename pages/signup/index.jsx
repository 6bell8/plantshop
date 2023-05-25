import React, { useState, useRef, useEffect } from "react";
import { PjsIcon } from "../../components";
import { DetailPopup } from "../../components";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import { CgDanger } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
import swal from "sweetalert";
import { render } from "react-dom";

const Signup = () => {
  const router = useRouter();
  const [id, idChange] = useState("");
  const [detailPopup, setDetailPopup] = useState(false);
  // e.target.value
  const [username, usernameChange] = useState("");
  const [name, nameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [passwordCheck, passwordCheckChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, validationChange] = useState(false);
  const [usernameValidation, usernameValidationChange] = useState(false);
  const [passwordValidation, passwordValidationChange] = useState(false);
  const [passCheckvalidation, passCheckValidationChange] = useState(false);
  //length state
  const [usernameActive, usernameChangeActive] = useState(false);
  const [passwordActive, passwordChangeActive] = useState(false);
  const [passwordCheckActive, passwordCheckChangeActive] = useState(false);
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
  };

  // console.log(detailPopup);

  return (
    <div>
      <div className="signup-create-container">
        <div className="signup-icon">
          <PjsIcon />
        </div>
        <div className="sign-title-box">
          <h1 className="sign-title">회원가입</h1>
          <h1 className="sign-title-desc">(준비 중입니다.)</h1>
          <p className="sign-subtitle"></p>
        </div>
        <form className="signup-create-wrapper" onSubmit={handleSubmit}>
          <div className="card">
            <div className="row-col">
              <div className="row-col-inputBox">
                <label className="form-label">닉네임</label>
                <input
                  required
                  value={username}
                  maxLength={12}
                  minLength={3}
                  onMouseDown={() => usernameValidationChange(true)}
                  onChange={(e) => formlengthUsername(e)}
                  className={`form-control ${usernameActive ? "active" : ""}`}
                  placeholder="3글자 이상 입력해주세요."
                />
                {usernameCheckComponent()}
              </div>
            </div>
            <div className="row-col">
              <div className="row-col-inputBox">
                <label className="form-label">비밀번호</label>
                <input
                  required
                  value={password}
                  type="password"
                  maxLength={30}
                  minLength={5}
                  onChange={(e) => formlengthPassword(e)}
                  onMouseDown={() => passwordValidationChange(true)}
                  className={`form-control ${passwordActive ? "active" : ""}`}
                  placeholder="5글자 이상 입력해주세요."
                />
                {/* if문 function은 즉시 실행 함수를 사용하여 배치 */}
                {PasswordComponent()}
              </div>
            </div>
            <div className="row-col">
              <div className="row-col-inputBox">
                <label className="form-label">비밀번호 확인</label>
                <input
                  required
                  value={passwordCheck}
                  type="password"
                  maxLength={30}
                  minLength={3}
                  onChange={(e) => formlengthPasswordCheck(e)}
                  onMouseDown={() => passCheckValidationChange(true)}
                  className={`form-control ${
                    passwordCheckActive ? "active" : ""
                  }`}
                  placeholder="5글자 이상 입력해주세요."
                />
                {/* 사용 할 것 */}
                {PasswordCheckComponent()}
              </div>
            </div>
            <div className="row-col">
              <div className="row-col-inputBox">
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
            </div>

            <div className="row-col last-row">
              <div className="row-col-inputBox">
                <label className="form-label-contact">연락처</label>
                <input
                  type="number"
                  value={phone}
                  maxLength={20}
                  minLength={8}
                  onChange={(e) => formlengtPhone(e)}
                  className={`form-control ${phoneActive ? "active" : ""}`}
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            <div className="row-col check-box">
              <div className="form-check">
                <input
                  checked={active}
                  onChange={(e) => activeChange(e.target.checked)}
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label">
                  개인정보 이용정책에 동의 하십니까?
                  <strong className="detail-popup" onClick={closeBtn}>
                    {detailPopup === false ? (
                      <span>[자세히보기]</span>
                    ) : (
                      <span>[접기]</span>
                    )}
                  </strong>
                </label>
                {detailPopup && <DetailPopup closeBtn={closeBtn} />}
              </div>
            </div>
            <div className="row-col-btn">
              <div className="form-group">
                <button type="submit" className="form-btn">
                  가입하기
                </button>
                <button className="form-btn" onClick={() => router.push("/")}>
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

  function formlengthPassword(e) {
    password.length > 1
      ? passwordChangeActive(true)
      : passwordChangeActive(false);
    passwordChange(e.target.value);
  }

  function formlengthPasswordCheck(e) {
    passwordCheck.length > 1
      ? passwordCheckChangeActive(true)
      : passwordCheckChangeActive(false);
    passwordCheckChange(e.target.value);
  }

  function formlengtName(e) {
    nameChange(e.target.value);
    name.length > 1 ? nameChangeActive(true) : nameChangeActive(false);
  }

  function formlengtPhone(e) {
    phoneChange(e.target.value);
    phone.length > 1 ? phoneChangeActive(true) : phoneChangeActive(false);
  }

  //닉네임 컴포넌트

  function usernameCheckComponent() {
    if (username.length >= 3 && usernameValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="#35dd51" />
          <span className="text-danger-desc">사용가능한 닉네임입니다.</span>
        </span>
      );
    }
  }

  // 비밀번호 보안 컴포넌트
  function PasswordComponent() {
    if (password.length < 3 && passwordValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">비밀번호를 입력해주세요.</span>
        </span>
      );
    } else if (password.length < 6 && passwordValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">보안등급 낮음</span>
          <AiFillCheckCircle size="18" color="red" />
        </span>
      );
    } else if (password.length < 8 && passwordValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="orange" />
          <span className="text-danger-desc">보안등급 보통</span>
          <AiFillCheckCircle size="18" color="orange" />
          <AiFillCheckCircle size="18" color="orange" />
        </span>
      );
    } else if (password.length && passwordValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="#35dd51" />
          <span className="text-danger-desc">보안등급 높음</span>
          <AiFillCheckCircle size="18" color="#35dd51" />
          <AiFillCheckCircle size="18" color="#35dd51" />
          <AiFillCheckCircle size="18" color="#35dd51" />
        </span>
      );
    } else {
      undefined;
    }
  }

  function PasswordCheckComponent() {
    if (passwordCheck.length < 1 && passCheckvalidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">비밀번호를 재입력 해주세요.</span>
        </span>
      );
    } else if (passwordCheck != password && passCheckvalidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">
            패스워드가 일치하지 않습니다.
          </span>
        </span>
      );
    } else if (passwordCheck == password && passCheckvalidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="#35dd51" />
          <span className="text-danger-desc">패스워드가 일치합니다.</span>
        </span>
      );
    }
  }

  function closeBtn() {
    setDetailPopup((detailPopup) => !detailPopup);
    console.log(detailPopup);
  }
};

export default Signup;
