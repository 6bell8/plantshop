import { React, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const Localviewed = () => {
  const router = useRouter();
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  // const [link, setLink] = useState([]);

  useEffect(() => {
    const title = localStorage.getItem("watched");
    const img = localStorage.getItem("watched02");
    setTitle(JSON.parse(title));
    setImg(JSON.parse(img));
  }, [router]);

  if (title == null) {
    undefined;
  } else if (title.length >= 4) {
    title.shift();
  }

  return (
    <div className="viewed-wrapper">
      <div className="viewed-box">
        <p className="viewed-title">최근 본 상품</p>
        <div className="viewed-products">
          {title?.map((item, i) => (
            <div
              className="viewed-product"
              key={i}
              // props로 받을 경우 화살표 함수 function으로 받을 때는 그냥 사용해도 무방함
              onClick={() => router.push("/slideBanner/" + img[i])}
            >
              {/* <img className="viewed-img" src={`${img[i]}`} /> */}

              <p className="viewed-name">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Localviewed;
