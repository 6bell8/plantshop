import React, { useState, useRef, useEffect } from "react";
import { PjsIcon } from "../../components";
import { DetailPopup } from "../../components";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import { CgDanger } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";
import swal from "sweetalert";
import { RiCoinsLine } from "react-icons/ri";

const Signup = () => {
  const router = useRouter();
  const [detailPopup, setDetailPopup] = useState(false);
  // 비밀번호 일치 시 pass변수
  const passwordPass = useRef();
  passwordPass.current = false;
  // e.target.value
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
  const [phoneActive, phoneChangeActive] = useState(false);
  // error 관리
  const [error, setError] = useState("");

  // usestate 상태관리를 담은 객체
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
    phone: "",
  });

  const PasswordCheckComponent = () => {
    if (formData.passwordCheck.length < 1 && passCheckvalidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">비밀번호를 재입력 해주세요.</span>
        </span>
      );
    } else if (
      formData.passwordCheck != formData.password &&
      passCheckvalidation
    ) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">
            패스워드가 일치하지 않습니다.
          </span>
        </span>
      );
    } else if (
      formData.passwordCheck == formData.password &&
      passCheckvalidation
    ) {
      passwordPass.current = true;
      return (
        <span className="text-danger">
          <CgDanger size="20" color="#35dd51" />
          <span className="text-danger-desc">패스워드가 일치합니다.</span>
        </span>
      );
    }
  };

  // form 전송 제어 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/users";
      const { data: res } = await axios.post(url, formData);
      console.log(res.message);
      router.push("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

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
                <label className="form-label">아이디</label>
                <input
                  required
                  name="id"
                  value={formData.id}
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
                  name="password"
                  value={formData.password}
                  type="password"
                  maxLength={20}
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
                  name="passwordCheck"
                  value={formData.passwordCheck}
                  type="password"
                  maxLength={20}
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
            <div className="row-col last-row">
              <div className="row-col-inputBox row-col-double">
                <label className="form-label">이름</label>
                {/* input 값으로 namechange변경 */}
                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  maxLength={30}
                  minLength={1}
                  onMouseDown={() => validationChange(true)}
                  onChange={(e) => formlengtName(e)}
                  className={`form-control   ${nameActive ? "active" : ""}`}
                  placeholder="1글자 이상 입력해주세요."
                />
                {formData.name.length == 0 && validation && (
                  <span className="text-danger">
                    <CgDanger size="20" color="red" />
                    이름을 입력하세요.
                  </span>
                )}
              </div>
              <div className="row-col-inputBox row-col-double">
                <label className="form-label">연락처</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  maxLength={20}
                  minLength={8}
                  onChange={(e) => formlengtPhone(e)}
                  className={`form-control  ${phoneActive ? "active" : ""}`}
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            <div className="row-col check-box">
              <div className="form-check">
                <input
                  required
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
                {error && <div className="">{error}</div>}
                <button type="submit" className="form-btn">
                  가입하기
                </button>
                <button className="form-btn" onClick={() => router.back()}>
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
  // current input 박스에 있는 name으로 값을 받아온다.
  function formlengthUsername({ currentTarget: input }) {
    setFormData({ ...formData, [input.name]: input.value });
    formData.id.length > 1
      ? usernameChangeActive(true)
      : usernameChangeActive(false);
  }

  function formlengthPassword({ currentTarget: input }) {
    setFormData({ ...formData, [input.name]: input.value });
    formData.password.length > 1
      ? passwordChangeActive(true)
      : passwordChangeActive(false);
  }

  function formlengthPasswordCheck({ currentTarget: input }) {
    setFormData({ ...formData, [input.name]: input.value });
    formData.passwordCheck.length > 1
      ? passwordCheckChangeActive(true)
      : passwordCheckChangeActive(false);
  }

  function formlengtName({ currentTarget: input }) {
    setFormData({ ...formData, [input.name]: input.value });
    formData.name.length > 1 ? nameChangeActive(true) : nameChangeActive(false);
  }

  function formlengtPhone({ currentTarget: input }) {
    setFormData({ ...formData, [input.name]: input.value });
    formData.phone.length > 1
      ? phoneChangeActive(true)
      : phoneChangeActive(false);
  }

  //닉네임 체크 컴포넌트
  function usernameCheckComponent() {
    if (formData.id.length >= 3 && usernameValidation) {
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
    if (formData.password.length < 3 && passwordValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">비밀번호를 입력해주세요.</span>
        </span>
      );
    } else if (formData.password.length < 6 && passwordValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="red" />
          <span className="text-danger-desc">보안등급 낮음</span>
          <AiFillCheckCircle size="18" color="red" />
        </span>
      );
    } else if (formData.password.length < 8 && passwordValidation) {
      return (
        <span className="text-danger">
          <CgDanger size="20" color="orange" />
          <span className="text-danger-desc">보안등급 보통</span>
          <AiFillCheckCircle size="18" color="orange" />
          <AiFillCheckCircle size="18" color="orange" />
        </span>
      );
    } else if (formData.password.length && passwordValidation) {
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

  function closeBtn() {
    setDetailPopup((detailPopup) => !detailPopup);
  }
};

export default Signup;
