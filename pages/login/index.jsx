import React, { useState, useRef, useEffect } from "react";
import { PjsIcon } from "../../components";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  // 전역변수
  const { users, setUsers, visitor, setVisitor } = useStateContext();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState("");
  // 아이디,패스워드 함수
  const [usernameActive, usernameChangeActive] = useState(false);
  const [passwordActive, passwordChangeActive] = useState(false);
  // 비밀번호 일치 시 pass변수

  // usestate 상태관리를 담은 객체

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://plant-shop-server.fly.dev/api/auth";
      // const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, formData);
      localStorage.setItem("token", res.data);
      setUsers(true);
      setVisitor(formData.id);
      router.push("/");
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
          <p className="login-subtitle"></p>
        </div>
        <form className="login-create-wrapper" onSubmit={handleSubmit}>
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
                  className="form-control"
                  placeholder="아이디를 입력해주세요."
                  onChange={(e) => formlengthUsername(e)}
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
                  value={formData.password}
                  maxLength={20}
                  minLength={5}
                  className="form-control"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={(e) => formlengthPassword(e)}
                />
              </div>
              {error && <div className="error-msg">{error}</div>}
            </div>
            <div className="row-col-btn">
              <button type="submit" className="login-form-btn">
                로그인
              </button>
              <button
                className="form-btn"
                onClick={() => router.push("/signup")}
              >
                회원가입
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

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
};

export default Login;
