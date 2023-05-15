import { React, useEffect } from "react";
import { useRouter } from "next/router";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const Localviewed = () => {
  const router = useRouter();

  //   로컬 스토리지

  useEffect(() => {
    // 일단 로컬스토리지 파싱
    let viewedProduct = JSON.parse(localStorage.getItem("watched"));

    // slug에서 같이 배열에 추가를 시켜주어야함.
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="viewed-wrapper">
      <div className="viewed-box">
        <p className="viewed-title">최근 본 상품</p>

        {/* {viewedProduct !== null
          ? viewedProduct.map((a, i) => {
              return (
                <div className="watchedItem" key={i}>
                  <div
                    onClick={() => {
                      router.push("/plant/" + 꺼낸거3[i]);
                    }}
                  >
                    <img src={`${viewedProduct[i]}`} className="localImg"></img>
                  </div>
                  <p className="name">{꺼낸거2[i]}</p>
                </div>
              );
            })
          : null} */}
      </div>
    </div>
  );
};

export default Localviewed;
