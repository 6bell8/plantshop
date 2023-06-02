import React, { useState, useRef, useEffect } from "react";
import { PjsIcon } from "../../components";
import { DetailPopup } from "../../components";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import { CgDanger } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";

const Login = () => {
  const router = useRouter();
  const [detailPopup, setDetailPopup] = useState(false);
  // 비밀번호 일치 시 pass변수

  // usestate 상태관리를 담은 객체

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
      <div className="login-create-container">
        <div className="login-icon">
          <PjsIcon />
        </div>
        <div className="login-title-box">
          <h1 className="login-title">로그인</h1>
          <h1 className="login-title-desc">(준비 중입니다.)</h1>
          <p className="login-subtitle"></p>
        </div>
        <form className="login-create-wrapper">
          <div className="card">
            <div className="row-col">
              <div className="row-col-inputBox">
                <label className="form-label">아이디</label>
                <input
                  required
                  name="id"
                  maxLength={12}
                  minLength={3}
                  className="form-control"
                  placeholder="3글자 이상 입력해주세요."
                />
              </div>
            </div>
            <div className="row-col">
              <div className="row-col-inputBox">
                <label className="form-label">비밀번호</label>
                <input
                  required
                  name="password"
                  type="password"
                  maxLength={20}
                  minLength={5}
                  className="form-control"
                  placeholder="5글자 이상 입력해주세요."
                />
              </div>
            </div>

            <div className="row-col-btn">
              <button type="submit" className="login-form-btn">
                로그인
              </button>
              <button className="form-btn" onClick={() => router.back()}>
                회원가입
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  // 글자 제한 모션
};

export default Login;
