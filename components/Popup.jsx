import { useState, React, useEffect } from "react";
import cookie from "react-cookies";

const Popup = () => {
  // 이름을 바꿨더니 쿠키리업로드

  const [visited, setVisited] = useState(true);
  const [popupActive, setPopupActive] = useState(true);
  const [popupChecked, setPopupChecked] = useState(false);

  useEffect(() => {
    checkCookie("Cookiee");
  }, []);

  return (
    <div className={`popup-box ${popupActive ? "active" : ""}`}>
      <button className="delCookie" onClick={delCookie}>
        쿠키삭제
      </button>
      <label>
        <input
          type="checkbox"
          className="popup"
          checked={popupChecked}
          onChange={(e) => setPopupChecked(e.target.checked)}
        />
        하루 안보기
      </label>
      <button className="close" onClick={popupClose}>
        닫기
      </button>
    </div>
  );

  //  함수가 실행이 되어도 바로 지워지는 것이 아님. 지워도 이따가 지워지고 새로고침하면 다시 쿠키생성 반복
  function delCookie() {
    cookie.remove("Cookiee", { path: "/" });
    // alert(cookie.load("Cookiee"));
  }

  function creatCookie() {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    cookie.save("Cookiee", "abc", {
      path: "/",
      expires,
    });

    setTimeout(function () {
      //   alert(cookie.load("Cookiee"));
    }, 1000);
  }

  //   쿠키 일치함수
  function checkCookie(name) {
    const cookies = document.cookie.split(";");
    console.log(cookies);
    for (let i in cookies) {
      if (cookies[i].indexOf(name) > -1) {
        setVisited(false);
        if (visited === true) {
          setPopupActive(true);
        } else {
          //   처음이 아니면 신규
          setPopupActive(false);
        }
      }
      console.log(visited);
    }
  }
  //   쿠키가 생성이 됐는데 visited부분이 계속 false로 안뜸 반복문이 잘못된 듯

  function popupClose() {
    if (popupChecked === true) {
      //팝업을 다시 안보겠다, 팝업을 닫고 쿠키생성
      creatCookie();
      setPopupActive(false);
    } else {
      //팝업을 계속 보겠다. 팝업을 닫고 쿠키를 제거
      setPopupActive(false);
      delCookie();
    }
  }
};

export default Popup;
