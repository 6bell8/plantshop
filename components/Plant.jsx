import React from "react";
import Link from "next/link"; // 제품에 연결하기위해서 next link를 가져오기

import { urlFor } from "../lib/client";

const Plant = ({ plant: { image, name, slug, price } }) => {
  return (
    <div>
      {/* 링크 태그 안에 태그를 추가해야 오류가 풀림 */}

      <div className="product-card left">
        <img
          src={urlFor(image && image[0])}
          width={200}
          height={200}
          alt=""
          className="product-image"
        />
      </div>
    </div>
  );
};

export default Plant;
