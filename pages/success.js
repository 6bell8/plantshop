import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runRealistic } from "../lib/utils";

// pages 내에서 생성해서 그대로 라우팅이 된다.
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  const [order, setOrder] = useState(null);

  // 주문 후 context api에 있는 항목을 지움
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runRealistic();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>주문해주셔서 감사합니다.</h2>
        <p className="email-msg">
          주문내역은 이메일을 통해서 확인해보실 수 있습니다.
        </p>
        <p className="description">
          다른 요청사항은
          <a className="email" href="mailto:parkgutime@gmail.com">
            parkgutime@gmail.com
          </a>
          통해서 문의주세요.
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            계속 쇼핑하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
