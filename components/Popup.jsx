import { useState, React, useEffect } from "react";
import cookie from "react-cookies";

const Popup = () => {
  // 이름을 바꿨더니 쿠키리업로드

  useEffect(() => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 5);
    cookie.save("Cookiee", "abc", {
      path: "/",
      expires,
    });

    setTimeout(function () {
      alert(cookie.load("Cookiee"));
    }, 1000);
  });

  return (
    <div>
      <button className="delCookie" onClick={delCookie}>
        쿠키삭제
      </button>
    </div>
  );

  //  함수가 실행이 되어도 바로 지워지는 것이 아님. 지워도 이따가 지워지고 새로고침하면 다시 쿠키생성 반복
  function delCookie() {
    cookie.remove("Cookiee", { path: "/" });
    alert(cookie.load("Cookiee"));
  }
};

export default Popup;
