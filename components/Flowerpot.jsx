import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Flowerpot = ({ flowerpot: { image, name, slug, price } }) => {
  return (
    <>
      {/* 링크 태그 안에 태그를 추가해야 오류가 풀림 */}

      <div className="product-card right">
        <img
          src={urlFor(image && image[0])}
          alt=""
          width={200}
          height={200}
          className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">{price} 원</p>
      </div>
    </>
  );
};

export default Flowerpot;
