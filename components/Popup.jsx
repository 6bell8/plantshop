import { useState, React, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import cookie from "react-cookies";
import { Roulette } from "./";

const Popup = () => {
  const [visited, setVisited] = useState(true);
  const [popupActive, setPopupActive] = useState(false);
  const [popupChecked, setPopupChecked] = useState(false);

  const checkCookie = (name) => {
    const cookies = document.cookie.split(";");
    let cnt = 0;

    while (cnt < cookies.length) {
      if (cookies[cnt].indexOf(name) > -1) {
        setVisited(false);
      }
      cnt++;
    }

    console.log(visited);
    // 처음부터 block none 처리 해놓기, 반대로 하면 찰나의 순간에 잠깐뜸
    if (visited === true) {
      setPopupActive(true);
    } else {
      setPopupActive(false);
    }
  };

  useEffect(() => {
    checkCookie("Cookiee");
  }, [delCookie]);

  return (
    <div className={`popup-box ${popupActive === true ? "active" : ""}`}>
      <div className="close-box">
        <div className="close" onClick={popupClose}>
          <GrClose size={31} className="close-btn" onClick={popupClose} />
        </div>
      </div>

      <h4 className="popup-title">
        안녕하세요. 박진성의 포트폴리오입니다.
        <p className="popup-title-desc">
          바쁘신 담당자분 들을 위해 룰렛을 돌리면 주요 페이지로 이동되도록
          설계했습니다. 방문해주셔서 진심으로 감사합니다.
        </p>
      </h4>
      <Roulette />

      <label className="popup-hide">
        <input
          type="checkbox"
          className="popup-check-box"
          id="check1"
          checked={popupChecked}
          onChange={(e) => setPopupChecked(e.target.checked)}
        />
        오늘 하루 보이지않기
      </label>
    </div>
  );

  //  함수가 실행이 되어도 바로 지워지는 것이 아님. 지워도 이따가 지워지고 새로고침하면 다시 쿠키생성 반복
  function delCookie() {
    cookie.remove("Cookiee", { path: "/" });

    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 1);
    cookie.save("Cookiee", "pleasepassme", {
      path: "/",
      expires,
    });
  }

  function creatCookie() {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    cookie.save("Cookiee", "pleasepassme", {
      path: "/",
      expires,
    });
  }

  //   쿠키 일치함수

  function popupClose() {
    if (popupChecked === true) {
      //팝업을 다시 안보겠다, 팝업을 닫고 쿠키생성
      creatCookie();
      setPopupActive(false);
    } else {
      //팝업을 계속 보겠다. 팝업을 닫고 쿠키를 제거
      delCookie();
      setPopupActive(false);
    }
  }
};

export default Popup;
