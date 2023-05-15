import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const Localviewed = () => {
  const router = useRouter();
  //   let [viewedProduct, setViewedProduct] = useState([]);
  //   로컬 스토리지

  useEffect(() => {
    // 일단 로컬스토리지 파싱
    //   let viewedProduct = JSON.parse(localStorage.getItem("watched"));

    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  let viewedProduct = JSON.parse(localStorage.getItem("watched"));

  console.log(viewedProduct);
  return (
    <div className="viewed-wrapper">
      <div className="viewed-box">
        <p className="viewed-title">최근 본 상품</p>
      </div>
    </div>
  );
};

export default Localviewed;
